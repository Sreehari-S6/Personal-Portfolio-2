
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
   { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wider text-white"
        >
          SREEHARI<span className="text-yellow-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-yellow-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-yellow-300 md:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="text-white md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-yellow-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-5 py-3 font-semibold text-black"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
