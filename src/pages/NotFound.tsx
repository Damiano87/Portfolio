import { use } from "react";
import { Link } from "react-router";
import { LanguageContext } from "../context/createLanguageContext";

const NotFound = () => {
  const { language } = use(LanguageContext);

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="space-y-6">
        <h1 className="font-bold text-slate-100">
          {language === "pl" ? "Strona nie istnieje" : "Page doesn't exist"}
        </h1>
        <Link to={"/"} className="cosmic-button">
          {language === "pl" ? "Wróć" : "Go Back"}
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
