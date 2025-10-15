import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import LanguageToggle from "../components/LanguageToggle";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed top-4 right-5 z-50 flex items-center">
        {/* Language Toggle */}
        <LanguageToggle />
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
      </div>
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
