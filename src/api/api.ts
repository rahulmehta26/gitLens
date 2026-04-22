import type { GithubRepo, GithubUser } from "../types/github.types";

const BASE = "https://api.github.com";

function buildHeaders(): HeadersInit {
  const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;
  return {
    Accept: "application/vnd.github.v3+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`, { headers: buildHeaders() });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(
      res.status === 404
        ? "User not found. Check the username and try again."
        : res.status === 403
          ? "GitHub rate limit exceeded. Add a VITE_GITHUB_TOKEN to continue."
          : (body.message ?? `HTTP ${res.status}`),
    );
  }
  return res.json() as Promise<T>;
}

export async function fetchUser(username: string): Promise<GithubUser> {
  return get<GithubUser>(`/users/${username}`);
}

export async function fetchAllRepos(username: string): Promise<GithubRepo[]> {
  const all: GithubRepo[] = [];
  let page = 1;
  while (true) {
    const batch = await get<GithubRepo[]>(
      `/users/${username}/repos?per_page=100&page=${page}&sort=created&direction=asc`,
    );
    all.push(...batch);
    if (batch.length < 100) break;
    page++;
  }
  return all.filter((r) => !r.fork);
}

export async function fetchGithubProfile(username: string) {
  const [user, repos] = await Promise.all([
    fetchUser(username),
    fetchAllRepos(username),
  ]);
  return { user, repos };
}
