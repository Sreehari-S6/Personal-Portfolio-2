
import {
  SiReact,
  SiPython,
  SiDjango,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaCode, FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import type { SkillItem } from "../data/skills";

interface SkillCardProps {
  skill: SkillItem;
}

const skillIcons: Record<string, IconType> = {
  react: SiReact,
  python: SiPython,
  django: SiDjango,
  php: SiPhp,
  javascript: SiJavascript,
  typescript: SiTypescript,
  mysql: SiMysql,
  node: SiNodedotjs,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: FaCss3Alt,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  api: FaCode,
};

function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#101114]/90 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-[#141519] hover:shadow-xl hover:shadow-yellow-400/[0.04]">
      {/* Logo and Skill Icons */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 group-hover:border-yellow-400/30 group-hover:bg-yellow-400/5">
        {skill.icons.map((iconName) => {
          const SkillIcon = skillIcons[iconName] || FaCode;

          return (
            <SkillIcon
              key={iconName}
              size={skill.icons.length > 1 ? 20 : 25}
              className="text-gray-400 transition-colors duration-300 group-hover:text-yellow-400"
            />
          );
        })}
      </div>

      {/* Skill Name */}
      <h3 className="mb-3 text-lg font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="mt-auto text-sm leading-6 text-gray-400">
        {skill.description}
      </p>

      {/* Decorative Bottom Line */}
      <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.05]">
        <div className="h-full w-0 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-full" />
      </div>
    </article>
  );
}

export default SkillCard;
