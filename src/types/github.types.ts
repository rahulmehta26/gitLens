export interface GithubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  company: string | null;
  created_at: string;
  updated_at: string;
  html_url: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  html_url: string;
  topics: string[];
  fork: boolean;
  archived: boolean;
  size: number;
}

export interface LanguageStat {
  name: string;
  value: number;
  color: string;
  pct: number;
}

export interface ActivityDataPoint {
  year: string;
  count: number;
  stars: number;
}

export interface DeveloperInsights {
  mostUsedLanguage: string;
  mostActiveYear: string;
  topRepo: GithubRepo | null;
  totalStars: number;
  totalForks: number;
  avgStarsPerRepo: number;
  languageDiversity: number;
  accountAge: number;
}

export interface ProcessedData {
  user: GithubUser;
  repos: GithubRepo[];
  reposByYear: Record<string, GithubRepo[]>;
  languageStats: LanguageStat[];
  activityData: ActivityDataPoint[];
  insights: DeveloperInsights;
  availableLangs: string[];
  availableYears: string[];
}

export type SortOption = "stars" | "created" | "updated";
export type ViewMode = "grid" | "list";

export interface FilterState {
  language: string;
  sortBy: SortOption;
  year: string;
  search: string;
}
