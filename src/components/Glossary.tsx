import { terms, type Term } from '../glossary';

export function GlossaryList() {
  // 用語名のよみ順（なければ用語名順）で並べる。
  const visible = terms
    .slice()
    .sort((a, b) => (a.reading ?? a.term).localeCompare(b.reading ?? b.term, 'ja'));
  return (
    <div className="legal">
      <h2>用語解説</h2>
      <p className="sub">
        読み物や子育てのエビデンスに出てくる専門用語を、やさしく解説します。
      </p>
      <ul className="alist">
        {visible.map((t) => (
          <li key={t.slug} className="arow">
            <a className="alink" href={`/glossary/${t.slug}`}>
              <span className="atitle">
                {t.term}
                {t.reading && <span className="treading">（{t.reading}）</span>}
              </span>
              <span className="alead">{t.short}</span>
              {t.english && <span className="ameta">{t.english}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TermView({ term }: { term: Term }) {
  return (
    <article className="legal article">
      <h2>{term.term}</h2>
      <p className="amtop muted">
        {term.reading && <>{term.reading}</>}
        {term.english && <> ・ {term.english}</>}
        {' '}・ 最終更新 {term.updated}
      </p>
      <p className="alead-top">{term.short}</p>
      {term.heroImage && (
        <figure className="article-hero">
          <img src={term.heroImage.src} alt={term.heroImage.alt} />
        </figure>
      )}

      {term.sections.map((s, i) => (
        <section key={i}>
          <h3>{s.heading}</h3>
          {s.body.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
        </section>
      ))}

      {term.related && term.related.length > 0 && (
        <>
          <h3>関連する読み物</h3>
          <ul className="refs">
            {term.related.map((r) => (
              <li key={r.slug}>
                <a href={`/articles/${r.slug}`}>{r.title}</a>
              </li>
            ))}
          </ul>
        </>
      )}

      <h3>参考にした研究</h3>
      <ul className="refs">
        {term.references.map((r, i) => (
          <li key={i}>
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              {r.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="article-note">
        <p className="muted">
          本記事は子育て世代向けの一般的な情報提供を目的としたものであり、診断・治療・個別の専門的助言を
          提供するものではありません。お子さんの発達・健康・心理に関する個別の判断が必要な場合は、
          小児科医・心療内科医・臨床心理士・学校・自治体の相談窓口など、専門機関にご相談ください。
        </p>
        <p className="muted">運営: 合同会社5マイクロ ／ 監修: 子育てエビデンス研究所</p>
      </div>

      <p className="article-back">
        <a className="link" href="/glossary">← 用語解説一覧へ</a>
      </p>
    </article>
  );
}
