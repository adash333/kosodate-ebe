export type AgeBandId = 'preschool' | 'elementary' | 'teen';

export interface AdviceItem {
  id: string;
  title: string;
  author: string | null;
  year: number | null;
  citation: string | null;
  paperUrl: string | null;
  youtubeUrl: string;
  categories: string[];
  tags: string[];
  ageBands: AgeBandId[];
  finding: string;
  advice: string;
  nextStep: string;
}

export interface AdviceData {
  generatedAt: string;
  count: number;
  items: AdviceItem[];
}

export interface SubCategory {
  id: string;
  label: string;
  tags: string[];
}

export interface Category {
  id: string;
  label: string;
  sub: SubCategory[];
}

export interface AgeBand {
  id: AgeBandId;
  label: string;
}

export interface Taxonomy {
  ageBands: AgeBand[];
  categories: Category[];
}
