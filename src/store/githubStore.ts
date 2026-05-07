import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { FilterState, SortOption, ViewMode } from "../types/github.types";

interface GithubStore {
  searchInput: string;
  activeUsername: string;
  setSearchInput: (v: string) => void;
  setActiveUsername: (v: string) => void;
  filters: FilterState;
  setLanguageFilter: (language: string) => void;
  setSortBy: (sortBy: SortOption) => void;
  setYearFilter: (year: string) => void;
  setSearchFilter: (search: string) => void;
  resetFilters: () => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const DEFAULT_FILTERS: FilterState = {
  language: "all",
  sortBy: "created",
  year: "all",
  search: "",
};

export const useGithubStore = create<GithubStore>()(
  devtools(
    (set) => ({
      searchInput: "",
      activeUsername: "",
      setSearchInput: (searchInput) => set({ searchInput }),
      setActiveUsername: (activeUsername) => set({ activeUsername }),

      filters: { ...DEFAULT_FILTERS },
      setLanguageFilter: (language) =>
        set((s) => ({ filters: { ...s.filters, language } })),
      setSortBy: (sortBy) =>
        set((s) => ({ filters: { ...s.filters, sortBy } })),
      setYearFilter: (year) =>
        set((s) => ({ filters: { ...s.filters, year } })),
      setSearchFilter: (search) =>
        set((s) => ({ filters: { ...s.filters, search } })),
      resetFilters: () => set({ filters: { ...DEFAULT_FILTERS } }),

      viewMode: "grid",
      setViewMode: (viewMode) => set({ viewMode }),
    }),
    { name: "github-store" },
  ),
);
