import { useEffect, useState, type ReactNode } from "react";
import { translations } from "../translations";
import { LanguageContext } from "./createLanguageContext";

export const LanguageContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState<"pl" | "en">(() => {
    return (localStorage.getItem("language") || "pl") as "pl" | "en";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pl" ? "en" : "pl"));
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext>
  );
};
