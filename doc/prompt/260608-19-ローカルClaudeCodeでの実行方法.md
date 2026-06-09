# ローカル Claude Code での実行方法

- 日付: 2026-06-08
- セッション: 1
- 連番: 19

## プロンプト

> クロードコワークでできますか？やり方を教えて下さい

## 概要

ローカルの Claude Code（ネット制限なし）でブログから動画URLを取得できるか、その手順の質問。ブログ巡回→動画URL抽出→著者・年で照合→enrichment.json更新を行う専用スクリプト `scripts/fetch-youtube.mjs` を作成・push し、ローカルで `node scripts/fetch-youtube.mjs` → `node scripts/merge-data.mjs` → push する手順（Claude Code に頼む方法／手動コマンド両方）を案内した。
