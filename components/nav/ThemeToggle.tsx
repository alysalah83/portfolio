"use client";

import { useState } from "react";

type Theme = "dark" | "light";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";

    return document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  });

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative h-6 w-11 shrink-0 rounded-full border border-border bg-surface2"
    >
      <span
        className={[
          "absolute top-[3px] left-[3px] h-4 w-4 rounded-full transition-all duration-200",
          theme === "light"
            ? "translate-x-5 bg-accent"
            : "translate-x-0 bg-muted-text",
        ].join(" ")}
      />
    </button>
  );
}

export default ThemeToggle;
