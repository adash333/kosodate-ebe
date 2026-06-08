#!/usr/bin/env node
// build-data.mjs — vault の動画md から advice.json の「機械抽出フィールド」を生成する。
// 意味づけフィールド（finding/advice/nextStep/categories/tags/ageBands）は別途人手で付与。
//
// 使い方: node webapp/scripts/build-data.mjs
// 出力:   webapp/data/_raw_extract.json （下書き）＋ 標準出力にサマリ

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..'); // リポジトリルート
const ARCHIVE = join(ROOT, '東大理三夫婦の子育てエビデンス研究所');

const YT_RE = /(https?:\/\/(?:youtu\.be\/[\w-]+|(?:www\.)?youtube\.com\/watch\?[\w=&-]+))/i;
const URL_RE = /https?:\/\/[^\s)\]]+/;

// ファイル名 → {id, content, author, year}
function parseName(file) {
  let base = file.replace(/\.md$/, '');
  const m = base.match(/^(\d{3})_(.*)$/);
  if (!m) return null;
  const id = m[1];
  let rest = m[2];
  // 末尾の日付サフィックス（ " 2026.2.7" / " 2.10" / " 6.3" 等）を除去
  rest = rest.replace(/\s+\d{1,4}([.\-]\d{1,2}){1,2}\s*$/, '').trim();
  // 末尾の著者+年（ラテン文字列 or 日本語名 + 4桁年）を抽出
  let author = null, year = null, content = rest;
  const ay = rest.match(/^(.*?)([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’\- ]*?)?(\d{4})$/);
  if (ay) {
    year = ay[3];
    author = (ay[2] || '').trim() || null;
    content = (ay[1] || '').trim();
    if (!author) {
      // 日本語著者（例: 井出2013, 山口2023）。content末尾の非英数字塊を著者扱い
      const jp = content.match(/^(.*?)([一-鿿゠-ヿ]{2,4})$/);
      if (jp && jp[1]) { content = jp[1]; author = jp[2]; }
    }
  }
  return { id, content: content || rest, author, year };
}

function parseBody(text) {
  const lines = text.split(/\r?\n/);
  const nonEmpty = lines.map(l => l.trim()).filter(l => l.length > 0);
  const citation = nonEmpty[0] || null;
  // paperUrl: 単独行のURL（YouTube以外）を優先、無ければcitation内のURL
  let paperUrl = null;
  for (const l of nonEmpty.slice(1)) {
    if (YT_RE.test(l)) continue;
    const u = l.match(URL_RE);
    if (u && /^https?:\/\//.test(l)) { paperUrl = u[0]; break; }
  }
  if (!paperUrl && citation) {
    const u = citation.match(URL_RE);
    if (u && !YT_RE.test(u[0])) paperUrl = u[0];
  }
  // youtubeUrl: 本文全体から
  const ytm = text.match(YT_RE);
  const youtubeUrl = ytm ? ytm[1] : null;
  // 日本語タイトル訳 ＝ paperUrl の次の非空行（CJKを含む、URL/citation以外）
  let jpTitle = null, ctrTitle = null;
  const idx = nonEmpty.findIndex(l => paperUrl && l.includes(paperUrl));
  const after = idx >= 0 ? nonEmpty.slice(idx + 1) : nonEmpty.slice(1);
  const cjk = l => /[一-鿿぀-ヿ]/.test(l);
  const titleCands = after.filter(l => cjk(l) && !URL_RE.test(l) && !l.startsWith('- ') && !l.startsWith('#') && !l.startsWith('|'));
  if (titleCands[0]) jpTitle = titleCands[0];
  // CTRタイトル ＝ 【】を含む行（最初のもの）
  ctrTitle = nonEmpty.find(l => /【.+】/.test(l) && cjk(l)) || (titleCands[1] || null);
  return { citation, paperUrl, youtubeUrl, jpTitle, ctrTitle };
}

function collect(dir, label) {
  let files = [];
  try { files = readdirSync(dir).filter(f => /^\d{3}_.*\.md$/.test(f)); }
  catch { return []; }
  const out = [];
  for (const f of files) {
    const name = parseName(f);
    if (!name) continue;
    const body = parseBody(readFileSync(join(dir, f), 'utf8'));
    out.push({
      id: name.id,
      source: label,
      file: f,
      title: name.content,
      author: name.author,
      year: name.year ? Number(name.year) : null,
      citation: body.citation,
      paperUrl: body.paperUrl,
      jpTitle: body.jpTitle,
      ctrTitle: body.ctrTitle,
      youtubeUrl: body.youtubeUrl,
      // 既定のチャンネル内検索リンク（方式A）。youtubeUrl があればアプリ側で優先。
      youtubeSearchUrl: 'https://www.youtube.com/@evilab/search?query=' + encodeURIComponent(name.content),
      // ↓ 意味づけは後工程で付与
      categories: [], tags: [], ageBands: [],
      finding: null, advice: null, nextStep: null,
    });
  }
  return out;
}

const archive = collect(ARCHIVE, 'archive');
const drafts = collect(ROOT, 'draft');
// id重複は archive を優先しつつ両方残す（drafts の未アップロードも候補に含める）
const all = [...archive, ...drafts].sort((a, b) => Number(b.id) - Number(a.id));

const outDir = join(__dirname, '..', 'data');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, '_raw_extract.json'), JSON.stringify(all, null, 2) + '\n', 'utf8');

// サマリ
const withYt = all.filter(e => e.youtubeUrl).length;
const noPaper = all.filter(e => !e.paperUrl).length;
const noTitle = all.filter(e => !e.jpTitle).length;
console.log(`抽出件数: ${all.length}（archive ${archive.length} / draft ${drafts.length}）`);
console.log(`YouTube直URLあり: ${withYt} / paperURL欠落: ${noPaper} / 日本語タイトル欠落: ${noTitle}`);
console.log(`出力: webapp/data/_raw_extract.json`);
