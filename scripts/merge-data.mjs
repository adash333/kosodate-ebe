#!/usr/bin/env node
// merge-data.mjs — _raw_extract.json（機械抽出）と enrichment.json（人手の意味づけ）を
// 結合して、アプリが読む最終 advice.json を生成する。
//
// 使い方: node webapp/scripts/merge-data.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, '..', 'data');

const raw = JSON.parse(readFileSync(join(DATA, '_raw_extract.json'), 'utf8'));
// 001-033 は vault 導入前の動画で md が無いため、0 論文リスト.md から起こした
// legacy-videos.json を機械抽出ぶんとして補完する（build-data.mjs の再実行でも消えない）。
const legacy = JSON.parse(readFileSync(join(DATA, 'legacy-videos.json'), 'utf8'));
const enrich = JSON.parse(readFileSync(join(DATA, 'enrichment.json'), 'utf8'));
// 公開済み動画の最新番号（2026-06-09時点）。未公開（番号がこれより大）はアプリに含めない。
// 新作公開時はこの数値を更新する。
const MAX_VIDEO_ID = 156;
const byId = new Map();
for (const r of [...raw, ...legacy]) if (!byId.has(r.id)) byId.set(r.id, r); // 同id重複は先頭(=archive優先)

const items = [];
const missing = [];
for (const [id, e] of Object.entries(enrich.items)) {
  if (e.exclude) continue;
  if (Number(id) > MAX_VIDEO_ID) continue; // 未公開動画は除外
  const r = byId.get(id);
  if (!r) { missing.push(id); continue; }
  items.push({
    id,
    title: r.title,
    author: r.author,
    year: r.year,
    citation: r.citation,
    paperUrl: e.paperUrl ?? r.paperUrl,
    // ブログ解説記事URL（enrichment.json で id ごとに付与。無ければnull）
    blogUrl: e.blogUrl ?? null,
    // 解説動画URL: enrichment(人手/スクリプト付与) > md直URL > チャンネル内検索リンク
    youtubeUrl: e.youtubeUrl ?? r.youtubeUrl ?? r.youtubeSearchUrl,
    categories: e.categories,
    tags: e.tags,
    ageBands: e.ageBands,
    finding: e.finding,
    advice: e.advice,
    nextStep: e.nextStep,
  });
}
items.sort((a, b) => Number(b.id) - Number(a.id));

writeFileSync(join(DATA, 'advice.json'),
  JSON.stringify({ generatedAt: new Date().toISOString().slice(0, 10), count: items.length, items }, null, 2) + '\n', 'utf8');

console.log(`advice.json 生成: ${items.length}件`);
if (missing.length) console.log(`⚠ raw抽出に無いid（要確認）: ${missing.join(', ')}`);
const rawIds = new Set([...raw, ...legacy].map(r => r.id));
const enrichIds = new Set(Object.keys(enrich.items));
const notEnriched = [...rawIds].filter(id => !enrichIds.has(id));
if (notEnriched.length) console.log(`未意味づけのid: ${notEnriched.join(', ')}`);
