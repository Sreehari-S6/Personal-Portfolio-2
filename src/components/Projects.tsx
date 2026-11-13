
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            My Work
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            A selection of projects that demonstrate my development skills
            and practical experience.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
