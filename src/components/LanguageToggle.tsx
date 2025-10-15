import { use } from "react";
import { cn } from "../lib/utils";
import { LanguageContext } from "../context/createLanguageContext";
import PL from "country-flag-icons/react/3x2/PL";
import GB from "country-flag-icons/react/3x2/GB";

const LanguageToggle = () => {
  const { language, toggleLanguage } = use(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "p-2 duration-300",
        "focus:outline-hidden rounded-full transition-colors cursor-pointer"
      )}
    >
      {language === "pl" ? (
        <GB className="w-6 h-4" />
      ) : (
        <PL className="w-6 h-4" />
      )}
    </button>
  );
};
export default LanguageToggle;
