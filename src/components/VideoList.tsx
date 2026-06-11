import { adviceData } from '../data';
import { track } from '../analytics';

// 動画・記事の一覧（/videos）。番号の新しい順に全件を表示する。
export function VideoList() {
  return (
    <div className="legal">
      <h2>動画・記事 一覧（全{adviceData.count}本）</h2>
      <p className="sub">番号の新しい順。各項目から解説動画とブログ記事へ移動できます。</p>
      <ul className="vlist">
        {[...adviceData.items]
          .sort((a, b) => Number(b.id) - Number(a.id))
          .map((it) => (
            <li key={it.id} className="vrow">
              <span className="vno">#{it.id}</span>
              <div className="vbody">
                <div className="vadvice">{it.advice}</div>
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
                    <a className="vlink blog" href={it.paperUrl} target="_blank" rel="noopener noreferrer">
                      論文
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
