"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-lg">
        <div className="h-4 w-4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
      </div>
    );
  }

  const nextTheme = theme === "dark" ? "light" : theme === "light" ? "system" : "dark";
  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200/50 bg-white/50 text-gray-700 shadow-sm transition hover:bg-gray-100 dark:border-gray-700/50 dark:bg-gray-800/50 dark:text-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
      title={`Current: ${theme}`}
    >
      {mounted && <Icon className="h-4 w-4" />}
    </button>
  );
}
