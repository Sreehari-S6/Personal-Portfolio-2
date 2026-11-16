import { GraduationCap, MapPin, Award } from "lucide-react";
import { education } from "../data/education";

function Education() {
  return (
    <section id="education" className="bg-[#111111] px-6 py-24 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            My Academic Background
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Education <span className="text-yellow-400">Journey</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            My educational journey and academic achievements.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative ml-3 border-l border-yellow-400/30 pl-8 md:ml-5 md:pl-12">
          {education.map((item, index) => (
            <div
              key={item.qualification}
              className={`relative ${index !== education.length - 1 ? "mb-10" : ""}`}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#111111] bg-yellow-400 md:-left-[57px]"></div>

              {/* Education Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-yellow-400/40 md:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <GraduationCap size={23} className="text-yellow-400" />

                      <span className="text-sm font-medium text-yellow-400">{item.period}</span>
                    </div>

                    <h3 className="text-xl font-semibold md:text-2xl">{item.qualification}</h3>

                    <p className="mt-2 text-gray-300">{item.institution}</p>

                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin size={15} />
                      {item.location}
                    </p>
                  </div>

                  {item.result && (
                    <div className="flex w-fit items-center gap-2 rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 text-yellow-400">
                      <Award size={19} />
                      <span className="text-sm font-semibold">{item.result}</span>
                    </div>
                  )}
                </div>

                {/* Additional Details */}
                {(item.grade || item.stream) && (
                  <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                    {item.grade && (
                      <span className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                        Grade: {item.grade}
                      </span>
                    )}

                    {item.stream && (
                      <span className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                        Stream: {item.stream}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
