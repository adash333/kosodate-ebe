// entry-server.tsx — ビルド時プリレンダリング用のSSRエントリ。
// 各ルートを react-dom/server で静的HTMLに変換し、ページ別の <title>/meta も返す。
// scripts/prerender.mjs から呼ばれる。クライアント側(main.tsx)は通常どおり描画する。
import { renderToString } from 'react-dom/server';
import App from './App';
import { articles, isPublished } from './articles';
import { terms } from './glossary';

const SITE = '子育てエビデンス相談室';
const ORIGIN = 'https://5micro.net';

/** description 用に本文を詰める（長すぎは ~120 字で切る）。 */
function clip(s: string, n = 120): string {
  const t = s.replace(/\s+/g, ' ').trim();
  return t.length > n ? t.slice(0, n - 1) + '…' : t;
}

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  /** 記事ページ用 Article 構造化データ（任意） */
  jsonLd?: string;
}

/** プリレンダリング対象の全ルートとメタ情報。公開済み記事・全用語・固定ページを含む。 */
export function getRoutes(): PageMeta[] {
  const base: PageMeta[] = [
    {
      path: '/',
      title: `${SITE}｜論文（エビデンス）に基づく子育てアドバイス`,
      description:
        '子育ての悩みを選ぶだけ。論文（エビデンス）に基づく一言アドバイスと、次の一歩、解説動画・出典をやさしくお届けします。',
    },
    {
      path: '/articles',
      title: `読み物（エビデンス解説コラム）一覧｜${SITE}`,
      description:
        'ほめ方・睡眠・叱り方・きょうだい・スマホなど、子育ての悩みを研究（エビデンス）にもとづいて解説する読み物コラム一覧。',
    },
    {
      path: '/videos',
      title: `論文解説動画 一覧｜${SITE}`,
      description:
        '子育てに関わる論文を一本ずつ解説した動画の一覧。新値更新・移動平均ではなく、発達・教育・心理のエビデンスをやさしく紹介します。',
    },
    {
      path: '/glossary',
      title: `子育てエビデンス用語集｜${SITE}`,
      description:
        '実行機能・愛着・内発的動機づけ・レジリエンスなど、子育ての研究によく出る専門用語を、子育て世代向けにやさしく解説します。',
    },
    {
      path: '/company',
      title: `運営者情報｜${SITE}`,
      description: `${SITE}の運営者情報。`,
    },
    {
      path: '/privacy',
      title: `プライバシーポリシー｜${SITE}`,
      description: `${SITE}のプライバシーポリシー。`,
    },
    {
      path: '/disclaimer',
      title: `免責事項｜${SITE}`,
      description: `${SITE}の免責事項。掲載内容は一般的な情報提供であり、医療・専門的助言に代わるものではありません。`,
    },
    {
      path: '/search',
      title: `サイト内検索｜${SITE}`,
      description: '子育ての悩みのキーワードで、読み物・用語解説・論文解説動画をまとめて検索できます。',
    },
  ];

  const articlePages: PageMeta[] = articles
    .filter((a) => isPublished(a))
    .map((a) => ({
      path: `/articles/${a.slug}`,
      title: `${a.title}｜${SITE}`,
      description: clip(a.lead),
      jsonLd: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: a.title,
        description: clip(a.lead, 200),
        datePublished: a.publish ?? a.updated,
        dateModified: a.updated,
        author: { '@type': 'Organization', name: SITE },
        publisher: { '@type': 'Organization', name: SITE },
        mainEntityOfPage: `${ORIGIN}/articles/${a.slug}`,
        ...(a.heroImage ? { image: `${ORIGIN}${a.heroImage.src}` } : {}),
      }),
    }));

  const termPages: PageMeta[] = terms.map((t) => ({
    path: `/glossary/${t.slug}`,
    title: `${t.term}とは？子育て視点でやさしく解説｜${SITE}`,
    description: clip(t.short),
  }));

  return [...base, ...articlePages, ...termPages];
}

/** 指定パスのページ本文HTMLを返す。 */
export function render(path: string): string {
  return renderToString(<App path={path} />);
}
