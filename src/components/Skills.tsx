
import { Code2, Server, Database, Users } from "lucide-react";
import { skillGroups } from "../data/skills";

const categoryIcons = [Code2, Server, Database, Users];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = categoryIcons[index] ?? Code2;

            return (
              <div
                key={group.category}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                  <Icon size={25} />
                </div>

                <h3 className="mb-5 text-xl font-semibold">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
