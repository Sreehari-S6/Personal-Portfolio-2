import { ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-800 to-black">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Project Details */}
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-[var(--primary-text)] transition-colors group-hover:text-yellow-400">
            {project.title}
          </h3>

          <ArrowUpRight
            size={20}
            className="shrink-0 text-[var(--muted-text)] transition-colors group-hover:text-yellow-400"
          />
        </div>

        <p className="mb-5 text-sm leading-7 text-[var(--secondary-text)]">{project.description}</p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-[var(--border-color)] bg-[var(--section-bg)] px-3 py-1.5 text-xs text-[var(--secondary-text)]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex items-center gap-5 border-t border-[var(--border-color)] pt-5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--secondary-text)] transition-colors hover:text-yellow-400"
            >
              GitHub
              <ExternalLink size={15} />
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--secondary-text)] transition-colors hover:text-yellow-400"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
