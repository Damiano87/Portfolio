export const projects = [
  {
    id: 1,
    titlePl: "Sklep Yamaha",
    titleEN: "Yamaha Store",
    descriptionPl:
      "Aplikacja e-commerce umożliwiająca przeglądanie i zamawianie motocykli oraz quadów (ATV). Projekt wykorzystuje nowoczesny stack technologiczny z React.js po stronie klienta oraz Node.js z bazą danych MongoDB zarządzaną przez Prisma ORM. Interfejs użytkownika został zaprojektowany z wykorzystaniem Tailwind CSS oraz komponentów z biblioteki shadcn/ui, zapewniając responsywny i intuicyjny design.",
    descriptionEN:
      "An e-commerce application for browsing and ordering motorcycles and ATVs. The project uses a modern tech stack with React.js on the client side and Node.js with MongoDB database managed by Prisma ORM. The user interface was designed using Tailwind CSS and shadcn/ui components, providing a responsive and intuitive design.",
    image: "/projects/yamaha.webp",
    imageFallback: "/projects/yamaha.png",
    tags: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "Prisma",
    ],
    demoUrl: "https://yamahashop.onrender.com",
    githubUrl: "https://github.com/Damiano87/Yamaha",
  },
  {
    id: 2,
    titlePl: "Sklep Meblowy",
    titleEN: "Furniture Store",
    descriptionPl:
      "Sklep internetowy z meblami oferujący intuicyjne przeglądanie katalogów produktów i realizację zakupów online. Backend oparty na Node.js z bazą MongoDB i Prisma ORM zapewnia wydajne zarządzanie danymi, a frontend w React.js z Tailwind CSS i Shadcn/ui gwarantuje płynne doświadczenie użytkownika.Aplikacja umożliwia kompleksową obsługę procesu zakupowego od wyboru produktu po finalizację zamówienia.",
    descriptionEN:
      "A furniture e-commerce platform featuring intuitive product catalog browsing and seamless online purchasing. The backend built with Node.js, MongoDB, and Prisma ORM ensures efficient data management, while the React.js frontend styled with Tailwind CSS and shadcn/ui delivers a smooth user experience. The system provides comprehensive shopping flow handling from product selection to order completion.",
    image: "/projects/h-furniture.webp",
    imageFallback: "/projects/h-furniture.png",
    tags: [
      "React",
      "Typescript",
      "TailwindCSS",
      "ShadCN",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Stripe",
    ],
    demoUrl: "https://h-furniture-store.onrender.com",
    githubUrl: "https://github.com/Damiano87/Meble",
  },
  {
    id: 3,
    titlePl: "Smart Home Dashboard",
    titleEN: "Smart Home Dashboard",
    descriptionPl:
      "Smart home dashboard umożliwiający centralne zarządzanie urządzeniami w domu inteligentnym. Aplikacja wyświetla dane w czasie rzeczywistym, takie jak temperatura w poszczególnych pokojach, oraz pozwala na zdalne sterowanie oświetleniem, ogrzewaniem i klimatyzacją. Projekt zbudowany w Next.js ze stylowaniem w SASS zapewnia responsywny interfejs i szybkie działanie.",
    descriptionEN:
      "A smart home dashboard enabling centralized management of intelligent home devices. The application displays real-time data such as room temperatures and allows remote control of lighting, heating, and air conditioning systems. Built with Next.js and styled using SASS, the project provides a responsive interface and fast performance.",
    image: "/projects/smart-home-dashboard.webp",
    imageFallback: "/projects/smart-home-dashboard.png",
    tags: ["Next.js", "Typescript", "Sass", "MongoDB", "Prisma"],
    demoUrl: "https://smart-home-dashboard-swart.vercel.app",
    githubUrl: "https://github.com/Damiano87/Smart-Home-Dashboard",
  },
];

export type ProjectType = (typeof projects)[number];
