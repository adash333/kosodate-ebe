// プライバシーポリシー／免責事項。AdSense 審査要件に準拠した詳細版。
export function Legal({ onBack, mode = 'both' }: { onBack?: () => void; mode?: 'both' | 'privacy' | 'disclaimer' }) {
  return (
    <div className="legal">
      {onBack ? <button className="link-back" onClick={onBack}>← もどる</button> : null}

      {mode !== 'privacy' ? <Disclaimer /> : null}
      {mode !== 'disclaimer' ? <PrivacyPolicy /> : null}
    </div>
  );
}

function Disclaimer() {
  return (
    <>
      <h2>免責事項</h2>

      <h3>情報の性質について</h3>
      <p>
        子育てエビデンス相談室（以下「当サイト」）が提供する記事・アドバイス・動画解説・用語解説は、
        学術論文および公的機関の研究知見をもとにした<strong>一般的な教育・情報提供</strong>を目的としたものです。
        個々のお子さんや家庭の状況に対する診断・治療・専門的助言・医療行為の代替となるものでは
        ありません。
      </p>
      <p>
        当サイトで紹介する研究結果は、特定の効果・成果を保証するものではありません。
        研究には対象集団・実施環境・測定方法などの制約があり、すべての子ども・家庭に
        同様の結果が得られるとは限りません。また、科学的知見は時代とともに更新される
        ことがあります。
      </p>

      <h3>専門家への相談について</h3>
      <p>
        お子さんの発達・健康・心理・学習・行動に関して個別の判断が必要な場合、または
        気になる点がある場合は、必ず小児科医・児童精神科医・臨床心理士・公認心理師・
        学校・自治体の相談窓口など、専門機関にご相談ください。
        緊急性のある場合は、かかりつけ医または救急医療機関にご連絡ください。
      </p>

      <h3>外部リンクについて</h3>
      <p>
        当サイトは参考資料として外部サイト（学術論文データベース・公的機関・YouTube 等）への
        リンクを掲載していますが、リンク先の内容・正確性・安全性について責任を負いません。
        リンク先サイトの利用規約・プライバシーポリシーに従ってご利用ください。
      </p>

      <h3>著作権について</h3>
      <p>
        当サイトに掲載されている文章・構成・デザインの著作権は、合同会社5マイクロまたは
        各権利者に帰属します。無断での転載・複製・改変はお断りします。
        引用は出典を明示のうえ、適切な範囲でお使いください。
      </p>

      <h3>サービスの変更・中断について</h3>
      <p>
        当サイトは、予告なくコンテンツの変更・追加・削除、またはサービスの一時停止・終了を
        行う場合があります。これらによって生じた損害について、当サイトは責任を負いません。
      </p>

      <p className="muted">最終更新: 2026年7月</p>
    </>
  );
}

function PrivacyPolicy() {
  return (
    <>
      <h2>プライバシーポリシー</h2>
      <p>
        合同会社5マイクロ（以下「当社」）が運営する子育てエビデンス相談室（以下「当サイト」、
        URL: https://5micro.net）は、利用者のプライバシーを尊重し、個人情報の適切な取り扱いに
        努めます。本ポリシーは、当サイトにおける情報の収集・利用・共有に関して説明するものです。
      </p>

      <h3>1. 収集する情報</h3>
      <p>当サイトは、以下の方法で情報を収集します。</p>
      <ul>
        <li>
          <strong>アクセスログ・利用状況情報：</strong>
          ページビュー数、利用端末の種類、ブラウザの種類、アクセス元 IP アドレス（匿名化処理済み）、
          参照元 URL、閲覧ページ・滞在時間などを Google Analytics により自動的に収集します。
          これらの情報は個人を特定するものではなく、サイト改善の目的で利用します。
        </li>
        <li>
          <strong>お問い合わせ情報：</strong>
          お問い合わせフォームをご利用の場合、入力いただいたお名前・メールアドレス・
          お問い合わせ内容を、返答および問い合わせ対応のためにのみ使用します。
          同意なく第三者に提供することはありません。
        </li>
        <li>
          <strong>Cookie（クッキー）：</strong>
          後述の通り、アクセス解析および広告配信のために Cookie を使用します。
        </li>
      </ul>

      <h3>2. Cookie（クッキー）の使用について</h3>
      <p>
        Cookie とは、ウェブサイトがブラウザに保存する小さなテキストファイルです。
        当サイトでは、以下の目的で Cookie を使用しています。
      </p>

      <h4>2-1. アクセス解析（Google Analytics）</h4>
      <p>
        当サイトは Google LLC が提供する Google Analytics（GA4）を使用し、
        サイトの利用状況を把握しています。Google Analytics は Cookie を通じて
        匿名のアクセス情報を収集・分析します。収集されたデータは Google のサーバーに
        送信・保存されます。Google はこの情報をサイト利用状況の評価、
        サイト運営者へのレポート提供、その他サービス提供目的で使用します。
      </p>
      <p>
        Google Analytics によるデータ収集を無効化したい場合は、
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics オプトアウト アドオン
        </a>
        をご利用ください。
      </p>

      <h4>2-2. 広告配信（Google AdSense）</h4>
      <p>
        当サイトは Google LLC が提供する Google AdSense を使用して広告を掲載しています。
        Google AdSense は Cookie（DoubleClick Cookie を含む）を使用して、
        利用者の過去の当サイトおよび他サイトへのアクセス情報にもとづいた
        <strong>パーソナライズド広告</strong>を配信します。
      </p>
      <p>
        Google が Cookie を使用して広告を配信する際、利用者の当サイトへのアクセス情報が
        Google に送信されます。Google はこの情報をパートナーサイトと組み合わせて
        広告のパーソナライズに使用することがあります。
      </p>
      <p>
        パーソナライズド広告を無効化したい場合は、以下の方法をご利用ください。
      </p>
      <ul>
        <li>
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google の広告設定ページ
          </a>
          でパーソナライズ広告をオフにする
        </li>
        <li>
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
            aboutads.info
          </a>
          でオプトアウトする（DAA）
        </li>
        <li>
          ブラウザの設定から Cookie を無効化する（一部機能が利用できなくなる場合があります）
        </li>
      </ul>
      <p>
        Google の広告における Cookie の使用方法については、
        <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
          Google の広告に関するポリシー
        </a>
        および
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
          Google のパートナーサイトにおけるデータの使用方法
        </a>
        をご覧ください。
      </p>

      <h3>3. 第三者への情報提供</h3>
      <p>
        当社は、以下の場合を除き、利用者の個人情報を第三者に提供しません。
      </p>
      <ul>
        <li>利用者本人の同意がある場合</li>
        <li>法令にもとづき開示が必要な場合</li>
        <li>人の生命・身体・財産の保護のために必要で、本人の同意を得ることが困難な場合</li>
      </ul>
      <p>
        ただし、Google Analytics・Google AdSense については、Google との間でデータが共有されます。
        Google のプライバシーポリシーは
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          こちら
        </a>
        をご覧ください。
      </p>

      <h3>4. データの保管期間</h3>
      <p>
        お問い合わせフォームより受信した情報は、対応完了後2年を目安に適切に廃棄します。
        Google Analytics によるアクセスデータの保管期間は、Google の規定（デフォルト14か月）に準じます。
      </p>

      <h3>5. 未成年者のプライバシー</h3>
      <p>
        当サイトは13歳未満のお子さんから意図的に個人情報を収集することはありません。
        お問い合わせフォームのご利用は、保護者の方が行うか、保護者の同意を得たうえで
        ご利用ください。
      </p>

      <h3>6. 本ポリシーの変更</h3>
      <p>
        当社は、必要に応じて本ポリシーを変更することがあります。
        変更後のポリシーは、当ページに掲載した時点から効力を生じます。
        重要な変更がある場合は、サイト上でお知らせします。
      </p>

      <h3>7. お問い合わせ</h3>
      <p>
        本ポリシーに関するお問い合わせは、<a href="/contact">お問い合わせフォーム</a>または
        下記までご連絡ください。
      </p>
      <address>
        合同会社5マイクロ<br />
        〒104-0061 東京都中央区銀座一丁目22番11号 銀座大竹ビジデンス2階<br />
        お問い合わせ: <a href="/contact">お問い合わせフォーム</a>
      </address>

      <p className="muted">制定: 2025年1月 ／ 最終更新: 2026年7月</p>
    </>
  );
}
