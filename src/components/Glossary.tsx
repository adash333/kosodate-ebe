import { terms, type Term } from '../glossary';
import { articles, isPublished } from '../articles';

// 五十音の「行」ごとの索引。よみがな（reading）の先頭文字でグループ分けする。
const GYO: { key: string; label: string; chars: string }[] = [
  { key: 'a', label: 'あ', chars: 'あいうえおぁぃぅぇぉゔ' },
  { key: 'ka', label: 'か', chars: 'かきくけこがぎぐげご' },
  { key: 'sa', label: 'さ', chars: 'さしすせそざじずぜぞ' },
  { key: 'ta', label: 'た', chars: 'たちつてとだぢづでどっ' },
  { key: 'na', label: 'な', chars: 'なにぬねの' },
  { key: 'ha', label: 'は', chars: 'はひふへほばびぶべぼぱぴぷぺぽ' },
  { key: 'ma', label: 'ま', chars: 'まみむめも' },
  { key: 'ya', label: 'や', chars: 'やゆよゃゅょ' },
  { key: 'ra', label: 'ら', chars: 'らりるれろ' },
  { key: 'wa', label: 'わ', chars: 'わをんゎ' },
];

function gyoKeyOf(reading: string): string {
  const c = reading.charAt(0);
  return GYO.find((g) => g.chars.includes(c))?.key ?? 'a';
}

export function GlossaryList() {
  // 用語名のよみ順（なければ用語名順）で並べる。
  const visible = terms
    .slice()
    .sort((a, b) => (a.reading ?? a.term).localeCompare(b.reading ?? b.term, 'ja'));

  // 五十音の行ごとにグループ化（用語のある行だけ残す）。
  const groups = GYO.map((g) => ({
    ...g,
    items: visible.filter((t) => gyoKeyOf(t.reading ?? t.term) === g.key),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="legal">
      <h2>用語解説</h2>
      <p className="sub">
        読み物や子育てのエビデンスに出てくる専門用語を、やさしく解説します（全{visible.length}語）。
      </p>

      <nav className="gindex" aria-label="五十音索引">
        {GYO.map((g) => {
          const active = groups.some((x) => x.key === g.key);
          return active ? (
            <a key={g.key} className="gindex-link" href={`#gyo-${g.key}`}>
              {g.label}
            </a>
          ) : (
            <span key={g.key} className="gindex-link is-empty" aria-hidden="true">
              {g.label}
            </span>
          );
        })}
      </nav>

      {groups.map((g) => (
        <section key={g.key} className="gsection">
          <h3 id={`gyo-${g.key}`} className="gsection-head">{g.label}行</h3>
          <ul className="alist">
            {g.items.map((t) => (
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
        </section>
      ))}
    </div>
  );
}

export function TermView({ term }: { term: Term }) {
  const related = (term.related ?? []).filter((r) => {
    const article = articles.find((a) => a.slug === r.slug);
    return article ? isPublished(article) : false;
  });

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

      {related.length > 0 && (
        <>
          <h3>関連する読み物</h3>
          <ul className="refs">
            {related.map((r) => (
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
