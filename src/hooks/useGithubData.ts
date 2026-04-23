import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type {
  FilterState,
  GithubRepo,
  GithubUser,
  ProcessedData,
} from "../types/github.types";
import {
  aggregateLanguages,
  groupReposByYear,
  sortRepos,
} from "../utils/github";
import { getLangColor } from "../constant/languageColor.constant";
import { fetchGithubProfile } from "../api/api";

function buildProcessedData(
  user: GithubUser,
  repos: GithubRepo[],
): ProcessedData {
  const reposByYear = groupReposByYear(repos);
  const langAgg = aggregateLanguages(repos);
  const totalRepos = repos.length;

  const languageStats = Object.entries(langAgg)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([name, value]) => ({
      name,
      value,
      color: getLangColor(name),
      pct: Math.round((value / totalRepos) * 100),
    }));

  const activityData = Object.entries(reposByYear)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([year, yr]) => ({
      year,
      count: yr.length,
      stars: yr.reduce((s, r) => s + r.stargazers_count, 0),
    }));

  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
  const totalForks = repos.reduce((s, r) => s + r.forks_count, 0);
  const topRepo = repos.reduce<GithubRepo | null>(
    (t, r) => (!t || r.stargazers_count > t.stargazers_count ? r : t),
    null,
  );
  const mostActiveYear =
    activityData.reduce(
      (m, d) => (d.count > (m?.count ?? 0) ? d : m),
      activityData[0],
    )?.year ?? "N/A";
  const accountAge = Math.floor(
    (Date.now() - new Date(user.created_at).getTime()) /
      (365.25 * 24 * 3600 * 1000),
  );

  return {
    user,
    repos,
    reposByYear,
    languageStats,
    activityData,
    availableLangs: Object.keys(langAgg).sort(),
    availableYears: Object.keys(reposByYear).sort().reverse(),
    insights: {
      mostUsedLanguage: languageStats[0]?.name ?? "N/A",
      mostActiveYear,
      topRepo,
      totalStars,
      totalForks,
      avgStarsPerRepo: totalRepos ? Math.round(totalStars / totalRepos) : 0,
      languageDiversity: languageStats.length,
      accountAge,
    },
  };
}

export function useGithubData(username: string) {
  const query = useQuery({
    queryKey: ["github-profile", username],
    queryFn: () => fetchGithubProfile(username),
    enabled: !!username.trim(),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 1,
  });

  const processedData = useMemo<ProcessedData | null>(() => {
    if (!query.data) return null;
    return buildProcessedData(query.data.user, query.data.repos);
  }, [query.data]);

  return {
    processedData,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error?.message ?? null,
    refetch: query.refetch,
  };
}

export function useFilteredRepos(
  repos: GithubRepo[] | undefined,
  filters: FilterState,
): GithubRepo[] {
  return useMemo(() => {
    if (!repos) return [];
    let result = repos;
    if (filters.language !== "all")
      result = result.filter((r) => r.language === filters.language);
    if (filters.year !== "all")
      result = result.filter(
        (r) => new Date(r.created_at).getFullYear().toString() === filters.year,
      );
    if (filters.search.trim())
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          r.description?.toLowerCase().includes(filters.search.toLowerCase()),
      );
    return sortRepos(result, filters.sortBy);
  }, [repos, filters]);
}
