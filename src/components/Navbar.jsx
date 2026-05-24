import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 mx-auto z-50 backdrop-blur-lg bg-white/10 border border-white/30 rounded-full px-6 md:px-10 py-3 shadow-lg w-[90%] max-w-4xl transition-all duration-300">
        <nav className="flex items-center justify-between md:justify-center text-white font-semibold">
          {/* Logo / Brand Name - only visible on mobile */}
          <div className="md:hidden flex items-center">
            <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text font-bold tracking-wider text-base">
              Krutik Naina
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm md:text-base">
            <a href="/" className="hover:text-[#00ffff] transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-[#00ffff] transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-[#00ffff] transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-[#00ffff] transition-colors duration-300">Projects</a>
            <a href="#education" className="hover:text-[#00ffff] transition-colors duration-300">Education</a>
            <a href="#achievements" className="hover:text-[#00ffff] transition-colors duration-300">Achievements</a>
            <a href="#contact" className="hover:text-[#00ffff] transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#00ffff] transition-colors focus:outline-none flex items-center justify-center p-1 rounded-lg hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-24 left-[5%] right-[5%] z-40 backdrop-blur-xl bg-[#060713]/95 border border-white/10 rounded-3xl p-6 shadow-2xl md:hidden max-w-4xl mx-auto"
          >
            <div className="flex flex-col gap-3 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-300 hover:text-[#00ffff] active:text-[#00ffff] text-base font-semibold py-2.5 border-b border-white/5 last:border-b-0 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
