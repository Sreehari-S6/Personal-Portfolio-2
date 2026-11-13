
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/personal";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050505] px-6 pt-28 pb-16 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div className="order-2 md:order-1">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-yellow-400 sm:text-3xl">
            {personalInfo.title}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
            {personalInfo.shortBio}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href={personalInfo.resumeFile}
              download
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              Download CV
              <ArrowDown size={18} />
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-6 text-sm text-gray-400">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-yellow-400"
            >
              GitHub ↗
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-yellow-400"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>

        {/* Right Profile Image */}
        <div className="order-1 flex justify-center md:order-2">

          <div className="relative w-64 sm:w-80 lg:w-96">

            <div className="absolute -inset-3 rounded-3xl border border-yellow-400/30 rotate-6"></div>

            <img
              src={personalInfo.profileImage}
              alt="Portrait of Sreehari"
              className="relative aspect-[3/4] w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
