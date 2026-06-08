import type { AdviceItem, AgeBandId } from './types';

export interface Query {
  categoryId: string | null;
  tags: string[]; // Q2サブカテゴリのtags + Q3で選んだチップ
  freeText: string; // Q3自由入力
  age: AgeBandId | null;
}

export interface Scored {
  item: AdviceItem;
  score: number;
}

// 日本語の簡易キーワード分割（記号・空白で区切る）
function terms(text: string): string[] {
  return text
    .split(/[\s、。,.・/／\n]+/)
    .map((t) => t.trim())
    .filter((t) => t.length >= 2);
}

export function scoreItem(item: AdviceItem, q: Query): number {
  let score = 0;
  if (q.categoryId && item.categories.includes(q.categoryId)) score += 3;

  const qTags = new Set(q.tags);
  for (const t of item.tags) if (qTags.has(t)) score += 2;

  if (q.age && item.ageBands.includes(q.age)) score += 2;

  const free = terms(q.freeText);
  if (free.length) {
    const haystack = [item.title, item.finding, item.advice, ...item.tags].join(' ');
    for (const w of free) if (haystack.includes(w)) score += 2;
  }
  return score;
}

export function recommend(items: AdviceItem[], q: Query, limit = 3): Scored[] {
  const scored = items
    .map((item) => ({ item, score: scoreItem(item, q) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || Number(b.item.id) - Number(a.item.id));
  return scored.slice(0, limit);
}
