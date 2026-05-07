import type { GithubRepo } from "../types/github.types";
import { formatYear } from "./format";

export function groupReposByYear(
  repos: GithubRepo[],
): Record<string, GithubRepo[]> {
  return repos.reduce<Record<string, GithubRepo[]>>((acc, repo) => {
    const year = formatYear(repo.created_at);
    (acc[year] ??= []).push(repo);
    return acc;
  }, {});
}

export function aggregateLanguages(
  repos: GithubRepo[],
): Record<string, number> {
  return repos.reduce<Record<string, number>>((acc, repo) => {
    if (repo.language) acc[repo.language] = (acc[repo.language] ?? 0) + 1;
    return acc;
  }, {});
}

export function sortRepos(
  repos: GithubRepo[],
  by: "stars" | "updated",
): GithubRepo[] {
  return [...repos].sort((a, b) => {
    if (by === "stars") return b.stargazers_count - a.stargazers_count;
    if (by === "updated")
      return +new Date(b.updated_at) - +new Date(a.updated_at);
    return +new Date(b.created_at) - +new Date(a.created_at);
  });
}
