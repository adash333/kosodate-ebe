import { useMemo, useState, type ReactNode } from 'react';
import { adviceData, taxonomy } from './data';
import { recommend, type Query } from './match';
import type { AgeBandId, Category, SubCategory } from './types';
import { ResultCard } from './components/ResultCard';
import { Legal } from './components/Legal';
import { Company } from './components/Company';
import { Contact } from './components/Contact';
import { ArticlesList, ArticleView } from './components/Articles';
import { GlossaryList, TermView } from './components/Glossary';
import { VideoList } from './components/VideoList';
import { SiteSearch } from './components/Search';
import { SiteFooter } from './components/SiteFooter';
import { articles, isPublished } from './articles';
import { terms } from './glossary';
import { track } from './analytics';

type Step = 'intro' | 'q1' | 'q2' | 'q3' | 'q4' | 'result';

export default function App({ path }: { path?: string } = {}) {
  const route = (path ?? (typeof window !== 'undefined' ? window.location.pathname : '/'))
    .replace(/\/$/, '') || '/';
  const [step, setStep] = useState<Step>('intro');
  const [category, setCategory] = useState<Category | null>(null);
  const [sub, setSub] = useState<SubCategory | null>(null);
  const [chips, setChips] = useState<string[]>([]);
  const [freeText, setFreeText] = useState('');
  const [age, setAge] = useState<AgeBandId | null>(null);

  // トップに出す「新着の読み物」。公開済み記事を新しい順に数本だけ抜き出す。
  const featuredArticles = useMemo(
    () =>
      articles
        .filter((a) => isPublished(a))
        .slice()
        .sort((a, b) => (b.publish ?? b.updated).localeCompare(a.publish ?? a.updated))
        .slice(0, 6),
    [],
  );

  const results = useMemo(() => {
    if (step !== 'result') return [];
    const q: Query = {
      categoryId: category?.id ?? null,
      tags: [...(sub?.tags ?? []), ...chips],
      freeText,
      age,
    };
    return recommend(adviceData.items, q, 3);
  }, [step, category, sub, chips, freeText, age]);

  function reset() {
    setCategory(null);
    setSub(null);
    setChips([]);
    setFreeText('');
    setAge(null);
    setStep('intro');
  }

  function toggleChip(tag: string) {
    setChips((c) => (c.includes(tag) ? c.filter((t) => t !== tag) : [...c, tag]));
  }

  if (route === '/company') {
    return (
      <Shell>
        <Company />
      </Shell>
    );
  }

  if (route === '/contact') {
    return (
      <Shell>
        <Contact />
      </Shell>
    );
  }

  if (route === '/privacy') {
    return (
      <Shell>
        <Legal mode="privacy" />
      </Shell>
    );
  }

  if (route === '/disclaimer') {
    return (
      <Shell>
        <Legal mode="disclaimer" />
      </Shell>
    );
  }

  if (route === '/articles') {
    return (
      <Shell>
        <ArticlesList />
      </Shell>
    );
  }

  const articleMatch = route.match(/^\/articles\/(.+)$/);
  if (articleMatch) {
    const art = articles.find((a) => a.slug === articleMatch[1]);
    if (art && isPublished(art)) {
      return (
        <Shell>
          <ArticleView article={art} />
        </Shell>
      );
    }
  }

  if (route === '/glossary') {
    return (
      <Shell>
        <GlossaryList />
      </Shell>
    );
  }

  const termMatch = route.match(/^\/glossary\/(.+)$/);
  if (termMatch) {
    const term = terms.find((t) => t.slug === termMatch[1]);
    if (term) {
      return (
        <Shell>
          <TermView term={term} />
        </Shell>
      );
    }
  }

  if (route === '/videos') {
    return (
      <Shell>
        <VideoList />
      </Shell>
    );
  }

  if (route === '/search') {
    return (
      <Shell>
        <SiteSearch />
      </Shell>
    );
  }

  return (
    <div className="app">
      <header className="header" onClick={reset} role="button">
        <span className="logo">🌱 子育てエビデンス相談室</span>
      </header>

      <main className="main">
        {step === 'intro' && (
          <section className="step intro">
            <h1>子育ての悩み、<br />3タップでエビデンスへ。</h1>
            <p className="lead">
              気になることを選ぶだけ。約{adviceData.count}本の論文から、
              今日からできる「やさしい一言」をお届けします。
            </p>
            <button className="btn-primary" onClick={() => { setStep('q1'); track('start'); }}>
              はじめる
            </button>
            <p className="intro-search">
              または、<a className="link" href="/search" onClick={() => track('open_search')}>キーワードでサイト内を検索</a>
            </p>

            <section className="intro-articles">
              <h2>新着の読み物（エビデンス解説）</h2>
              <p className="sub">
                子育ての悩みを、学術研究の知見にもとづいてやさしく解説した読み物です。
                気になるテーマから読んでみてください。
              </p>
              <ul className="alist">
                {featuredArticles.map((a) => (
                  <li key={a.slug} className="arow">
                    <a
                      className="alink"
                      href={`/articles/${a.slug}`}
                      onClick={() => track('open_article', { slug: a.slug })}
                    >
                      <span className="atitle">{a.title}</span>
                      <span className="alead">{a.lead}</span>
                      <span className="ameta">約{a.readMin}分 ・ 最終更新 {a.updated}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="intro-more">
                <a className="link" href="/articles">読み物の一覧をすべて見る →</a>
              </p>
            </section>
          </section>
        )}

        {step === 'q1' && (
          <section className="step">
            <Progress n={1} />
            <h2>どんなお悩みに近いですか？</h2>
            <div className="grid">
              {taxonomy.categories.map((c) => (
                <button
                  key={c.id}
                  className="choice"
                  onClick={() => {
                    setCategory(c);
                    setSub(null);
                    setStep('q2');
                    track('q1_select', { category: c.id });
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </section>
        )}

        {step === 'q2' && category && (
          <section className="step">
            <Progress n={2} />
            <h2>もう少し具体的には？</h2>
            <p className="sub">「{category.label}」のなかで近いものを選んでください</p>
            <div className="grid">
              {category.sub.map((s) => (
                <button
                  key={s.id}
                  className="choice"
                  onClick={() => {
                    setSub(s);
                    setChips([]);
                    setStep('q3');
                    track('q2_select', { sub: s.id });
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <BackLink onClick={() => setStep('q1')} />
          </section>
        )}

        {step === 'q3' && sub && (
          <section className="step">
            <Progress n={3} />
            <h2>気になるキーワードはありますか？</h2>
            <p className="sub">あれば選んでください（なくてもOK）</p>
            <div className="chips">
              {sub.tags.map((t) => (
                <button
                  key={t}
                  className={`chip ${chips.includes(t) ? 'on' : ''}`}
                  onClick={() => toggleChip(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <input
              className="free-input"
              type="text"
              placeholder="自由に入力（例：朝の支度、登園しぶり）"
              value={freeText}
              onChange={(e) => setFreeText(e.target.value)}
            />
            <button className="btn-primary" onClick={() => setStep('q4')}>つぎへ</button>
            <BackLink onClick={() => setStep('q2')} />
          </section>
        )}

        {step === 'q4' && (
          <section className="step">
            <Progress n={4} />
            <h2>お子さんはどれくらいですか？</h2>
            <div className="grid">
              {taxonomy.ageBands.map((a) => (
                <button
                  key={a.id}
                  className="choice"
                  onClick={() => {
                    setAge(a.id);
                    setStep('result');
                    track('q4_age', { age: a.id });
                  }}
                >
                  {a.label}
                </button>
              ))}
            </div>
            <BackLink onClick={() => setStep('q3')} />
          </section>
        )}

        {step === 'result' && (
          <section className="step">
            <h2 className="result-head">あなたへの一言アドバイス</h2>
            {results.length === 0 ? (
              <p className="empty">
                ぴったりの記事が見つかりませんでした。条件を変えてもう一度お試しください。
              </p>
            ) : (
              results.map((r) => <ResultCard key={r.item.id} item={r.item} />)
            )}
            <button className="btn-primary" onClick={reset}>別の悩みも見る</button>
          </section>
        )}

      </main>

      <SiteFooter />
    </div>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <header className="header">
        <a className="logo logo-link" href="/">🌱 子育てエビデンス相談室</a>
      </header>
      <main className="main">{children}</main>
      <SiteFooter />
    </div>
  );
}

function Progress({ n }: { n: number }) {
  return (
    <div className="progress" aria-label={`質問 ${n} / 4`}>
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className={`dot ${i <= n ? 'on' : ''}`} />
      ))}
    </div>
  );
}

function BackLink({ onClick }: { onClick: () => void }) {
  return (
    <button className="link-back" onClick={onClick}>← もどる</button>
  );
}
