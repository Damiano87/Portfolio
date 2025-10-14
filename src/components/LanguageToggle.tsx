import { use } from "react";
import { cn } from "../lib/utils";
import { LanguageContext } from "../context/createLanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = use(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "fixed top-4 right-14 z-50 p-2 duration-300",
        "focus:outline-hidden rounded-full transition-colors cursor-pointer"
      )}
    >
      {language === "pl" ? "🇬🇧 EN" : "🇵🇱 PL"}
    </button>
  );
};
export default LanguageToggle;
