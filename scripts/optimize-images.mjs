#!/usr/bin/env node
// optimize-images.mjs — 記事・用語解説のヒーロー画像を WebP に変換する。
// 元PNG（1672×941・約2.4MB）を幅1200pxのWebP（品質80）に変換し、元PNGを削除する。
// 新しい画像を追加したときは PNG を置いてから本スクリプトを再実行すればよい。
// 使い方: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdirSync, unlinkSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIRS = ['public/articles', 'public/glossary'];
const WIDTH = 1200;

let total = 0;
for (const dir of DIRS) {
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.png'))) {
    const src = join(dir, f);
    const out = src.replace(/\.png$/, '.webp');
    await sharp(src).resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
    const kb = Math.round(statSync(out).size / 1024);
    unlinkSync(src);
    console.log(`${out} (${kb}KB)`);
    total++;
  }
}
console.log(`変換完了: ${total}枚`);
