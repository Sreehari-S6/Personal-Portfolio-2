
import type { PersonalInfo } from "../types/portfolio";

const baseUrl = import.meta.env.BASE_URL;

export const personalInfo: PersonalInfo = {
  name: "Sreehari S",
  title: "Full Stack Developer",
  shortBio:
    "BCA graduate interested in building practical web applications across frontend and backend technologies.",
  about:
    "I am a BCA graduate with a foundation in web application development, programming, frontend and backend technologies. I enjoy exploring new tools, solving problems, and building practical web solutions. I am looking for opportunities to apply my skills, gain industry experience, and continue growing as a developer.",
  location: "Vaikom, Kottayam, Kerala, India",
  email: "sreeharisajeev2006@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/sreehari-s06",
  githubUrl: "https://github.com/Sreehari-S6",

  profileImage: `${baseUrl}images/profile.jpg`,
  resumeFile: `${baseUrl}resume.pdf`,
};
