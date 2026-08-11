import type { AdviceItem } from '../types';
import { track } from '../analytics';
import { articles, isPublished, type Article } from '../articles';
import { terms, type Term } from '../glossary';

// アドバイスのタグ・本文から、当サイト内の関連する読み物・用語解説を探す。
// 外部リンク（YouTube・ブログ）だけで終わらせず、サイト内の回遊動線を作るのが目的。
function relatedSiteContent(item: AdviceItem): { articles: Article[]; terms: Term[] } {
  const keys = [...new Set(item.tags.filter((t) => t.length >= 2))];
  const scoreOf = (hay: string) => keys.filter((k) => hay.includes(k)).length;

  const relArticles = articles
    .filter((a) => isPublished(a))
    .map((a) => ({ a, score: scoreOf(a.title + ' ' + a.lead) }))
    .filter(({ score }) => score > 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, 2)
    .map(({ a }) => a);

  const relTerms = terms
    .map((t) => ({ t, score: scoreOf(t.term + ' ' + t.short) }))
    .filter(({ score }) => score > 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, 2)
    .map(({ t }) => t);

  return { articles: relArticles, terms: relTerms };
}

export function ResultCard({ item }: { item: AdviceItem }) {
  const rel = relatedSiteContent(item);
  const titleLabel =
    item.author && item.year ? `${item.author}, ${item.year}` : item.title;
  return (
    <div className="card">
      <h3 className="card-title">{item.advice}</h3>

      <div className="card-row">
        <span className="card-emoji">👣</span>
        <div>
          <div className="card-label">次の一歩</div>
          <p>{item.nextStep}</p>
        </div>
      </div>

      <div className="card-row">
        <span className="card-emoji">📖</span>
        <div>
          <div className="card-label">研究でわかったこと</div>
          <p>{item.finding}</p>
        </div>
      </div>

      <div className="card-foot">
        <a
          className="btn-yt"
          href={item.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('click_youtube', { id: item.id, title: item.title })}
        >
          ▶ 解説動画を見る
        </a>
        {item.blogUrl ? (
          <a
            className="btn-paper"
            href={item.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_blog', { id: item.id })}
          >
            論文解説
          </a>
        ) : item.paperUrl ? (
          <a
            className="btn-paper"
            href={item.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_paper', { id: item.id })}
          >
            論文（{titleLabel}）
          </a>
        ) : null}
      </div>

      {(rel.articles.length > 0 || rel.terms.length > 0) && (
        <div className="card-related">
          <div className="card-label">あわせて読みたい（当サイトの解説）</div>
          <ul className="card-related-list">
            {rel.articles.map((a) => (
              <li key={a.slug}>
                <a href={`/articles/${a.slug}`} onClick={() => track('result_article', { slug: a.slug })}>
                  {a.title}
                </a>
              </li>
            ))}
            {rel.terms.map((t) => (
              <li key={t.slug}>
                <a href={`/glossary/${t.slug}`} onClick={() => track('result_term', { slug: t.slug })}>
                  用語解説: {t.term}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
