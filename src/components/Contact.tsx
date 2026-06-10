import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <div className="legal">
      <h2>お問い合わせ</h2>
      <p>
        子育てエビデンス相談室および合同会社5マイクロに関するお問い合わせは、
        以下のフォームよりお願いいたします。
      </p>
      <ContactForm />
      <p className="muted">
        医療、発達、心理、教育に関する個別相談には回答できない場合があります。
        緊急性がある場合や個別判断が必要な場合は、医師、心理士、学校、自治体窓口などの
        専門機関へご相談ください。
      </p>
    </div>
  );
}
