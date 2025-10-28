"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "halohub-theme";

type Theme = "light" | "dark";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Theme | null;
    const prefersDark =
      typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggleTheme() {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.dataset.theme = next;
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }

  if (!theme) {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-sm font-medium text-slate-500 dark:border-white/10 dark:bg-white/[0.08] dark:text-cloud/70">
        …
      </span>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 transition duration-200 ease-out hover:border-slate-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-halo dark:border-white/15 dark:bg-white/[0.08] dark:text-cloud/80 dark:hover:border-white/25 dark:hover:bg-white/[0.12]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        aria-hidden="true"
        className="relative flex h-5 w-5 items-center justify-center"
      >
        {isDark ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.95 6.95-1.42-1.42M7.47 7.47 6.05 6.05m12.9 0-1.42 1.42M7.47 16.53 6.05 17.95" strokeLinecap="round" />
          </svg>
        )}
      </span>
      <span>{isDark ? "Dark" : "Light"} mode</span>
    </button>
  );
}
