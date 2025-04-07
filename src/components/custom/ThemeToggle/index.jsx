// React
import { useEffect, useState } from "react";

// shadcn
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

// Icons
import {
  Sun,
  Moon,
} from 'lucide-react';

const ThemeToggle = () => {
  // Theme
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Local states
  const [mounted, setMounted] = useState(false);

  // Effects
  useEffect(() => {
    setMounted(true); // Mark the component as mounted (Solves hydration issue)
  }, []);

  // Handlers
  const handleThemeCycle = () => {
    if (theme === "system") {
      setTheme(themeCheck(resolvedTheme))
    } else {
      setTheme((prevTheme) => (themeCheck(prevTheme)));
    }
  };

  // Utils
  if (!mounted) {
    return <Button variant="outline" size="icon" className="opacity-0" />;
  }

  const themeCheck = (themeState) => {
    return themeState === "light" ? "dark" : "light";
  }

  const currentTheme = resolvedTheme || "light";

  // Layout
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleThemeCycle}
      className="rounded-sm dark:border-border/40"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {currentTheme === "light" ? (
        <Moon aria-label="Switch to dark mode" />
      ) : (
        <Sun aria-label="Switch to light mode" />
      )}
    </Button>
  );
};

export default ThemeToggle;
