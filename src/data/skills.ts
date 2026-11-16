
export interface SkillItem {
  name: string;
  description: string;
  icons: string[];
}

// Technical skills displayed in the Skills section
export const skillItems: SkillItem[] = [
  {
    name: "React.js",
    description:
      "Building reusable components, interactive interfaces, and single-page applications.",
    icons: ["react"],
  },
  {
    name: "Python & Django",
    description:
      "Developing backend applications, database operations, and REST API functionality.",
    icons: ["python", "django"],
  },
  {
    name: "PHP",
    description:
      "Building server-side applications, backend logic, and dynamic web functionality.",
    icons: ["php"],
  },
  {
    name: "JavaScript",
    description:
      "Creating interactive web experiences, handling events, and integrating APIs.",
    icons: ["javascript"],
  },
  {
    name: "TypeScript",
    description:
      "Writing structured, type-safe code for maintainable React applications.",
    icons: ["typescript"],
  },
  {
    name: "MySQL / SQL",
    description:
      "Managing relational databases, writing queries, and handling application data.",
    icons: ["mysql"],
  },
  {
    name: "Node.js",
    description:
      "Working with JavaScript on the server side and building backend functionality.",
    icons: ["node"],
  },
  {
    name: "Tailwind CSS",
    description:
      "Creating responsive layouts and modern interfaces using utility-first styling.",
    icons: ["tailwind"],
  },
  {
    name: "HTML5 & CSS3",
    description:
      "Building structured web pages, responsive layouts, and styled interfaces.",
    icons: ["html", "css"],
  },
  {
    name: "RESTful APIs",
    description:
      "Working with HTTP requests, JSON data, API integration, and endpoints.",
    icons: ["api"],
  },
  {
    name: "Git & GitHub",
    description:
      "Managing source code, commits, branches, and project repositories.",
    icons: ["git", "github"],
  },
  {
    name: "VS Code",
    description:
      "Using development tools, extensions, and debugging workflows.",
    icons: ["vscode"],
  },
];

// Personal strengths displayed in the About section
export const softSkills: string[] = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Time Management",
];
