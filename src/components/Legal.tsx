// プライバシーポリシー／免責事項（webapp/legal/ の草案を要約・組込み）。
export function Legal({ onBack }: { onBack: () => void }) {
  return (
    <div className="legal">
      <button className="link-back" onClick={onBack}>← もどる</button>

      <h2>免責事項</h2>
      <p>
        当サイトのアドバイスは、学術論文をもとにした一般的な情報の紹介であり、
        お子さん一人ひとりに対する診断・治療・専門的助言の代替ではありません。
        発達・健康・心理など気になる点がある場合は、必ず医師・心理士・専門機関に
        ご相談ください。紹介する研究結果は特定の効果を保証するものではなく、
        実践はご家庭の判断と責任において行ってください。
      </p>

      <h2>プライバシーポリシー</h2>
      <p>
        当サイトは会員登録を行わず、氏名等を直接取得しません。一方で、利用状況の
        把握のため Google Analytics（GA4）を、また将来的に広告配信（Google
        AdSense）を利用する場合があり、これらは Cookie を用いて匿名の情報を
        収集します。Cookie はブラウザの設定で無効化できます。詳しくは Google の
        ポリシー（policies.google.com/technologies/partner-sites）をご覧ください。
      </p>
      <p className="muted">
        ※ 本ページは草案です。運営者情報・お問い合わせ先は確定後に追記します。
      </p>
    </div>
  );
}
