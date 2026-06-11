import { track } from '../analytics';

// 全ページ共通のフッター。どのページでも同じ項目・同じ並びで表示する。
export function SiteFooter() {
  return (
    <footer className="footer">
      <a className="link" href="/videos" onClick={() => track('open_list')}>動画一覧</a>
      <a className="link" href="/articles">読み物</a>
      <a className="link" href="/glossary">用語解説</a>
      <a className="link" href="/company">会社情報</a>
      <a className="link" href="/privacy">プライバシーポリシー</a>
      <a className="link" href="/disclaimer">免責事項</a>
      <a className="link" href="https://www.youtube.com/@evilab" target="_blank" rel="noopener noreferrer">
        YouTubeチャンネル
      </a>
      <a className="link" href="https://risan.jpn.org/" target="_blank" rel="noopener noreferrer">
        ブログ
      </a>
      <a className="link" href="/search" onClick={() => track('open_search')}>サイト内検索</a>
    </footer>
  );
}
