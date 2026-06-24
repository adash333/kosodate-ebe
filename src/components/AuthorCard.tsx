import { siteAuthor } from '../author';

// 記事末尾・運営者情報で共有する著者プロフィール。E-E-A-T 明示用。
// heading に null を渡すと見出しを描画しない（外側で h2 を付けたい場合に使う）。
export function AuthorCard({ heading = 'この記事を書いた人' }: { heading?: string | null }) {
  return (
    <aside className="author-card">
      {heading && <h3 className="author-h">{heading}</h3>}
      <p className="author-name">
        {siteAuthor.name}
        <span className="author-title">{siteAuthor.title}</span>
      </p>
      <p className="author-bio">{siteAuthor.bio}</p>
      <p className="author-links">
        {siteAuthor.links.map((l) => (
          <a key={l.url} className="link" href={l.url} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
      </p>
    </aside>
  );
}
