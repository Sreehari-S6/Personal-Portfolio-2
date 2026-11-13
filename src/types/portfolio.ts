export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  about: string;
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  profileImage: string;
  resumeFile: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  qualification: string;
  institution: string;
  location: string;
  period: string;
  result?: string;
  grade?: string;
  stream?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  statusNote?: string;
}

export interface Achievement {
  title: string;
  detail: string;
  period?: string;
}
