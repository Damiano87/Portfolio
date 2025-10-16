import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import LanguageToggle from "../LanguageToggle";
import ThemeToggle from "../ThemeToggle";

const MobileNav = ({
  navItems,
}: {
  navItems: { name: string; href: string }[];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center">
        <div className="flex items-center">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md",
          "z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col md:hidden space-y-8 text-xl">
          {navItems.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default MobileNav;
