import { useState, useMemo } from 'react';
import { adviceData } from '../data';
import { track } from '../analytics';

// 1ページあたりの表示件数。entry-server.tsx（プリレンダリングのルート生成）からも参照する。
export const VIDEO_PAGE_SIZE = 50;
const PAGE_SIZE = VIDEO_PAGE_SIZE;

// 絞り込みなしのページ送りは実URL（クローラーが辿れる a タグ）にする。
const pageHref = (p: number) => (p <= 1 ? '/videos' : `/videos/page/${p}`);

const sortedItems = [...adviceData.items].sort((a, b) => Number(b.id) - Number(a.id));

const tagFreq: [string, number][] = (() => {
  const freq = new Map<string, number>();
  for (const it of sortedItems) {
    for (const t of it.tags) freq.set(t, (freq.get(t) ?? 0) + 1);
  }
  return [...freq.entries()].sort((a, b) => b[1] - a[1]);
})();

const TOP_N = 30;

function Pager({
  page,
  total,
  asLinks,
  onChange,
}: {
  page: number;
  total: number;
  /** true なら実URLの a タグで遷移（絞り込みなしの通常一覧）。false ならクライアント側で切替。 */
  asLinks: boolean;
  onChange: (p: number) => void;
}) {
  const prev = asLinks ? (
    page <= 1 ? (
      <span className="vpager-btn" aria-disabled="true">← 前へ</span>
    ) : (
      <a className="vpager-btn" href={pageHref(page - 1)}>← 前へ</a>
    )
  ) : (
    <button className="vpager-btn" disabled={page <= 1} onClick={() => onChange(page - 1)}>
      ← 前へ
    </button>
  );
  const next = asLinks ? (
    page >= total ? (
      <span className="vpager-btn" aria-disabled="true">次へ →</span>
    ) : (
      <a className="vpager-btn" href={pageHref(page + 1)}>次へ →</a>
    )
  ) : (
    <button className="vpager-btn" disabled={page >= total} onClick={() => onChange(page + 1)}>
      次へ →
    </button>
  );
  return (
    <div className="vpager">
      {prev}
      <span className="vpager-info">{page} / {total} ページ</span>
      {next}
    </div>
  );
}

export function VideoList({ initialPage = 1 }: { initialPage?: number } = {}) {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(Math.max(1, initialPage));
  const [showAllTags, setShowAllTags] = useState(false);

  const goPage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
    setPage(1);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortedItems.filter((it) => {
      if (q && !it.advice.toLowerCase().includes(q) && !it.title.toLowerCase().includes(q))
        return false;
      if (activeTags.size > 0 && !it.tags.some((t) => activeTags.has(t))) return false;
      return true;
    });
  }, [query, activeTags]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hasFilter = query.trim().length > 0 || activeTags.size > 0;
  const displayTags = showAllTags ? tagFreq : tagFreq.slice(0, TOP_N);

  return (
    <div className="legal">
      <h1>動画・記事 一覧（全{adviceData.count}本）</h1>
      <p className="sub">番号の新しい順。各項目から解説動画とブログ記事へ移動できます。</p>

      <div className="vfilter">
        <input
          className="free-input"
          type="search"
          placeholder="タイトル・内容で検索…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
        />

        <div className="vtag-label">タグで絞り込み（複数選択可・OR）</div>
        <div className="chips vtags">
          {displayTags.map(([tag]) => (
            <button
              key={tag}
              className={`chip vtag${activeTags.has(tag) ? ' on' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
          {!showAllTags && tagFreq.length > TOP_N && (
            <button
              className="chip vtag vtag-more"
              onClick={() => setShowAllTags(true)}
            >
              ＋{tagFreq.length - TOP_N} タグ
            </button>
          )}
        </div>

        {hasFilter && (
          <div className="vfilter-bar">
            <span className="vcount">{filtered.length}件 / 全{adviceData.count}本</span>
            <button
              className="vfilter-clear"
              onClick={() => {
                setQuery('');
                setActiveTags(new Set());
                setPage(1);
              }}
            >
              × 解除
            </button>
          </div>
        )}
      </div>

      {totalPages > 1 && <Pager page={page} total={totalPages} asLinks={!hasFilter} onChange={goPage} />}

      {pageItems.length === 0 ? (
        <p className="empty">該当する動画がありません。</p>
      ) : (
        <ul className="vlist">
          {pageItems.map((it) => (
            <li key={it.id} className="vrow">
              <span className="vno">#{it.id}</span>
              <div className="vbody">
                <div className="vadvice">{it.advice}</div>
                {it.tags.length > 0 && (
                  <div className="vrow-tags">
                    {it.tags.map((t) => (
                      <button
                        key={t}
                        className={`vrow-tag${activeTags.has(t) ? ' on' : ''}`}
                        onClick={() => toggleTag(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
                <div className="vlinks">
                  <a
                    className="vlink yt"
                    href={it.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('list_youtube', { id: it.id })}
                  >
                    ▶ 解説動画
                  </a>
                  {it.blogUrl ? (
                    <a
                      className="vlink blog"
                      href={it.blogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track('list_blog', { id: it.id })}
                    >
                      論文解説
                    </a>
                  ) : it.paperUrl ? (
                    <a
                      className="vlink blog"
                      href={it.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      論文
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 && <Pager page={page} total={totalPages} asLinks={!hasFilter} onChange={goPage} />}
    </div>
  );
}
