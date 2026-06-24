# AGENTS.md

このリポジトリは「子育てエビデンス相談室（kosodate-ebe）」の静的Webアプリです。子育ての悩みを選ぶと、論文・ブログ・YouTube解説に紐づくアドバイスを返します。実行時にAI APIは呼ばず、`data/*.json` とルールベースのスコアリングだけで動きます。

## まず読む場所

- `README.md`: プロジェクト概要、起動、データ更新の公式メモ。
- `package.json`: npm scripts と依存関係。
- `src/App.tsx`: 画面遷移、簡易ルーティング、質問フロー、一覧ページ。
- `src/match.ts`: レコメンドのスコアリングロジック。
- `src/types.ts`: `AdviceItem`、分類、年齢帯などの主要型。
- `src/data.ts`: `data/advice.json` と `data/taxonomy.json` の読み込み。
- `data/enrichment.json`: 人手で付与する意味づけデータ。
- `scripts/merge-data.mjs`: 最終的な `data/advice.json` の生成。

## 技術構成

- Vite + React 18 + TypeScript のSPAです。
- ルーティングライブラリは使っていません。`src/App.tsx` が `window.location.pathname` を見て `/company`、`/contact`、`/privacy`、`/disclaimer`、`/articles`、`/articles/:slug` を出し分けます。
- 配信先は独自ドメイン直下なので、`vite.config.ts` の `base` は `/` です。
- GitHub Pages向けに `npm run build` 後、`scripts/copy-404.mjs` でSPA fallback用の `404.html` を作ります。
- GA4イベントは `src/analytics.ts` の `track()` 経由です。`gtag` がないローカル環境では何もしません。

## 主要ディレクトリ

- `src/`: React/TypeScriptアプリ本体。
- `src/components/`: 結果カード、法務ページ、会社情報、問い合わせ、読み物表示。
- `data/`: アプリが読むJSONと、生成元・補完用JSON。
- `scripts/`: データ抽出・マージ・404生成などのNodeスクリプト。
- `legal/`: 免責事項・プライバシーポリシーのMarkdown原稿。
- `doc/`: 作業ログやプロンプト記録。通常の実装変更では触らなくてよいです。
- `public/`: `CNAME`、`ads.txt`、`robots.txt`、`sitemap.xml`、`.nojekyll`。

## 開発コマンド

```bash
npm install
npm run dev
npm run build
npm run preview
npm run data
```

- `npm run dev`: ローカル開発サーバー。
- `npm run build`: `tsc -b`、`vite build`、`copy-404` をまとめて実行します。変更後の基本検証はこれを使ってください。
- `npm run data`: `scripts/build-data.mjs` と `scripts/merge-data.mjs` を順に実行します。

## データ更新の流れ

1. vault由来の動画Markdownから `scripts/build-data.mjs` が `data/_raw_extract.json` を生成します。
2. `data/legacy-videos.json` は、vault導入前の動画を補完します。
3. `data/enrichment.json` は、カテゴリ、タグ、年齢帯、アドバイス、次の一歩、ブログURL、YouTube URLなどの人手データです。
4. `scripts/merge-data.mjs` が上記を結合して `data/advice.json` を生成します。

注意点:

- アプリが直接読むのは主に `data/advice.json` と `data/taxonomy.json` です。
- 新作動画を公開対象にする場合は、`scripts/merge-data.mjs` の `MAX_VIDEO_ID` も確認してください。
- `data/enrichment.json` を更新したら、`npm run data` で `data/advice.json` を再生成してください。
- `AdviceItem.ageBands` は `preschool`、`elementary`、`teen` のいずれかです。`src/types.ts` と `data/taxonomy.json` の整合性を保ってください。

## 実装時の注意

- UI文言は日本語の保護者向けです。専門用語を増やしすぎず、安心感のある短い表現を優先してください。
- 医療・教育・発達に関わる助言を扱うため、断定しすぎる表現や診断的な表現は避けてください。
- 結果カードでは、実践的な「一言アドバイス」「次の一歩」「研究でわかったこと」を壊さないようにしてください。
- 外部リンクは原則 `target="_blank"` と `rel="noopener noreferrer"` を付けてください。
- YouTube、ブログ、論文URLの優先順位は既存実装に合わせてください。結果カードでは `blogUrl` があれば「論文解説」、なければ `paperUrl` を表示します。
- ルーティングを増やす場合は、静的配信とGitHub Pages fallbackの挙動も確認してください。
- デザイン変更は `src/styles.css` に集約されています。既存の穏やかなトーン、モバイル前提のレイアウト、カードUIに合わせてください。
- `doc/prompt/` は作業履歴です。機能実装や通常の修正では、必要がない限り更新しないでください。

## 検証の目安

- TypeScriptやビルドに関わる変更: `npm run build`
- データJSONや生成スクリプト変更: `npm run data` の後に `npm run build`
- UI変更: `npm run dev` で主要フロー（トップ、Q1-Q4、結果、動画一覧、読み物、法務、会社情報、問い合わせ）を確認
- 記事追加: `/articles` と `/articles/:slug` の両方を確認

## 変更方針

- 小さく、既存の構造に沿って変更してください。
- 生成済みの `data/advice.json` だけを手で直すのは避け、原則として生成元の `data/enrichment.json` やスクリプトを直してください。
- 依存関係は増やしすぎないでください。現状はReact/Vite/TypeScriptだけで完結しています。
- 法務・プライバシー・広告・解析に関わる変更は、`legal/`、`public/ads.txt`、`index.html`、`src/analytics.ts` の関係を確認してから行ってください。
- ユーザーから実装・修正・データ更新・画像追加などの変更依頼を受けた場合は、作業完了後に必要な検証を行い、意図した変更だけをコミットして `main` に push してください。明示的に止められた場合や、作業ツリーに判断不能な unrelated changes がある場合は確認してください。
