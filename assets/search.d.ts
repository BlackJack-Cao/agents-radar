export interface SearchEntry {
  date: string;
  report: string;
  section: string;
  title: string;
  text: string;
  anchorText: string;
}

export interface CompactSearchIndex {
  version: 1;
  generated: string;
  dates: string[];
  reports: string[];
  sections: string[];
  entries: Array<[date: number, report: number, section: number, title: string, text: string]>;
}

export interface SearchResult {
  items: SearchEntry[];
  total: number;
  days: number;
}

export function normalizeSearchText(value: unknown): string;
export function hydrateSearchIndex(payload: CompactSearchIndex | unknown): SearchEntry[];
export function searchEntries(entries: SearchEntry[], query: string, limit?: number): SearchResult;
export function makeSearchSnippet(text: string, query: string, maxLength?: number): string;
export function chooseTargetIndex(texts: string[], anchorText: string, query: string): number;
