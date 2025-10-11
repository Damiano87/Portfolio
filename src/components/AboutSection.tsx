import { Briefcase, Code, User } from "lucide-react";
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          O <span className="text-primary">mnie</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer and Tech Creator
            </h3>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              optio autem magnam voluptates, cupiditate commodi qui doloremque
              maiores eligendi odio tempora voluptatibus. Maiores, qui.
            </p>

            <p className="text-muted-foreground">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              rerum harum quisquam facilis at natus, ratione sint praesentium
              error! Quidem obcaecati itaque harum ut.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Link to={"#contact"} className="cosmic-button">
                Kontakt
              </Link>

              <Link
                to={""}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Pobierz CV
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h6 w-6  text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Tworzenie responsywnych stron i aplikacji webowych za pomocą
                    nowoczesnych frameworków.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h6 w-6  text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Projektowanie intuicyjnych interfejsów użytkownika
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h6 w-6  text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Zarządanie projektami
                  </h4>
                  <p className="text-muted-foreground">
                    Tworzenie responsywnych stron i aplikacji webowych za pomocą
                    nowoczesnych frameworków.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
