import { Award, Users, Languages, Camera, Code2, Plane, Lightbulb } from "lucide-react";

import { achievements, languages, interests } from "../data/achievements";

function Achievements() {
  const interestIcons = [Camera, Lightbulb, Plane];

  return (
    <section
      id="achievements"
      className="bg-[var(--section-bg)] px-6 py-24 text-[var(--primary-text)] lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Recognition & Activities
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Achievements & <span className="text-yellow-400">More</span>
          </h2>

          <p className="mt-4 max-w-2xl text-[var(--secondary-text)]">
            A few milestones, activities, and interests that reflect my journey beyond academics.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = index === 0 ? Users : Award;

            return (
              <div
                key={achievement.title}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                  <Icon size={25} />
                </div>

                <p className="mb-3 text-sm font-medium text-yellow-400">{achievement.period}</p>

                <h3 className="mb-3 text-xl font-semibold text-[var(--primary-text)]">
                  {achievement.title}
                </h3>

                <p className="text-sm leading-7 text-[var(--secondary-text)]">
                  {achievement.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Languages and Interests */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Languages */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-7">
            <div className="mb-6 flex items-center gap-3">
              <Languages size={24} className="text-yellow-400" />
              <h3 className="text-xl font-semibold text-[var(--primary-text)]">Languages</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-lg border border-[var(--border-color)] bg-[var(--section-bg)] px-4 py-3 text-sm text-[var(--secondary-text)]"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-7">
            <div className="mb-6 flex items-center gap-3">
              <Lightbulb size={24} className="text-yellow-400" />
              <h3 className="text-xl font-semibold text-[var(--primary-text)]">Interests</h3>
            </div>

            <div className="space-y-4">
              {interests.map((interest, index) => {
                const Icon = interestIcons[index] ?? Code2;

                return (
                  <div
                    key={interest}
                    className="flex items-center gap-3 text-sm text-[var(--secondary-text)]"
                  >
                    <Icon size={18} className="shrink-0 text-yellow-400" />
                    <span>{interest}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
