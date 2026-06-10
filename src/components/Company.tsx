import { ContactForm } from './ContactForm';

export function Company() {
  return (
    <div className="legal">
      <h2>会社情報</h2>
      <dl className="info-list">
        <div>
          <dt>会社名</dt>
          <dd>合同会社5マイクロ</dd>
        </div>
        <div>
          <dt>所在地</dt>
          <dd>〒104-0061 東京都中央区銀座一丁目22番11号 銀座大竹ビジデンス2階</dd>
        </div>
        <div>
          <dt>主な事業内容</dt>
          <dd>Webサイト運営、教育・健康情報コンテンツ運営等</dd>
        </div>
        <div>
          <dt>運営サイト</dt>
          <dd>
            <ul className="site-list">
              <li>子育てエビデンス相談室</li>
              <li>サルでもわかるWEBプログラミング</li>
              <li>サルでもわかる機械学習</li>
            </ul>
          </dd>
        </div>
      </dl>

      <h2>本サイトについて</h2>
      <p>
        子育てエビデンス相談室は、子育て世代の悩みに対して、学術論文や研究知見をもとにした
        一般的な情報と次の一歩を紹介するWebアプリです。診断、治療、個別の専門的助言を
        提供するものではありません。
      </p>

      <h2>お問い合わせ</h2>
      <p>
        本サイトおよび合同会社5マイクロに関するお問い合わせは、以下のフォームよりお願いいたします。
      </p>
      <ContactForm />

      <p className="muted">最終更新: 2026年6月</p>
    </div>
  );
}
