import { personalInfo } from "../data/personal";
import { softSkills } from "../data/skills";
import { interests } from "../data/achievements";
import { GraduationCap, Code2, Lightbulb, Camera } from "lucide-react";

const highlights = [
  {
    title: "Education",
    description: "BCA Graduate · 2026",
    icon: GraduationCap,
  },
  {
    title: "Development",
    description: "Full Stack Development",
    icon: Code2,
  },
  {
    title: "Strengths",
    description: "Problem Solving & Teamwork",
    icon: Lightbulb,
  },
  {
    title: "Interests",
    description: "Photography & Video Editing",
    icon: Camera,
  },
];

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[var(--section-bg)] px-6 py-24 text-[var(--primary-text)]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            About <span className="text-yellow-400">Me.</span>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Introduction */}
          <div>
            <h3 className="mb-5 text-2xl font-semibold text-[var(--primary-text)]">
              A little about who I am.
            </h3>

            <p className="mb-5 text-base leading-8 text-[var(--secondary-text)]">
              {personalInfo.about}
            </p>

            <p className="text-base leading-8 text-[var(--secondary-text)]">
              My goal is to strengthen my development skills, gain practical industry experience,
              and contribute to building useful web applications.
            </p>

            {/* Soft Skills */}
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-[var(--primary-text)]">
                Personal Strengths
              </h4>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-sm text-[var(--secondary-text)] transition hover:border-yellow-400/50 hover:text-yellow-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40"
                >
                  <Icon size={30} className="mb-5 text-yellow-400" />

                  <h4 className="mb-2 text-lg font-semibold text-[var(--primary-text)]">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-6 text-[var(--secondary-text)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interests */}
        <div className="mt-16 border-t border-[var(--border-color)] pt-8">
          <h3 className="mb-5 text-xl font-semibold text-[var(--primary-text)]">
            Beyond Development
          </h3>

          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-3 text-sm text-[var(--secondary-text)]"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
