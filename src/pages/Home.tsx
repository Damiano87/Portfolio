import { lazy } from "react";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import StarBackground from "../components/StarBackground";

// Lazy load
const SkillsSection = lazy(() => import("../components/SkillsSection"));
const ProjectsSection = lazy(
  () => import("../components/ProjectsSection/ProjectsSection")
);
const ContactSection = lazy(
  () => import("../components/ContactSection/ContactSection")
);

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;
