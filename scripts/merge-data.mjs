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
const enrich = JSON.parse(readFileSync(join(DATA, 'enrichment.json'), 'utf8'));
const byId = new Map();
for (const r of raw) if (!byId.has(r.id)) byId.set(r.id, r); // 同id重複は先頭(=archive優先)

const items = [];
const missing = [];
for (const [id, e] of Object.entries(enrich.items)) {
  if (e.exclude) continue;
  const r = byId.get(id);
  if (!r) { missing.push(id); continue; }
  items.push({
    id,
    title: r.title,
    author: r.author,
    year: r.year,
    citation: r.citation,
    paperUrl: r.paperUrl,
    // 直URLがあれば優先、無ければチャンネル内検索リンク（方式A）
    youtubeUrl: r.youtubeUrl || r.youtubeSearchUrl,
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
const rawIds = new Set(raw.map(r => r.id));
const enrichIds = new Set(Object.keys(enrich.items));
const notEnriched = [...rawIds].filter(id => !enrichIds.has(id));
if (notEnriched.length) console.log(`未意味づけのid: ${notEnriched.join(', ')}`);
