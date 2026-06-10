import { articles, type Article } from '../articles';

export function ArticlesList() {
  return (
    <div className="legal">
      <h2>読み物（エビデンス記事）</h2>
      <p className="sub">
        子育ての悩みに、学術研究の知見をもとにした一般的な情報をお届けします。
      </p>
      <ul className="alist">
        {articles.map((a) => (
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

      <h3>参考にした研究</h3>
      <ul className="refs">
        {article.references.map((r, i) => (
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
        <a className="link" href="/articles">← 記事一覧へ</a>
      </p>
    </article>
  );
}
