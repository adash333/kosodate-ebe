import adviceJson from '../data/advice.json';
import taxonomyJson from '../data/taxonomy.json';
import type { AdviceData, Taxonomy } from './types';

export const adviceData = adviceJson as unknown as AdviceData;
export const taxonomy = taxonomyJson as unknown as Taxonomy;
