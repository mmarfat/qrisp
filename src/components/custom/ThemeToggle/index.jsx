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


// i18n
import { useTranslation } from "react-i18next";

const ThemeToggle = () => {

  // Theme
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Local states
  const [mounted, setMounted] = useState(false);

  // Effects
  useEffect(() => {
    setMounted(true); // Mark the component as mounted (Solves hydration issue)
  }, []);

  // i18n
  const { t } = useTranslation();

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
      className="rounded-sm dark:border-border/40 dark:bg-background"
      aria-label={theme === "light" ? t("arialabels.switchtodark") : t("arialabels.switchtolight")}
    >
      {currentTheme === "light" ? (
        <Moon />
      ) : (
        <Sun />
      )}
    </Button>
  );
};

export default ThemeToggle;
