import { createContext } from "react";
import { translations } from "../translations";

type LanguageContext = {
  language: "pl" | "en";
  toggleLanguage: () => void;
  t: typeof translations.pl | typeof translations.en;
};

export const LanguageContext = createContext<LanguageContext>({
  language: "pl",
  toggleLanguage: () => {},
  t: translations.pl,
});
