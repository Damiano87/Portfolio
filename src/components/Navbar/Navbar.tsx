import { use, useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { LanguageContext } from "../../context/createLanguageContext";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  // language context
  const { t } = use(LanguageContext);

  const [isScrolled, setIsScrolled] = useState(false);

  // get and array of nav items
  const navItems = Object.values(t.nav);

  // change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* Desktop nav */}
        <DesktopNav navItems={navItems} />

        {/* Background Effects */}
        {/* Mobile nav */}
        <MobileNav navItems={navItems} />
      </div>
    </nav>
  );
};
export default Navbar;
