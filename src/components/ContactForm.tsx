import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'done' | 'error' | 'unconfigured';

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT ?? '';
export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;

    if (message.trim().length < 5) {
      setStatus('error');
      return;
    }

    if (company.trim() !== '') {
      setStatus('done');
      return;
    }

    if (!CONTACT_ENDPOINT) {
      setStatus('unconfigured');
      return;
    }

    setStatus('sending');
    try {
      await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        mode: 'no-cors',
        body: JSON.stringify({ name, email, message, company }),
      });
      setStatus('done');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p className="form-status success">
        お問い合わせを送信しました。ありがとうございます。内容を確認のうえ、必要に応じてご連絡いたします。
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="contact-name">お名前（任意）</label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">メールアドレス（任意・返信が必要な場合のみ）</label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">お問い合わせ内容 <span>*</span></label>
        <textarea
          id="contact-message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="contact-company">会社名（入力しないでください）</label>
        <input
          id="contact-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {status === 'error' && (
        <p className="form-status error">
          送信できませんでした。お問い合わせ内容（5文字以上）をご確認のうえ、もう一度お試しください。
        </p>
      )}

      {status === 'unconfigured' && (
        <p className="form-status error">
          お問い合わせフォームは現在準備中です。しばらくお待ちください。
        </p>
      )}

      <button type="submit" className="btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? '送信中...' : '送信する'}
      </button>

      <p className="muted">
        ※ いただいた内容は運営者のみが確認します。返信をご希望の場合はメールアドレスをご記入ください。
      </p>
    </form>
  );
}
