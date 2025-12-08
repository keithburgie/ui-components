"use client";

import * as React from "react";
import { Button, Flex, Text, Box } from "@ui/design-system/components";
import { Moon, Sun, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState<Theme>("system");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (
      stored &&
      (stored === "light" || stored === "dark" || stored === "system")
    ) {
      setTheme(stored);
    }
  }, []);

  React.useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "light") {
      root.classList.add("light");
    } else if (theme === "dark") {
      root.classList.add("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  if (!mounted) {
    return (
      <Flex className="gap-2">
        <Button size="sm" disabled aria-label="Color mode switcher">
          Color mode
        </Button>
      </Flex>
    );
  }

  const cycleTheme = () => {
    setTheme((current) => {
      if (current === "light") return "dark";
      if (current === "dark") return "system";
      return "light";
    });
  };

  const getThemeLabel = () => {
    if (theme === "system") return "System";
    return theme.charAt(0).toUpperCase() + theme.slice(1);
  };

  const getThemeIcon = () => {
    if (theme === "system") return <Monitor className="size-5" />;
    if (theme === "light") return <Sun className="size-5" />;
    return <Moon className="size-5" />;
  };

  const getAriaLabel = () => {
    const mode = getThemeLabel();
    return `Color mode: ${mode}. Click to switch between light, dark, and system preferences.`;
  };

  return (
    <Button
      variant="secondary"
      size="md"
      onClick={cycleTheme}
      aria-label={getAriaLabel()}
      title={`Color mode: ${getThemeLabel()}`}
      className="gap-2 transition-all duration-300 hover:scale-105 group h-9 px-3"
      iconStart={
        <Box
          className="transition-transform duration-300 group-hover:rotate-12"
          aria-hidden="true"
        >
          {getThemeIcon()}
        </Box>
      }
    >
      <Box className="hidden sm:inline font-medium">
        <Text as="span" className="sr-only">
          Color mode:{" "}
        </Text>
        {getThemeLabel()}
      </Box>
    </Button>
  );
}
