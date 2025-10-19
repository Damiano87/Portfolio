import { Moon, Sun } from "lucide-react";
import { use, useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { LanguageContext } from "../context/createLanguageContext";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { t } = use(LanguageContext);

  // get theme on refresh
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // set theme
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? t.aria.themeBtn.light : t.aria.themeBtn.dark}
      className={cn(
        "p-2 duration-300 cursor-pointer",
        "focus:outline-hidden rounded-full transition-colors"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
export default ThemeToggle;
