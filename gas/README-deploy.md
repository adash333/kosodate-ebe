# お問い合わせフォーム GAS デプロイ手順

受信方法: **スプレッドシート保存 ＋ メール通知**
使用アカウント: **5micromember@gmail.com**

> すべての作業を **5micromember@gmail.com でログインした状態**で行うこと。

---

## 手順1. 合言葉トークンを決める

スパム対策の合言葉を1つ決める。例: `kosodate_8x2qZ_2026`

このあと **3か所で同じ文字列**を使う:
- `gas/Code.gs` の `SHARED_TOKEN`
- GitHub Secret `VITE_CONTACT_TOKEN`
- （ローカルで試す場合のみ）`.env` の `VITE_CONTACT_TOKEN`

---

## 手順2. スプレッドシートとGASを作る

1. [Google スプレッドシート](https://sheets.google.com) で新しいシートを作成
   （名前: 例「子育てエビデンス相談室 お問い合わせ」）
2. 1行目に見出しを入れておく（任意）: `日時 / お名前 / メール / 内容`
3. メニュー **拡張機能 → Apps Script** を開く
4. 既定の `コード.gs` の中身を全部消し、リポジトリの
   [gas/Code.gs](Code.gs) の内容をそのまま貼り付ける
5. 貼り付けたコードの先頭の設定を書き換える:
   ```js
   var SHARED_TOKEN = 'ここに手順1で決めた合言葉';
   var NOTIFY_EMAIL = '5micromember@gmail.com';
   ```
6. 保存（フロッピーアイコン / Ctrl+S）

---

## 手順3. Webアプリとしてデプロイ

1. Apps Script 画面右上の **デプロイ → 新しいデプロイ**
2. 歯車アイコン → **ウェブアプリ** を選択
3. 設定:
   - 説明: 任意（例「contact v1」）
   - **次のユーザーとして実行: 自分（5micromember@gmail.com）**
   - **アクセスできるユーザー: 全員**
4. **デプロイ** をクリック
5. 初回は権限承認を求められる → 5micromember@gmail.com で承認
   （「このアプリは確認されていません」が出たら **詳細 → 安全でないページに移動** で進む）
6. 表示される **ウェブアプリの URL**（`https://script.google.com/macros/s/XXXX/exec`）をコピー

### 動作確認
コピーしたURLをブラウザで開いて
`{"ok":true,"message":"kosodate-ebe contact endpoint is alive"}`
が表示されればOK。

---

## 手順4. GitHub に Secret を2つ登録

リポジトリ `adash333/kosodate-ebe` の
**Settings → Secrets and variables → Actions → New repository secret**

| Name | Secret |
|---|---|
| `VITE_CONTACT_ENDPOINT` | 手順3でコピーしたウェブアプリURL |
| `VITE_CONTACT_TOKEN` | 手順1で決めた合言葉 |

---

## 手順5. 再デプロイ（本番反映）

GitHub Actions を再実行してビルドに Secret を埋め込む。

- **Actions → Deploy to GitHub Pages → Run workflow**
- または何か push すれば自動で走る

完了後、https://5micro.net のお問い合わせフォームから
テスト送信 → スプレッドシートに行が増え、5micromember@gmail.com に
通知メールが届けば完了。

---

## 注意

- `VITE_` 環境変数はブラウザに公開される。合言葉は「軽いスパム除け」であり
  完全な秘密ではない。重要な秘密情報は入れないこと。
- コードを修正したら、Apps Script で **デプロイ → デプロイを管理 →
  既存デプロイを編集 → バージョン: 新バージョン** で更新する
  （URLは変わらないので GitHub Secret の再設定は不要）。
