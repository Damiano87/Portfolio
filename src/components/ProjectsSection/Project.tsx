import { motion } from "motion/react";
import { Link } from "react-router";
import { ExternalLink } from "lucide-react";
import type { ProjectType } from "./ProjectsList";
import { SiGithub } from "react-icons/si";

type ProjectProps = {
  project: ProjectType;
  index: number;
  language: "pl" | "en";
};

const Project = ({ project, index, language }: ProjectProps) => {
  return (
    <motion.div
      initial={{
        translateY: 20,
        opacity: 0,
      }}
      whileInView={{
        translateY: 0,
        opacity: 1,
        transition: {
          duration: 5,
          delay: index * 0.5,
        },
      }}
      className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={language === "pl" ? project.titlePl : project.titleEN}
          decoding="async"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium  rounded-full bg-secondary text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-1">
          {language === "pl" ? project.titlePl : project.titleEN}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {language === "pl" ? project.descriptionPl : project.descriptionEN}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <Link
              to={project.demoUrl}
              target="_blank"
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={20} />
            </Link>
            <Link
              to={project.githubUrl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <SiGithub size={20} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Project;
