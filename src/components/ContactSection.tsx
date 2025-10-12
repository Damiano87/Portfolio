import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Skontaktuj się <span className="text-primary">ze mną</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Informacje kontaktowe
            </h3>

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
                  <h4 className="font-medium">Telefon</h4>
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
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Rzeszów, Polska
                  </span>
                </div>
              </div>
            </div>

            {/* Social media */}
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
          </div>

          {/* Contact form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Wyślij wiadomość</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name"> Twoje imię</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
