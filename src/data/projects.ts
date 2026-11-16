
import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "pc-parts-ecommerce",
    title: "PC Parts Configuration and Online Parts Purchasing System",
    summary:
      "A web platform for custom PC assembly and component-based e-commerce.",
    description:
      "Developed a web platform for custom PC assembly and online component purchasing. The application includes backend logic for checking PC component compatibility and a MySQL database for products, user configurations, and orders.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    features: [
      "Real-time compatibility checking of PC components",
      "Product and user-configuration management",
      "Order-handling functionality",
      "Interactive virtual PC-building interface",
    ],
    image: "/images/projects/pc-parts-project.jpg",
    demoUrl: "http://bydcomputers.infinityfree.io/?i=1",
  },
  {
    id: "logistics-management",
    title:
      "Logistics Management: Centralized Platform for Cargo Transportation Through Ships",
    summary:
      "A centralized web platform for managing cargo transportation through ships.",
    description:
      "Developed a centralized cargo transportation management platform with backend functionality built using Django and database operations handled through MySQL. The project focuses on user-friendly interfaces and workflows.",
    technologies: ["Python", "Django", "MySQL", "HTML", "CSS"],
    features: [
      "Centralized cargo transportation management",
      "Backend functionality using Django",
      "Database operations using MySQL",
      "User-friendly interfaces and workflows",
    ],
    image: "/images/projects/logistics-project.jpg",
    githubUrl: "https://github.com/Sreehari-S6/LogiNeX",
  },
  {
    id: "react-user-management-dashboard",
    title: "React User Management Dashboard",
    summary:
      "A React and TypeScript dashboard for browsing, searching, sorting, and filtering user records.",
    description:
      "Built a user-management interface using React and TypeScript. It retrieves sample user records from the JSONPlaceholder users endpoint and presents them in a data grid, with navigation to an individual user's detail page.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "AG Grid",
      "Fetch API",
      "CSS",
    ],
    features: [
      "Fetches user data from JSONPlaceholder",
      "Debounced search across name, username, and email",
      "Sortable user data columns",
      "Filtering by city and company",
      "Pagination in the data grid",
      "Navigation to individual user detail pages",
      "Dark-mode interface",
    ],
    image: "/images/projects/user-management-dashboard.jpg",
    githubUrl:
      "https://github.com/Sreehari-S6/User-Management-Dashboard",
  },
];
