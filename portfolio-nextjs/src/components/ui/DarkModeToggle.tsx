"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DarkModeToggleProps {
  className?: string;
  variant?: "default" | "header";
}

export function DarkModeToggle({ className, variant = "default" }: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          variant === "header" && "text-white hover:bg-white/20",
          className
        )}
        disabled
      >
        <div className="h-5 w-5" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    );
  }

  // Cycle through themes: light -> dark -> system
  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />;
      case "dark":
        return <Moon className="h-5 w-5" />;
      default:
        return <Monitor className="h-5 w-5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Switch to dark mode";
      case "dark":
        return "Switch to system theme";
      default:
        return "Switch to light mode";
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className={cn(
        "transition-colors",
        variant === "header" && "text-white hover:bg-white/20",
        className
      )}
      aria-label={getLabel()}
    >
      {getIcon()}
    </Button>
  );
}

export default DarkModeToggle;
