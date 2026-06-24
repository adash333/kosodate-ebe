#!/usr/bin/env node
// prerender.mjs — クライアントビルド(dist/)とSSRビルド(dist-ssr/)を組み合わせ、
// 各ルートを「本文入りの静的HTML」として dist/<path>/index.html に書き出す。
// あわせてページ別の <title>/meta description/canonical/OGP/JSON-LD を付与し、
// dist/sitemap.xml を公開対象ルートで再生成する。
//
// 目的: SPAの「空の殻HTML・全ページ同一メタ」を解消し、クローラに中身を見せる。
// 使い方: vite build → vite build --ssr ... の後に node scripts/prerender.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SSR_ENTRY = join(ROOT, 'dist-ssr', 'entry-server.js');
const ORIGIN = 'https://5micro.net';

const { getRoutes, render } = await import(pathToFileURL(SSR_ENTRY).href);

// テンプレートは vite が出力した dist/index.html。'/' ルートで上書きするため、
// 再実行時に前回の生成物を拾っても壊れないよう、注入済みの head ブロックと
// #root の中身を取り除いて素のテンプレートに正規化する（冪等化）。
let template = readFileSync(join(DIST, 'index.html'), 'utf8');
template = template
  .replace(/\s*<!--prerender:start-->[\s\S]*?<!--prerender:end-->/g, '')
  .replace(/(<div id="root">)[\s\S]*?(<\/div>)(\s*<script type="module")/, '$1$2$3');

const escAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escText = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function headTags(meta) {
  const url = ORIGIN + (meta.path === '/' ? '/' : meta.path);
  const tags = [
    `<link rel="canonical" href="${escAttr(url)}" />`,
    `<meta property="og:type" content="${meta.path.startsWith('/articles/') ? 'article' : 'website'}" />`,
    `<meta property="og:title" content="${escAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escAttr(meta.description)}" />`,
    `<meta property="og:url" content="${escAttr(url)}" />`,
    `<meta property="og:site_name" content="子育てエビデンス相談室" />`,
    `<meta name="twitter:card" content="summary" />`,
  ];
  if (meta.jsonLd) tags.push(`<script type="application/ld+json">${meta.jsonLd}</script>`);
  return '<!--prerender:start-->\n    ' + tags.join('\n    ') + '\n    <!--prerender:end-->';
}

function buildHtml(meta) {
  const body = render(meta.path);
  let html = template;
  // <title> 差し替え
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escText(meta.title)}</title>`);
  // description 差し替え
  html = html.replace(
    /<meta name="description" content="[\s\S]*?" \/>/,
    `<meta name="description" content="${escAttr(meta.description)}" />`,
  );
  // 追加 head タグを </head> 直前に挿入
  html = html.replace('</head>', `    ${headTags(meta)}\n  </head>`);
  // 本文を #root に流し込む
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

const routes = getRoutes();
let count = 0;
for (const meta of routes) {
  const html = buildHtml(meta);
  const outDir = meta.path === '/' ? DIST : join(DIST, meta.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  count++;
}

// sitemap.xml を公開対象ルートで再生成（未公開記事は含めない）
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  routes
    .map((m) => `  <url>\n    <loc>${ORIGIN}${m.path === '/' ? '/' : m.path}</loc>\n  </url>`)
    .join('\n') +
  '\n</urlset>\n';
writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf8');

console.log(`プリレンダリング完了: ${count}ページ + sitemap.xml（${routes.length}URL）`);
