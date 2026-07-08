import { articles, isPublished, type Article } from '../articles';
import { AuthorCard } from './AuthorCard';

// 現在の記事と関連度が高い記事を最大3件抽出する。
// タイトル・リードに共通する単語（2文字以上）の数で簡易スコアリング。
function relatedArticles(current: Article, limit = 3): Article[] {
  const published = articles.filter((a) => isPublished(a) && a.slug !== current.slug);
  const src = (current.title + ' ' + current.lead).split(/[\s、。,.\-・/／\n]+/).filter((t) => t.length >= 2);
  return published
    .map((a) => {
      const hay = a.title + ' ' + a.lead;
      const score = src.filter((w) => hay.includes(w)).length;
      return { a, score };
    })
    .filter(({ score }) => score > 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map(({ a }) => a);
}

export function ArticlesList() {
  // 公開日が到来した記事のみを、公開日の新しい順に表示する。
  const visible = articles
    .filter((a) => isPublished(a))
    .slice()
    .sort((a, b) => (b.publish ?? b.updated).localeCompare(a.publish ?? a.updated));
  return (
    <div className="legal">
      <h2>読み物（エビデンス記事）</h2>
      <p className="sub">
        子育ての悩みに、学術研究の知見をもとにした一般的な情報をお届けします。
      </p>
      <ul className="alist">
        {visible.map((a) => (
          <li key={a.slug} className="arow">
            <a className="alink" href={`/articles/${a.slug}`}>
              <span className="atitle">{a.title}</span>
              <span className="alead">{a.lead}</span>
              <span className="ameta">約{a.readMin}分 ・ 最終更新 {a.updated}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArticleView({ article }: { article: Article }) {
  const related = relatedArticles(article);
  return (
    <article className="legal article">
      <h2>{article.title}</h2>
      <p className="amtop muted">最終更新 {article.updated} ・ 約{article.readMin}分で読めます</p>
      <p className="alead-top">{article.lead}</p>
      {article.heroImage && (
        <figure className="article-hero">
          <img src={article.heroImage.src} alt={article.heroImage.alt} />
        </figure>
      )}

      {article.sections.map((s, i) => (
        <section key={i}>
          <h3>{s.heading}</h3>
          {s.body.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
        </section>
      ))}

      <h3>今日からできること</h3>
      <ul className="steps">
        {article.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      {article.parentNote && article.parentNote.length > 0 && (
        <aside className="parent-note">
          <h3 className="parent-note-h">書いてみて、2児の父として思うこと</h3>
          {article.parentNote.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </aside>
      )}

      <h3>参考にした研究</h3>
      <p className="refs-note muted">
        各研究について、日本語の解説記事と、原典（英語論文）を探せる Google Scholar 検索へのリンクを掲載しています。
      </p>
      <ul className="refs">
        {article.references.map((r, i) => {
          // ラベルは「著者名, 年（日本語説明）」形式。説明部分を除いた書誌で原典を検索する。
          const query = r.label.split('（')[0].trim();
          const scholarUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;
          return (
            <li key={i}>
              <a href={r.url} target="_blank" rel="noopener noreferrer">
                {r.label}
              </a>
              <span className="ref-sep"> ／ </span>
              <a className="ref-scholar" href={scholarUrl} target="_blank" rel="noopener noreferrer">
                原典を探す（Google Scholar）
              </a>
            </li>
          );
        })}
      </ul>

      {article.relatedTerms && article.relatedTerms.length > 0 && (
        <>
          <h3>関連する用語解説</h3>
          <ul className="refs">
            {article.relatedTerms.map((t) => (
              <li key={t.slug}>
                <a href={`/glossary/${t.slug}`}>{t.term}</a>
              </li>
            ))}
          </ul>
        </>
      )}

      {related.length > 0 && (
        <>
          <h3>関連する記事</h3>
          <ul className="alist">
            {related.map((a) => (
              <li key={a.slug} className="arow">
                <a className="alink" href={`/articles/${a.slug}`}>
                  <span className="atitle">{a.title}</span>
                  <span className="alead">{a.lead}</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      <AuthorCard />

      <div className="article-note">
        <p className="muted">
          本記事は子育て世代向けの一般的な情報提供を目的としたものであり、診断・治療・個別の専門的助言を
          提供するものではありません。お子さんの発達・健康・心理に関する個別の判断が必要な場合は、
          小児科医・心療内科医・臨床心理士・学校・自治体の相談窓口など、専門機関にご相談ください。
        </p>
        <p className="muted">運営: 合同会社5マイクロ</p>
      </div>

      <p className="article-back">
        <a className="link" href="/articles">← 記事一覧へ</a>
      </p>
    </article>
  );
}
