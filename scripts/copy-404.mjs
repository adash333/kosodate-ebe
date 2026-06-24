// copy-404.mjs — GitHub Pages 用の SPA フォールバックを作る。
// 各ルートの実体HTMLは scripts/prerender.mjs が生成済みなので、ここでは
// dist/index.html を 404.html にコピーするだけ（未知パスでもクライアント側で描画される）。
//
// ※ 以前は sitemap の全ルートに index.html をコピーしていたが、それだと
//   プリレンダリング結果をホームの殻で上書きしてしまうため廃止した。
import { copyFileSync, existsSync } from 'node:fs';

const index = 'dist/index.html';

if (existsSync(index)) {
  copyFileSync(index, 'dist/404.html');
  console.log('404.html を生成しました（SPAフォールバック）');
}
