"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // render nothing (or a neutral placeholder) until client knows the theme
    return null;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg bg-surface hover:bg-surface-hover transition-colors duration-300 border border-border"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun className="text-primary text-xl" />
      ) : (
        <FaMoon className="text-primary text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
