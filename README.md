# 子育てエビデンス相談室（kosodate-ebe）

子育ての悩みを選ぶと、論文（エビデンス）に基づく一言アドバイス・次の一歩・
解説動画・論文出典を返すWebアプリ。YouTubeチャンネル
「ゆっくり子育てエビデンス研究所【東大理三夫婦】(@evilab)」の付帯サイト。

- 公開URL: **https://5micro.net** （apexドメイン。2026-06-10に `k.5micro.net` から移行）
- 仕組み: ルールベース（静的・無料、実行時にAI APIを呼ばない）
- データ: **154件**（`data/advice.json`、#001〜#156。欠番 #085/#146）
- Google AdSense: `public/ads.txt` 設置済み・**2026-06-10 再審査リクエスト済み（審査待ち）**

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

データ元は Obsidian vault の動画md（#034以降）＋ `data/legacy-videos.json`（#001〜#033）。

```bash
node scripts/build-data.mjs   # vault md → data/_raw_extract.json（vaultがある環境で）
node scripts/merge-data.mjs   # _raw_extract + legacy-videos + enrichment → data/advice.json
```

手順:

1. vault に新作動画の md を追加（既存の命名規則どおり）
2. `data/enrichment.json` に該当idの意味づけ（advice/finding/tags等）を追記
3. `scripts/merge-data.mjs` の `MAX_VIDEO_ID`（公開済み最新番号）を更新
4. 上の2コマンドを実行 → `advice.json` 再生成 → commit & push（Actionsが自動デプロイ）

- `data/legacy-videos.json` … **#001〜#033**（vault導入前の動画）の機械抽出相当データ。
  vault に md が無いため `0 論文リスト.md` から起こした固定ファイル。
  `build-data.mjs` を再実行しても消えない（merge-data.mjs が結合する）。
- `data/enrichment.json` … idごとの意味づけ（一言アドバイス等）。新規動画はここに追記。
- `data/taxonomy.json` … 悩みカテゴリ階層（Q1→Q2 / 年齢）。

## 構成

```
src/            React + Vite（TypeScript）
  App.tsx       4ステップの質問フロー（Q1カテゴリ→Q2具体→Q3キーワード→Q4年齢→結果）
                ＋動画一覧（全154本）／読み物／会社情報／問い合わせ／法的ページ
  match.ts      タグ・カテゴリ・年齢・自由入力でスコアリング
  articles.ts   読み物（コラム）10本
  components/   ResultCard, Legal
data/           advice.json / taxonomy.json / enrichment.json / legacy-videos.json
public/         CNAME(5micro.net), ads.txt, robots.txt, sitemap.xml, .nojekyll
.github/workflows/deploy.yml   GitHub Pages 自動デプロイ（main へのpushで起動）
doc/            5micro_backup.md（旧WordPressサイトの内容控え）, prompt/（セッション記録）
```

## ドメイン・DNS（さくらインターネット）

- apex `5micro.net` → GitHub Pages（Aレコード `185.199.108.153`。
  冗長化するなら `.109/.110/.111` も追加可）
- `Enforce HTTPS` 有効化済み。詳細は `デプロイ手順.md` を参照。

## アクセス解析・広告

- Google Analytics 4（測定ID `G-N6B7HX8CQ8`）を `index.html` で読み込み。
- Google AdSense: パブリッシャーID `pub-6024571063221724`。`public/ads.txt` 設置済み。
  審査承認後に広告コードを `index.html` へ追加予定（結果カード下部などUXを損なわない位置）。
