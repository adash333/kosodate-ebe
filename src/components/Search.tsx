import { useMemo, useState, type ReactNode } from 'react';
import { articles, isPublished } from '../articles';
import { terms } from '../glossary';
import { adviceData } from '../data';
import { track } from '../analytics';

type Hit =
  | { kind: 'article'; slug: string; title: string; snippet: string }
  | { kind: 'term'; slug: string; title: string; snippet: string }
  | { kind: 'video'; id: string; title: string; snippet: string; url: string };

const ADVICE_LIMIT = 30;

function norm(s: string): string {
  return s.toLowerCase();
}

// すべての検索語（空白区切り）を含むかどうか（AND 検索）。
function matchesAll(haystack: string, queries: string[]): boolean {
  const h = norm(haystack);
  return queries.every((q) => h.includes(q));
}

export function SiteSearch() {
  const initial =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('q') ?? ''
      : '';
  const [query, setQuery] = useState(initial);

  function onChange(v: string) {
    setQuery(v);
    // URL を ?q= 付きに更新し、検索結果を共有・再訪できるようにする。
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (v) params.set('q', v);
      else params.delete('q');
      const qs = params.toString();
      window.history.replaceState(null, '', qs ? `/search?${qs}` : '/search');
    }
  }

  const results = useMemo<Hit[]>(() => {
    const queries = norm(query.trim())
      .split(/\s+/)
      .filter(Boolean);
    if (queries.length === 0) return [];

    const hits: Hit[] = [];

    // 読み物
    for (const a of articles) {
      if (!isPublished(a)) continue;
      const hay = [
        a.title,
        a.lead,
        ...a.sections.flatMap((s) => [s.heading, ...s.body]),
        ...a.steps,
      ].join(' ');
      if (matchesAll(hay, queries)) {
        hits.push({ kind: 'article', slug: a.slug, title: a.title, snippet: a.lead });
      }
    }

    // 用語解説
    for (const t of terms) {
      const hay = [
        t.term,
        t.reading ?? '',
        t.english ?? '',
        t.short,
        ...t.sections.flatMap((s) => [s.heading, ...s.body]),
      ].join(' ');
      if (matchesAll(hay, queries)) {
        hits.push({ kind: 'term', slug: t.slug, title: t.term, snippet: t.short });
      }
    }

    // 動画・記事
    let videoCount = 0;
    for (const it of [...adviceData.items].sort((a, b) => Number(b.id) - Number(a.id))) {
      const hay = [
        it.id,
        it.title,
        it.advice,
        it.finding,
        it.nextStep,
        it.citation ?? '',
        it.author ?? '',
        ...it.tags,
      ].join(' ');
      if (matchesAll(hay, queries)) {
        if (videoCount < ADVICE_LIMIT) {
          hits.push({
            kind: 'video',
            id: it.id,
            title: it.advice,
            snippet: it.finding,
            url: it.youtubeUrl,
          });
        }
        videoCount++;
      }
    }

    return hits;
  }, [query]);

  const articleHits = results.filter((r) => r.kind === 'article');
  const termHits = results.filter((r) => r.kind === 'term');
  const videoHits = results.filter((r) => r.kind === 'video');
  const hasQuery = query.trim().length > 0;

  return (
    <div className="legal">
      <h2>サイト内検索</h2>
      <p className="sub">読み物・用語解説・動画/記事をまとめて検索できます。</p>

      <input
        className="free-input"
        type="search"
        placeholder="キーワードを入力（例：睡眠、ほめ方、実行機能）"
        value={query}
        autoFocus
        onChange={(e) => onChange(e.target.value)}
      />

      {!hasQuery && (
        <p className="sub" style={{ marginTop: 16 }}>
          気になるキーワードを入力してください。
        </p>
      )}

      {hasQuery && results.length === 0 && (
        <p className="empty">
          「{query}」に一致する内容は見つかりませんでした。別のキーワードでお試しください。
        </p>
      )}

      {termHits.length > 0 && (
        <SearchGroup title={`用語解説（${termHits.length}件）`}>
          {termHits.map(
            (r) =>
              r.kind === 'term' && (
                <SearchRow key={`t-${r.slug}`} href={`/glossary/${r.slug}`} title={r.title} snippet={r.snippet} />
              ),
          )}
        </SearchGroup>
      )}

      {articleHits.length > 0 && (
        <SearchGroup title={`読み物（${articleHits.length}件）`}>
          {articleHits.map(
            (r) =>
              r.kind === 'article' && (
                <SearchRow key={`a-${r.slug}`} href={`/articles/${r.slug}`} title={r.title} snippet={r.snippet} />
              ),
          )}
        </SearchGroup>
      )}

      {videoHits.length > 0 && (
        <SearchGroup title={`動画・記事（${videoHits.length}件）`}>
          {videoHits.map(
            (r) =>
              r.kind === 'video' && (
                <SearchRow
                  key={`v-${r.id}`}
                  href={r.url}
                  external
                  title={r.title}
                  snippet={r.snippet}
                  onClick={() => track('search_video', { id: r.id })}
                />
              ),
          )}
        </SearchGroup>
      )}
    </div>
  );
}

function SearchGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="search-group">
      <h3>{title}</h3>
      <ul className="alist">{children}</ul>
    </section>
  );
}

function SearchRow({
  href,
  title,
  snippet,
  external,
  onClick,
}: {
  href: string;
  title: string;
  snippet: string;
  external?: boolean;
  onClick?: () => void;
}) {
  return (
    <li className="arow">
      <a
        className="alink"
        href={href}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span className="atitle">{title}</span>
        <span className="alead">{snippet}</span>
        {external && <span className="ameta">▶ 解説動画（YouTube）</span>}
      </a>
    </li>
  );
}
