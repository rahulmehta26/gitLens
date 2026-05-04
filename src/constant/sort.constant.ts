import type { SortOption } from "../types/github.types";

export const SORTS: { label: string; value: SortOption }[] = [
  { label: "Stars", value: "stars" },
  { label: "Newest", value: "created" },
  { label: "Updated", value: "updated" },
];
