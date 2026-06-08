// GA4 イベント送信のラッパー。gtag が無い環境（ローカル等）では何もしない。
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }
}
