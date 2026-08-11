# GitHub Freeでソース非公開・Pages公開へ移行

## 目的

GitHub Freeのまま、元リポジトリ `adash333/kosodate-ebe` のソースコードを非公開にしつつ、WebサイトはGitHub Pagesで公開し続けたい。

GitHub FreeではPrivateリポジトリからGitHub Pagesを公開できないため、以下の構成に分ける方針とした。

- `adash333/kosodate-ebe`: ソースコード用。将来的にPrivate化する。
- `adash333/kosodate-ebe-pages`: 公開用。Publicのまま、`dist/` の中身だけを置いてGitHub Pagesで公開する。

## 実施済み

ユーザーが `adash333/kosodate-ebe-pages` を作成済み。

ローカルで以下を実施した。

1. `npm run build` を実行し、最新の `dist/` を生成。
2. `/tmp/kosodate-ebe-pages-deploy` を作成。
3. `dist/` の中身だけを `/tmp/kosodate-ebe-pages-deploy` にコピー。
4. 一時ディレクトリをGitリポジトリとして初期化。
5. `Deploy site` という初回コミットを作成。
6. `git@github.com:adash333/kosodate-ebe-pages.git` をoriginに設定。
7. `main` ブランチへpush完了。

公開用リポジトリには、以下のようなビルド済みファイルのみが入っている。

- `index.html`
- `404.html`
- `company/index.html`
- `contact/index.html`
- `privacy/index.html`
- `disclaimer/index.html`
- `articles/index.html`
- `assets/*.js`
- `assets/*.css`
- `CNAME`
- `robots.txt`
- `sitemap.xml`
- `.nojekyll`
- `ads.txt`

## APIでできなかったこと

`gh api repos/adash333/kosodate-ebe-pages/pages -X POST ...` でGitHub Pages有効化を試したが、現在のGitHubトークン権限では以下のエラーになった。

```text
HTTP 403: Resource not accessible by personal access token
```

そのため、Pagesの有効化はブラウザから行う必要がある。

## 次にブラウザで行うこと

`adash333/kosodate-ebe-pages` で以下を設定する。

1. `Settings` → `Pages`
2. `Build and deployment`
3. Source: `Deploy from a branch`
4. Branch: `main`
5. Folder: `/root`
6. `Save`

その後、同じPages画面でCustom domainに以下を設定する。

```text
5micro.net
```

もし「ドメインが既に使われています」と表示された場合は、元リポジトリ `adash333/kosodate-ebe` の `Settings` → `Pages` でCustom domain `5micro.net` を外してから、公開用リポジトリ側に設定する。

## 安全な移行順

1. `kosodate-ebe-pages` のGitHub Pagesを有効化する。
2. `https://5micro.net` が新しい公開用リポジトリから表示されることを確認する。
3. `/company/`、`/contact/` など主要ページも確認する。
4. 問題なければ、元リポジトリ `kosodate-ebe` をPrivate化する。

新しい公開先の表示確認が終わるまでは、元リポジトリはPrivate化しない。

## 今後の自動化候補

将来的には、元リポジトリ `kosodate-ebe` のGitHub Actionsで以下を自動化できる。

1. `npm ci`
2. `npm run build`
3. `dist/` の中身だけを `adash333/kosodate-ebe-pages` にpush

PrivateリポジトリからPublicリポジトリへpushする場合は、適切な権限を持つPersonal Access Tokenを作成し、元リポジトリのSecretsに保存する必要がある。
