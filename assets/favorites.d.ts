export interface FavoriteItemInput {
  id: string;
  date: string;
  report: string;
  title: string;
  anchorText: string;
  snippet: string;
}

export interface FavoriteItem extends FavoriteItemInput {
  favorite: boolean;
  updatedAt: string;
}

export interface FavoriteState {
  version: 1;
  items: Record<string, FavoriteItem>;
}

export const FAVORITES_STORAGE_KEY: "agents-radar-personal-items-v1";

export function createFavoriteItemId(
  date: string,
  report: string,
  anchorText: string,
  occurrence?: number,
): string;
export function createEmptyFavoriteState(): FavoriteState;
export function parseFavoriteState(raw: string | null): FavoriteState;
export function isFavorite(state: FavoriteState, itemId: string): boolean;
export function toggleFavorite(
  state: FavoriteState,
  item: FavoriteItemInput,
  updatedAt?: string,
): FavoriteState;
export function listFavorites(state: FavoriteState): FavoriteItem[];
