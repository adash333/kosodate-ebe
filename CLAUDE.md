# CLAUDE.md

このリポジトリ「子育てエビデンス相談室（kosodate-ebe）」で作業するときの方針。
プロジェクトの概要・技術構成・データ更新手順は `AGENTS.md` と `README.md` を参照する。

## Git 運用（最重要）

**すべての変更は最初から `main` ブランチに直接 commit & push する。**

- 機能ブランチ（`claude/*` など）は作らない。作業ツリーで直接 `main` に commit する。
- Pull Request は作らない（ユーザーから明示依頼があった場合のみ）。
- `main` への push で GitHub Actions（`.github/workflows/deploy.yml`）が
  GitHub Pages（https://5micro.net）へ自動デプロイする。push＝本番反映である点に注意。
- push が network error で失敗した場合のみ、指数バックオフ（2s/4s/8s/16s）で最大4回リトライ。
- ビルド成果物（`*.tsbuildinfo` 等、`.gitignore` 済み）はコミットしない。

> 過去には作業用ブランチを使っていたが、本リポジトリは
> **main 直 push 運用**に統一した（ユーザー指示・2026-06-19）。

## 作業ログ

- セッションの作業概要は `save-prompt` スキルで `doc/prompt/YYMMDD-連番-題名.md` に保存し、
  `main` に push する。
