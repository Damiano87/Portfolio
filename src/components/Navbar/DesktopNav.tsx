import LanguageToggle from "../LanguageToggle";
import ThemeToggle from "../ThemeToggle";

const DesktopNav = ({
  navItems,
}: {
  navItems: { name: string; href: string }[];
}) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item, index) => (
        <a
          href={item.href}
          key={index}
          className="text-foreground/80 hover:text-primary transition-colors duration-300"
        >
          {item.name}
        </a>
      ))}
      <div className="flex items-center">
        {/* Language Toggle */}
        <LanguageToggle />
        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </div>
  );
};
export default DesktopNav;
