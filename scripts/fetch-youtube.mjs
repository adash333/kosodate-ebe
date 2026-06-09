#!/usr/bin/env node
// fetch-youtube.mjs — ブログ(risan.jpn.org)の各記事から「埋め込みYouTube動画URL」を取得し、
// 各動画(advice)の blogUrl / youtubeUrl を enrichment.json に書き込むスクリプト。
//
// ※ネットワークが risan.jpn.org に到達できる環境（＝あなたのPCのローカル Claude Code 等）で実行すること。
//   Claude Code on the web の制限環境では allowlist で 403 になり使えません。
//
// 使い方:
//   node scripts/fetch-youtube.mjs      # enrichment.json を更新
//   node scripts/merge-data.mjs         # advice.json を再生成
//
// マッチング規則: ブログ記事タイトル末尾の「【著者, 年】」と、各動画の著者・年を突き合わせる。
// 著者・年が取れない動画は、タイトル完全一致（記号・空白を無視）で補完する。

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, '..', 'data');
const BASE = 'https://risan.jpn.org';

const norm = (s) =>
  (s == null ? '' : String(s))
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/[\s.]/g, '');
// タイトル完全一致用（【...】や記号を全部落とす）
const titleKey = (s) =>
  (s == null ? '' : String(s))
    .replace(/【[^】]*】/g, '')
    .replace(/&[a-z#0-9]+;/gi, '')
    .replace(/[\s\[\]「」『』、。・！？!?｜|…（）()／/]/g, '')
    .normalize('NFKC')
    .toLowerCase();

const YT_RE =
  /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:[^"'<>\s]*&)?v=|embed\/|v\/|shorts\/))([\w-]{11})/;

async function fetchAllPosts() {
  const posts = [];
  for (let page = 1; page < 20; page++) {
    const url = `${BASE}/?rest_route=/wp/v2/posts&per_page=100&page=${page}&_fields=id,date,title,content`;
    const res = await fetch(url);
    if (res.status === 400 || res.status === 404) break; // ページ超過
    if (!res.ok) throw new Error(`fetch失敗 page=${page} status=${res.status}`);
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    posts.push(...batch);
    if (batch.length < 100) break;
  }
  return posts;
}

function parsePost(p) {
  const title = (p.title && p.title.rendered) || '';
  const content = (p.content && p.content.rendered) || '';
  // 著者・年
  let key = null;
  for (const m of title.match(/【([^】]*)】/g) || []) {
    const inner = m.slice(1, -1);
    const ym = inner.match(/(19|20)\d{2}/);
    if (ym) {
      const year = Number(ym[0]);
      const author = inner.slice(0, ym.index).replace(/[\s,，、]+$/, '').trim();
      key = { author, year };
      break;
    }
  }
  // YouTube URL
  const ym = content.match(YT_RE);
  const youtubeUrl = ym ? `https://www.youtube.com/watch?v=${ym[1]}` : null;
  return { id: p.id, title, key, youtubeUrl };
}

async function main() {
  console.log('ブログ記事を取得中…');
  const posts = (await fetchAllPosts()).map(parsePost);
  console.log(`取得: ${posts.length}件`);

  // 照合インデックス
  const byAuthorYear = new Map(); // "author|year" -> post
  const byTitle = new Map(); //  titleKey -> post
  for (const post of posts) {
    if (post.key) {
      const k = `${norm(post.key.author)}|${post.key.year}`;
      if (!byAuthorYear.has(k)) byAuthorYear.set(k, post);
      const first = post.key.author.split(/[&,、]/)[0].trim();
      const fk = `${norm(first)}|${post.key.year}`;
      if (!byAuthorYear.has(fk)) byAuthorYear.set(fk, post);
    }
    const tk = titleKey(post.title);
    if (tk && !byTitle.has(tk)) byTitle.set(tk, post);
  }

  const enrichPath = join(DATA, 'enrichment.json');
  const enrich = JSON.parse(readFileSync(enrichPath, 'utf8'));
  const raw = JSON.parse(readFileSync(join(DATA, '_raw_extract.json'), 'utf8'));
  const rawById = new Map();
  for (const r of raw) if (!rawById.has(r.id)) rawById.set(r.id, r);

  let matched = 0, withVideo = 0, noBlog = [];
  for (const [id, e] of Object.entries(enrich.items)) {
    if (e.exclude) continue;
    const r = rawById.get(id);
    if (!r) continue;
    let post = null;
    if (r.author && r.year) post = byAuthorYear.get(`${norm(r.author)}|${Number(r.year)}`) || null;
    if (!post) post = byTitle.get(titleKey(r.title)) || null; // タイトル完全一致で補完
    if (!post) { noBlog.push(id); continue; }
    matched++;
    e.blogUrl = `${BASE}/?p=${post.id}`;
    if (post.youtubeUrl) { e.youtubeUrl = post.youtubeUrl; withVideo++; }
    // blogUrl / youtubeUrl を先頭付近に並べ替え（可読性）
    const reordered = {};
    if (e.blogUrl) reordered.blogUrl = e.blogUrl;
    if (e.youtubeUrl) reordered.youtubeUrl = e.youtubeUrl;
    for (const [k, v] of Object.entries(e)) if (k !== 'blogUrl' && k !== 'youtubeUrl') reordered[k] = v;
    enrich.items[id] = reordered;
  }

  writeFileSync(enrichPath, JSON.stringify(enrich, null, 2) + '\n', 'utf8');
  console.log(`ブログ照合: ${matched}件 / うち動画URL取得: ${withVideo}件`);
  if (noBlog.length) console.log(`ブログ未マッチ(要確認): ${noBlog.join(', ')}`);
  console.log('完了。次に `node scripts/merge-data.mjs` で advice.json を再生成してください。');
}

main().catch((e) => { console.error(e); process.exit(1); });
