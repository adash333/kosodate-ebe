/**
 * 子育てエビデンス相談室 お問い合わせフォーム受信用 GAS
 *
 * 動作:
 *   - フロント（ContactForm.tsx）から POST されたお問い合わせを受け取る
 *   - 合言葉トークン（SHARED_TOKEN）が一致するものだけ処理する
 *   - スプレッドシートに1行追記する
 *   - 通知メールを NOTIFY_EMAIL に送る
 *
 * デプロイ方法・設定値は gas/README-deploy.md を参照。
 *
 * 重要:
 *   - このスクリプトは Google スプレッドシートに紐づけて作成する
 *     （スプレッドシート → 拡張機能 → Apps Script）。
 *   - 下記 SHARED_TOKEN は、GitHub Secret の VITE_CONTACT_TOKEN と
 *     必ず同じ文字列にすること。
 */

// ===== 設定（ここを自分の値に変更する）=====
var SHARED_TOKEN = 'kosodate_ここに合言葉を設定';   // GitHubの VITE_CONTACT_TOKEN と一致させる
var NOTIFY_EMAIL = '5micromember@gmail.com';        // 通知メールの宛先
// ==========================================

function doPost(e) {
  try {
    // フロントは Content-Type: text/plain で JSON 文字列を送る
    var raw = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    // 1) ハニーポット: company に値が入っていれば bot とみなして無視
    if (data.company && String(data.company).trim() !== '') {
      return jsonResponse({ ok: true, skipped: 'honeypot' });
    }

    // 2) 合言葉トークンの確認（スパム対策）
    if (String(data.token || '') !== SHARED_TOKEN) {
      return jsonResponse({ ok: false, error: 'invalid token' });
    }

    var name = String(data.name || '').slice(0, 200);
    var email = String(data.email || '').slice(0, 200);
    var message = String(data.message || '').slice(0, 5000);

    // 3) 内容チェック（5文字以上）
    if (message.trim().length < 5) {
      return jsonResponse({ ok: false, error: 'message too short' });
    }

    var now = new Date();

    // 4) スプレッドシートに追記
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([now, name, email, message]);

    // 5) 通知メール
    var subject = '【子育てエビデンス相談室】お問い合わせ';
    var body =
      '日時: ' + Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss') + '\n' +
      'お名前: ' + (name || '（未記入）') + '\n' +
      'メール: ' + (email || '（未記入）') + '\n' +
      '----- お問い合わせ内容 -----\n' +
      message + '\n';
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: subject,
      body: body,
      replyTo: email || NOTIFY_EMAIL,
    });

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

// 動作確認用（ブラウザでWebアプリURLを開くと表示される）
function doGet() {
  return jsonResponse({ ok: true, message: 'kosodate-ebe contact endpoint is alive' });
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
