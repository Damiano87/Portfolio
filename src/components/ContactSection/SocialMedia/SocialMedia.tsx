import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

const SocialMedia = () => {
  return (
    <div className="pt-8">
      <h4 className="font-medium mb-4">Moje social media</h4>
      <div className="flex space-x-4 justify-center">
        <Link
          to={"#"}
          target="_blank"
          className="hover:text-primary duration-300"
        >
          <Linkedin />
        </Link>
        <Link
          to={"#"}
          target="_blank"
          className="hover:text-primary duration-300"
        >
          <Instagram />
        </Link>
        <Link
          to={"#"}
          target="_blank"
          className="hover:text-primary duration-300"
        >
          <Facebook />
        </Link>
      </div>
    </div>
  );
};
export default SocialMedia;
