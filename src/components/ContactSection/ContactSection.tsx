import { use } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { LanguageContext } from "../../context/createLanguageContext";

const ContactSection = () => {
  const { t } = use(LanguageContext);

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t.contact.titlePart1}{" "}
          <span className="text-primary">{t.contact.titlePart2}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ContactInfo />

          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
