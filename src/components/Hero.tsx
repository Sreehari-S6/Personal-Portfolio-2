
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/personal";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-20 items-center bg-[#050505] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">

        {/* Left Content */}
        <div className="order-2 text-center md:order-1 md:text-left">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400 sm:text-sm">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            {personalInfo.name}
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-yellow-400 sm:text-2xl lg:text-3xl">
            {personalInfo.title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:mx-0">
            {personalInfo.shortBio}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start">

            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 sm:px-6 sm:text-base"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href={personalInfo.resumeFile}
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400 sm:px-6 sm:text-base"
            >
              Download CV
              <ArrowDown size={18} />
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-9 flex justify-center gap-7 text-sm text-gray-400 md:justify-start">

            {personalInfo.githubUrl && (
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
              >
                GitHub ↗
              </a>
            )}

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

        {/* Right Profile Image */}
        <div className="order-1 flex justify-center md:order-2">

          <div className="relative w-56 sm:w-72 md:w-64 lg:w-80 xl:w-96">

            {/* Decorative Border */}
            <div className="absolute -inset-2 rotate-6 rounded-3xl border border-yellow-400/30 sm:-inset-3"></div>

            {/* Profile Photo */}
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
