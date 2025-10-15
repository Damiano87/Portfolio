import { use } from "react";
import { LanguageContext } from "../../context/createLanguageContext";
import Title from "./Title";
import Portrait from "./Portrait";

const HeroSection = () => {
  const { t } = use(LanguageContext);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container mt-24 md:mt-0 flex flex-col items-center gap-10 max-w-4xl space-y-6 mx-auto text-center z-10">
        <Portrait />
        <Title t={t} />
      </div>
    </section>
  );
};

export default HeroSection;
