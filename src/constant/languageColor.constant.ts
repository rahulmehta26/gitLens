export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3572A5",
  Rust: "#DEA584",
  Go: "#00ADD8",
  Java: "#B07219",
  CSS: "#563D7C",
  HTML: "#E34C26",
  "C++": "#F34B7D",
  C: "#555555",
  Ruby: "#CC342D",
  PHP: "#4F5D95",
  Swift: "#FA7343",
  Kotlin: "#7F52FF",
  Dart: "#00B4AB",
  Shell: "#89E051",
  Vue: "#41B883",
  Svelte: "#FF3E00",
};

export function getLangColor(lang: string): string {
  return LANGUAGE_COLORS[lang] ?? "#FF5200";
}
