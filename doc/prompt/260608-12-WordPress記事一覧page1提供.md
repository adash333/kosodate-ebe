# WordPress 記事一覧 page1 の提供

- 日付: 2026-06-08
- セッション: 1
- 連番: 12

## プロンプト

> （WordPress REST API `?rest_route=/wp/v2/posts&per_page=100&page=1` の記事一覧 JSON を貼付。各記事の id・date・title を含む最新100件）

## 概要

ブログ（risan.jpn.org）の記事一覧 page1（最新100件、id=`?p=`番号・投稿日・タイトル）を提供。タイトル末尾の『著者, 年』で各動画と照合し、page1 だけで83件を一意マッチできた。
