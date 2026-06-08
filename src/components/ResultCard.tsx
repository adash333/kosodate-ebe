import type { AdviceItem } from '../types';
import { track } from '../analytics';

export function ResultCard({ item }: { item: AdviceItem }) {
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
    </div>
  );
}
