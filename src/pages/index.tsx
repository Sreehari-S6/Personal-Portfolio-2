import React, { useState } from 'react';

// ==========================================
// 1. TYPES (Strictly avoiding 'any')
// ==========================================
interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  liveUrl: string;
}

interface NavItem {
  label: string;
  href: string;
}

// ==========================================
// 2. MOCK DATA
// ==========================================
const NAV_ITEMS: NavItem[] = [a
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const TECH_STACK: string[] = ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Jest', 'React Router'];

const FEATURED_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A full-stack admin panel for managing inventory and orders with real-time analytics.',
    techStack: ['React', 'TypeScript', 'MUI'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A drag-and-drop kanban board application for personal productivity.',
    techStack: ['React', 'Vite', 'Tailwind'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '3',
    title: 'Weather Forecaster',
    description: 'A clean weather app consuming a third-party API to display 5-day forecasts.',
    techStack: ['React', 'Axios', 'CSS'],
    repoUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

// ==========================================
// 3. REUSABLE UI COMPONENTS
// ==========================================

const Button = ({ 
  children, 
  variant = 'primary', 
  href 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary'; 
  href: string;
}) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-colors duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-2 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600",
  };

  return (
    <a href={href} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </a>
  );
};

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full border border-slate-700">
    {text}
  </span>
);

// ==========================================
// 4. SECTION COMPONENTS
// ==========================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              &lt;Dev /&gt;
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
        Hi, I'm <span className="text-blue-500">Alex Doe</span>.
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
        Full Stack Developer & UI Enthusiast
      </h2>
      <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0">
        I build accessible, performant, and responsive web applications using modern technologies like React, TypeScript, and Tailwind CSS.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Button href="/projects" variant="primary">View Projects</Button>
        <Button href="/contact" variant="secondary">Contact Me</Button>
      </div>
    </div>
    
    {/* Abstract Avatar Placeholder */}
    <div className="flex-1 flex justify-center">
      <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 absolute -z-10"></div>
      <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center shadow-2xl relative overflow-hidden">
        <span className="text-slate-500 font-mono text-sm">&lt;Your Photo Here /&gt;</span>
      </div>
    </div>
  </section>
);

const TechStackSection = () => (
  <section className="py-12 border-y border-slate-800 bg-slate-900/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
        Technologies I work with
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {TECH_STACK.map((tech) => (
          <Badge key={tech} text={tech} />
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-500 transition-colors group">
    {/* Thumbnail Placeholder */}
    <div className="h-48 bg-slate-700 w-full flex items-center justify-center group-hover:bg-slate-600 transition-colors">
      <span className="text-slate-500 font-mono text-sm">Project Screenshot</span>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <a href={project.repoUrl} className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
          GitHub Repo &rarr;
        </a>
        <a href={project.liveUrl} className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
          Live Demo &rarr;
        </a>
      </div>
    </div>
  </div>
);

const FeaturedProjects = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <div className="flex justify-between items-end mb-10">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
        <p className="text-slate-400">Some of the things I've built recently.</p>
      </div>
      <a href="/projects" className="hidden sm:block text-blue-500 hover:text-blue-400 font-semibold transition-colors">
        View All &rarr;
      </a>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {FEATURED_PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    
    <div className="mt-8 text-center sm:hidden">
      <a href="/projects" className="text-blue-500 hover:text-blue-400 font-semibold transition-colors">
        View All Projects &rarr;
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-slate-800 py-8 mt-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Alex Doe. All rights reserved.
      </p>
      <div className="flex space-x-6">
        <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors text-sm">GitHub</a>
        <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors text-sm">LinkedIn</a>
        <a href="mailto:hello@example.com" className="text-slate-400 hover:text-white transition-colors text-sm">Email</a>
      </div>
    </div>
  </footer>
);



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechStackSection />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}