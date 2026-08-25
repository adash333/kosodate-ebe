// Consult.tsx — 悩み別ガイド（/consult, /consult/:id）。
// taxonomy のサブカテゴリごとに、独自解説＋おすすめエビデンス＋関連読み物への
// 内部導線を持つ固有URLページを提供する。3タップ相談室の「入り口」を
// クローラーにも読める静的ページとして公開するのが目的。
import { adviceData, taxonomy } from '../data';
import { recommend } from '../match';
import type { Category, SubCategory } from '../types';
import { ResultCard } from './ResultCard';
import { articles, isPublished, type Article } from '../articles';
import { terms, type Term } from '../glossary';
import { consultIntros, getConsultIntro } from '../consult';
import { track } from '../analytics';

/** sub.id から所属カテゴリとサブカテゴリを引く。 */
export function findSub(subId: string): { category: Category; sub: SubCategory } | null {
  for (const c of taxonomy.categories) {
    const s = c.sub.find((x) => x.id === subId);
    if (s) return { category: c, sub: s };
  }
  return null;
}

/** タグとの一致で関連する読み物・用語解説を選ぶ（ResultCard と同じ発想のページ版）。 */
function relatedContent(sub: SubCategory): { articles: Article[]; terms: Term[] } {
  const keys = [...new Set(sub.tags.filter((t) => t.length >= 2))];
  const scoreOf = (hay: string) => keys.filter((k) => hay.includes(k)).length;

  const relArticles = articles
    .filter((a) => isPublished(a))
    .map((a) => ({ a, score: scoreOf(a.title + ' ' + a.lead) }))
    .filter(({ score }) => score > 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, 4)
    .map(({ a }) => a);

  const relTerms = terms
    .map((t) => ({ t, score: scoreOf(t.term + ' ' + t.short) }))
    .filter(({ score }) => score > 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, 4)
    .map(({ t }) => t);

  return { articles: relArticles, terms: relTerms };
}

/** /consult 一覧ページ。 */
export function ConsultIndex() {
  return (
    <div className="legal consult">
      <h1>悩み別ガイド 一覧</h1>
      <p>
        子育てのよくある悩みを32のテーマに分け、それぞれについて研究（エビデンス）から
        わかっていることの概要と、当サイト内の関連する読み物・論文解説への入り口をまとめました。
        近いテーマからお読みください。
      </p>
      {taxonomy.categories.map((c) => (
        <section key={c.id}>
          <h2>{c.label}</h2>
          <ul className="site-list">
            {c.sub.map((s) => {
              const intro = getConsultIntro(s.id);
              return (
                <li key={s.id}>
                  <a className="link" href={`/consult/${s.id}`}>{s.label}</a>
                  {intro && <span className="consult-lead"> — {intro.lead}</span>}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <p>
        選択式で探したい方は<a className="link" href="/">トップの3タップ相談室</a>、
        キーワードで探したい方は<a className="link" href="/search">サイト内検索</a>もどうぞ。
      </p>
    </div>
  );
}

/** /consult/:id 個別ページ。 */
export function ConsultView({ subId }: { subId: string }) {
  const found = findSub(subId);
  const intro = getConsultIntro(subId);
  if (!found || !intro) return null;
  const { category, sub } = found;

  const results = recommend(
    adviceData.items,
    { categoryId: category.id, tags: sub.tags, freeText: '', age: null },
    3,
  );
  const rel = relatedContent(sub);
  const siblings = category.sub.filter((s) => s.id !== sub.id);

  return (
    <div className="legal consult">
      <nav className="breadcrumb">
        <a className="link" href="/consult">悩み別ガイド</a>
        <span> / {category.label}</span>
      </nav>
      <h1>{sub.label} — 研究からわかっていること</h1>
      {intro.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      {results.length > 0 && (
        <>
          <h2>この悩みに近い論文解説</h2>
          <p>
            当サイトに登録された論文解説の中から、このテーマに関連の深いものを紹介します。
          </p>
          <div className="cards">
            {results.map(({ item }) => (
              <ResultCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}

      {rel.articles.length > 0 && (
        <>
          <h2>関連する読み物</h2>
          <ul className="alist">
            {rel.articles.map((a) => (
              <li key={a.slug} className="arow">
                <a
                  className="alink"
                  href={`/articles/${a.slug}`}
                  onClick={() => track('consult_open_article', { from: sub.id, slug: a.slug })}
                >
                  <span className="atitle">{a.title}</span>
                  <span className="ameta">約{a.readMin}分</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {rel.terms.length > 0 && (
        <>
          <h2>関連する用語解説</h2>
          <ul className="site-list">
            {rel.terms.map((t) => (
              <li key={t.slug}>
                <a className="link" href={`/glossary/${t.slug}`}>{t.term}</a>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>もっと絞り込んで探す</h2>
      <p>
        お子さんの年齢や具体的な状況に合わせて探したい方は、
        <a className="link" href="/" onClick={() => track('consult_start_taps', { from: sub.id })}>
          トップの3タップ相談室
        </a>
        をお使いください。
      </p>
      {siblings.length > 0 && (
        <>
          <h2>「{category.label}」のほかの悩み</h2>
          <ul className="site-list">
            {siblings.map((s) => (
              <li key={s.id}>
                <a className="link" href={`/consult/${s.id}`}>{s.label}</a>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="consult-note">
        <p>
          本ページは研究知見の一般的な紹介であり、診断や個別の助言に代わるものではありません。
          お子さんの発達や健康について心配なことがある場合は、園・学校、かかりつけ医、
          自治体の相談窓口にご相談ください。
        </p>
      </div>
    </div>
  );
}

/** プリレンダリング用: 全 /consult ページのパスとメタ情報の素材。 */
export function getConsultPages(): { id: string; label: string; categoryLabel: string; lead: string }[] {
  const pages: { id: string; label: string; categoryLabel: string; lead: string }[] = [];
  for (const c of taxonomy.categories) {
    for (const s of c.sub) {
      const intro = consultIntros.find((x) => x.id === s.id);
      if (intro) pages.push({ id: s.id, label: s.label, categoryLabel: c.label, lead: intro.lead });
    }
  }
  return pages;
}
