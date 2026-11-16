
import { ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-black/20">

      {/* Project Image */}
      <div className="relative h-56 shrink-0 overflow-hidden bg-gradient-to-br from-gray-800 to-black">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />

        <ArrowUpRight
          size={22}
          className="absolute right-4 top-4 text-white/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-yellow-400"
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-6">

        {/* Project Title */}
        <h3 className="mb-4 text-xl font-semibold leading-snug text-[var(--primary-text)] transition-colors group-hover:text-yellow-400">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-6 flex-1 text-sm leading-7 text-[var(--secondary-text)]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-[var(--border-color)] bg-[var(--section-bg)] px-3 py-1.5 text-xs text-[var(--secondary-text)] transition-colors duration-300 hover:border-yellow-400/40 hover:text-yellow-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-auto flex min-h-[48px] flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--border-color)] pt-5">

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="flex items-center gap-2 text-sm font-medium text-[var(--secondary-text)] transition-colors hover:text-yellow-400"
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
                aria-label={`View live demo of ${project.title}`}
                className="flex items-center gap-2 text-sm font-medium text-[var(--secondary-text)] transition-colors hover:text-yellow-400"
              >
                Live Demo
                <ExternalLink size={15} />
              </a>
            )}

          </div>
        )}

      </div>
    </article>
  );
}

export default ProjectCard;
