import type { translations } from "../../translations";

const Title = ({ t }: { t: typeof translations.pl }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        <span className="opacity-0 animate-fade-in">{t.hero.title}</span>
        <span className="text-primary opacity-0 animate-fade-in-delay-1">
          {" "}
          Damian
        </span>
        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
          {" "}
          Sobieraj
        </span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
        {t.hero.subtitle}
      </p>

      <div className="pt-4 opacity-0 animate-fade-in-delay-4">
        <a href="#projects" className="cosmic-button">
          {t.hero.projectsBtn}
        </a>
      </div>
    </div>
  );
};
export default Title;
