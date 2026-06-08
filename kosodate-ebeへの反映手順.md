# webapp/ を kosodate-ebe リポジトリに反映する手順

このセッションは `ObsidianGitVault` 専用にロックされており、こちらから
`kosodate-ebe` へ直接 push できません。お手元（vaultをcloneしているPC）で
以下を実行してください。`webapp/` の中身を **リポジトリのルート**として push します。

> 前提: あなたのGitHubアカウント `adash333` でPCからpushできる状態（過去にpush経験あり）。

---

## 方法A：git subtree で一発 push（おすすめ）

vault のフォルダで実行します。`webapp/` 配下だけを kosodate-ebe のルートへ送ります。

```bash
cd <vaultのフォルダ>            # 0 論文リスト.md などがある場所
git pull origin main           # 最新（webapp一式入り）を取得

git subtree push --prefix=webapp https://github.com/adash333/kosodate-ebe.git main
```

- もし「rejected / non-fast-forward」と出たら、新repoの初期READMEと衝突しています。
  下の方法Bを使うか、kosodate-ebe を一度空にして再実行してください。

---

## 方法B：手でコピーして push（確実）

```bash
# 1) 別の場所に kosodate-ebe を clone
cd ~/work    # 任意の作業フォルダ
git clone https://github.com/adash333/kosodate-ebe.git
cd kosodate-ebe

# 2) vault の webapp/ の中身を“まるごと”コピー（隠しファイルも！）
#    <VAULT> は実際のvaultパスに置き換え
cp -r <VAULT>/webapp/. .

# 3) 余計なものを除外（node_modules等は .gitignore 済み）
rm -rf node_modules dist

# 4) コミットして push
git add -A
git commit -m "子育てエビデンス相談室アプリ 初回投入"
git push origin main
```

> Windowsの場合、`cp -r <VAULT>/webapp/. .` は Git Bash で実行するか、
> エクスプローラーで `webapp` の中身（`.github` や `.gitignore` を含む）を
> すべてコピーしてください。**隠しファイルの取りこぼしに注意。**

---

## push 後のGitHub設定（公開する）

1. https://github.com/adash333/kosodate-ebe → **Settings → Pages**
   - 「Build and deployment」→ Source: **GitHub Actions** を選択。
   - （`.github/workflows/deploy.yml` が自動で走り、ビルド＆公開します）
2. 同じ Pages 画面の **Custom domain** に `k.5micro.net` を入力して Save。
   - リポジトリの `public/CNAME` に既に `k.5micro.net` が入っています。
3. **DNS設定**（5micro.net 側）: `webapp/デプロイ手順.md` のとおり
   **CNAMEレコード `k` → `adash333.github.io`** を1件追加。
   - サービス名（お名前.com等）を教えていただければ、画面に沿って案内します。
4. DNS反映後、Pages画面で **Enforce HTTPS** をON。
   → `https://k.5micro.net` で公開完了。

---

## 動作確認（push前にローカルで見たい場合）

```bash
cd <VAULT>/webapp
npm install
npm run dev      # http://localhost:5173 をブラウザで開く
```

---

## 困ったら

- 方法A/Bどちらでも、コミットが入れば Actions が自動でデプロイを試みます。
- Actionsが赤くなった/Pagesが出ない等は、エラーメッセージを教えてください。
  次のセッションを `kosodate-ebe` をスコープに含めて開始すれば、こちらで
  直接ログを見て修正できます（vaultと両方をスコープに入れるのが理想）。
