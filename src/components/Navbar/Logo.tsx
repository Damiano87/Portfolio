import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to={"#hero"}
      aria-label="Home"
      className="text-xl font-bold text-primary flex items-center"
    >
      <span className="hidden md:block relative z-10">
        <span className="text-glow text-foreground">Damian</span> Portfolio
      </span>
    </Link>
  );
};
export default Logo;
