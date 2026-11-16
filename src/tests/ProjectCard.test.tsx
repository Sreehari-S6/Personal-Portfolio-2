import { describe, test, expect } from "@jest/globals";

import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/portfolio";

const mockProject = {
  title: "React User Management Dashboard",
  description: "A dashboard to manage users with search, sorting and filtering.",
  image: "/images/project.jpg",
  technologies: ["React", "TypeScript", "AG Grid"],
  githubUrl: "https://github.com/example/project",
  demoUrl: "https://example.com",
} as Project;

describe("ProjectCard Component", () => {
  test("renders the project title", () => {
    render(<ProjectCard project={mockProject} />);

    expect(
      screen.getByRole("heading", {
        name: "React User Management Dashboard",
      }),
    ).toBeInTheDocument();
  });

  test("renders the project description", () => {
    render(<ProjectCard project={mockProject} />);

    expect(
      screen.getByText("A dashboard to manage users with search, sorting and filtering."),
    ).toBeInTheDocument();
  });

  test("renders the project image with correct alt text", () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByAltText("React User Management Dashboard preview")).toHaveAttribute(
      "src",
      "/images/project.jpg",
    );
  });

  test("renders all project technologies", () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("AG Grid")).toBeInTheDocument();
  });

  test("renders GitHub and Live Demo links", () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/example/project",
    );

    expect(screen.getByRole("link", { name: /live demo/i })).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });

  test("opens external links in a new tab safely", () => {
    render(<ProjectCard project={mockProject} />);

    const githubLink = screen.getByRole("link", { name: /github/i });

    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("does not render optional links when URLs are missing", () => {
    const projectWithoutLinks = {
      ...mockProject,
      githubUrl: "",
      demoUrl: "",
    } as Project;

    render(<ProjectCard project={projectWithoutLinks} />);

    expect(screen.queryByRole("link", { name: /github/i })).not.toBeInTheDocument();

    expect(screen.queryByRole("link", { name: /live demo/i })).not.toBeInTheDocument();
  });
});
