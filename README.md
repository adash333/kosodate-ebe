# 子育てエビデンス相談室（kosodate-ebe）

子育ての悩みを選ぶと、論文（エビデンス）に基づく一言アドバイス・次の一歩・
解説動画・論文出典を返すWebアプリ。YouTubeチャンネル
「ゆっくり子育てエビデンス研究所【東大理三夫婦】(@evilab)」の付帯サイト。

- 公開URL（予定）: https://k.5micro.net
- 仕組み: ルールベース（静的・無料、実行時にAI APIを呼ばない）
- データ: 約152件（`data/advice.json`）

## ローカルで動かす

```bash
npm install
npm run dev      # http://localhost:5173
```

## ビルド

```bash
npm run build    # dist/ に出力（GitHub Actions が Pages へ自動デプロイ）
```

## データ更新（新作動画が増えたとき）

データ元は Obsidian vault の動画md。vault側で再生成してコピーします。

```bash
node scripts/build-data.mjs   # md → data/_raw_extract.json
node scripts/merge-data.mjs   # _raw_extract.json + enrichment.json → data/advice.json
```

- `data/enrichment.json` … idごとの意味づけ（一言アドバイス等）。新規動画はここに追記。
- `data/taxonomy.json` … 悩みカテゴリ階層（Q1→Q2 / 年齢）。

## 構成

```
src/            React + Vite（TypeScript）
  App.tsx       4ステップの質問フロー（Q1カテゴリ→Q2具体→Q3キーワード→Q4年齢→結果）
  match.ts      タグ・カテゴリ・年齢・自由入力でスコアリング
  components/   ResultCard, Legal
data/           advice.json / taxonomy.json / enrichment.json
public/         CNAME(k.5micro.net), ads.txt, .nojekyll
.github/workflows/deploy.yml   GitHub Pages 自動デプロイ
```

## アクセス解析・広告

- Google Analytics 4（測定ID `G-N6B7HX8CQ8`）を `index.html` で読み込み。
- Google AdSense は承認後に `public/ads.txt` とコードを追加予定。
