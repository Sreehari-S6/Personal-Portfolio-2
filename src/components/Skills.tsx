
import { skillItems } from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Skills & <span className="text-yellow-400">Technologies</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use to build practical web applications
            and solve problems.
          </p>
        </div>

        {/* Individual Skill Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillItems.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
