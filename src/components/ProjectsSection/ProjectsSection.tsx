import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { use } from "react";
import { LanguageContext } from "../../context/createLanguageContext";
import Project from "./Project";
import { projects } from "./ProjectsList";

const ProjectsSection = () => {
  const { language, t } = use(LanguageContext);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.projects.titlePart1}{" "}
          <span className="text-primary">{t.projects.titlePart2}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.projects.subtitle}
        </p>

        <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project
              key={project.id}
              project={project}
              index={index}
              language={language}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={"https://github.com/Damiano87"}
            target="_blank"
            className="cosmic-button w-fit flex items-center gap-2 mx-auto"
          >
            {t.projects.myGithub} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
