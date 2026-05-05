# gitLens — GitHub Profile Visualizer

> gitLens pulls any public GitHub profile and turns it into interactive charts, repo cards, and stats — no login needed.

---

## What it does

You type in a GitHub username. gitLens fetches the profile and all public repositories from the GitHub REST API, processes the data in the browser, and renders it as:

- **Language breakdown** — pie chart of top languages across all repos
- **Activity by year** — bar chart showing repos created and stars earned per year
- **Repo grid** — cards for every repo with language, stars, forks, topics, and date
- **Insights** — most used language, most active year, top repo, total stars/forks, account age

Everything runs client-side. No backend, no auth, no database.

---

## Tech stack

| Purpose          | Library                    |
| ---------------- | -------------------------- |
| Framework        | React 19 + TypeScript      |
| Build tool       | Vite                       |
| Styling          | Tailwind CSS v4            |
| State management | Zustand                    |
| Data fetching    | TanStack Query v5          |
| Charts           | Recharts                   |
| Animations       | Motion (Framer Motion v12) |
| Routing          | React Router v7            |

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Optional: GitHub token

The GitHub REST API allows 60 unauthenticated requests per hour. If you're hitting rate limits, create a `.env.local` file in the root:

```env
VITE_GITHUB_TOKEN=your_personal_access_token
```

A classic token with no scopes (read-only public data) is enough.

---

## Project structure

```
src/
├── api/            # GitHub REST API calls
├── assets/         # Images and illustrations
├── components/
│   ├── analyzer/   # UserProfile, RepoGrid, Filterbar
│   ├── animations/ # Motion variants
│   ├── charts/     # ActivityChart, LanguageChart
│   ├── footer/
│   ├── header/
│   ├── icons/
│   ├── layout/
│   └── ui/         # Button, Card, Dropdown, Input, Skeleton, OptimizedImage
├── constant/       # Language colors, sort options, how-it-works copy
├── hooks/          # useGithubData, useFilteredRepos
├── pages/
│   ├── error/      # 404 page
│   ├── landing/    # LandingHero, About, HowItWorks
│   └── AnalyzePage.tsx
├── store/          # Zustand store (username, filters, view mode)
├── types/          # TypeScript interfaces
└── utils/          # cn, format, github helpers
```

---

## Features

- Search any public GitHub username
- Filter repos by language, year, or keyword
- Sort repos by stars, newest, or last updated
- Paginated repo fetch — loads all repos, not just the first 30
- Forks excluded from results by default
- Skeleton loading states throughout
- Responsive across mobile, tablet, and desktop
- Optimistic image loading with fallback

---

## Scripts

```bash
npm run dev       # Development server
npm run build     # Production build (tsc + vite)
npm run preview   # Preview the production build
npm run lint      # ESLint
```

---

## Notes

- Only public repositories are fetched and shown
- Forked repos are filtered out intentionally
- Data is cached for 5 minutes via TanStack Query, so re-searching the same username won't re-fetch
