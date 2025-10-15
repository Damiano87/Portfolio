import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { use } from "react";
import { LanguageContext } from "../../context/createLanguageContext";

const ContactInfo = () => {
  const { t } = use(LanguageContext);

  return (
    <motion.div
      initial={{
        translateX: -20,
        rotate: -45,
        opacity: 0,
      }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        rotate: 0,
        transition: { duration: 2 },
      }}
      className="space-y-8"
    >
      <h3 className="text-2xl font-semibold mb-6">{t.contact.contactInfo}</h3>

      <div className="space-y-6 justify-center">
        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
            <Link
              to={"mailto:sobe66@gmail.com"}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              sobe66@gmail.com
            </Link>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">{t.contact.phone}</h4>
            <Link
              to={"tel:+48576849588"}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +48 576 849 588
            </Link>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-full bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">{t.contact.location}</h4>
            <span className="text-muted-foreground hover:text-primary transition-colors">
              Rzeszów, {t.contact.country}
            </span>
          </div>
        </div>
      </div>

      {/* Social media */}
      {/* <SocialMedia /> */}
    </motion.div>
  );
};
export default ContactInfo;
