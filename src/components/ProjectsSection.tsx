import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Yamaha Store",
    description: "Jest to klon strony yamaha.",
    image: "/projects/yamaha.png",
    tags: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "Prisma",
    ],
    demoUrl: "https://yamahashop.onrender.com",
    githubUrl: "https://github.com/Damiano87/Yamaha",
  },
  {
    id: 2,
    title: "Furniture Store",
    description: "Jest to sklep z meblami.",
    image: "/projects/h-furniture.png",
    tags: [
      "React",
      "Typescript",
      "TailwindCSS",
      "ShadCN",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Stripe",
    ],
    demoUrl: "https://h-furniture-store.onrender.com",
    githubUrl: "https://github.com/Damiano87/Meble",
  },
  {
    id: 3,
    title: "Smart Home Dashboard",
    description: "Jest to dashboard domu smart.",
    image: "/projects/smart-home-dashboard.png",
    tags: ["Next.js", "Typescript", "Sass", "MongoDB", "Prisma"],
    demoUrl: "https://smart-home-dashboard-swart.vercel.app",
    githubUrl: "https://github.com/Damiano87/Smart-Home-Dashboard",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Moje <span className="text-primary">Projekty</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                translateY: 20,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: {
                  duration: 5,
                  delay: index === 1 ? 0.5 : index === 2 ? 1 : 0,
                },
              }}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
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

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
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
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={"https://github.com/Damiano87"}
            target="_blank"
            className="cosmic-button w-fit flex items-center gap-2 mx-auto"
          >
            Mój Github <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
