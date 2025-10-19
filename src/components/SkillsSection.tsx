import { use, useState } from "react";
import { cn } from "../lib/utils";
import { domAnimation, LazyMotion, motion } from "motion/react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiClaude,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LanguageContext } from "../context/createLanguageContext";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: SiHtml5 },
  { name: "Javascript", category: "frontend", icon: SiJavascript },
  { name: "React", category: "frontend", icon: SiReact },
  { name: "Typescript", category: "frontend", icon: SiTypescript },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },
  { name: "Sass", category: "frontend", icon: SiSass },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs },

  // Backend
  { name: "Node.js", category: "backend", icon: SiNodedotjs },
  { name: "Express", category: "backend", icon: SiExpress },
  { name: "MongoDB", category: "backend", icon: SiMongodb },

  // Tools
  { name: "Git/GitHub", category: "tools", icon: SiGithub },
  { name: "VS Code", category: "tools", icon: VscVscode },
  { name: "Claude AI", category: "tools", icon: SiClaude },
];

const SkillsSection = () => {
  const { language, t } = use(LanguageContext);

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "frontend", "backend", "tools"];

  // filter skills
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // translate specific categories ("all" and "tools")
  const translateCategories = (category: string): string => {
    if (language === "pl") {
      if (category === "all") return "wszystkie";
      if (category === "tools") return "narzędzia";
    }
    return category;
  };

  return (
    <LazyMotion features={domAnimation}>
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {t.skills.titlePart1}{" "}
            <span className="text-primary">{t.skills.titlePart2}</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                {translateCategories(category)}
              </button>
            ))}
          </div>

          <motion.div
            initial={{
              translateY: 20,
              opacity: 0,
            }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 2 },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  title={skill.name}
                  className="bg-card p-6 rounded-lg shadow-xs card-hover"
                >
                  <div className="flex items-center gap-4">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <Icon size={25} />
                    {skill.name === "HTML/CSS" && <SiCss3 size={25} />}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
};
export default SkillsSection;
