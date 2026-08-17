import React, { useState, useEffect } from "react";
import { Menu, X, Send, ShieldAlert, Fingerprint } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "SKILLS", href: "#skills", id: "skills" },
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "EDUCATION", href: "#education", id: "education" },
    { label: "ACHIEVEMENTS", href: "#achievements", id: "achievements" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = navLinks
        .map((link) => ({
          label: link.label,
          element: document.getElementById(link.id),
        }))
        .filter((item) => item.element !== null);

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { label, element } = sectionElements[i];
        if (element.offsetTop <= scrollPosition) {
          setActiveTab(label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when screen resizes above xl breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-case-black/90 backdrop-blur-md border-b border-white/5 transition-all">
      
      {/* Cinematic Top Laser Scroll Progress Bar */}
      <motion.div
        style={{ scaleX, originX: 0 }}
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-case-red via-case-redBright to-case-yellow shadow-[0_0_12px_#ef4444] z-50 will-change-transform"
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-12">
        
        {/* Left Branding: Stencil "KN" + Name & Title */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group select-none min-w-0">
          <span className="text-2xl sm:text-3xl md:text-4xl font-dossier font-black tracking-tighter text-case-redBright drop-shadow-[0_0_8px_rgba(239,68,68,0.4)] shrink-0">
            KN
          </span>
          <div className="flex flex-col text-left min-w-0">
            <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-widest font-mono leading-tight truncate">
              KRUTIK NAINA
            </span>
            <span className="text-[9px] sm:text-[10px] sm:text-[11px] font-semibold text-case-red tracking-wider font-mono">
              FULL-STACK ARCHITECT
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation — only visible xl+ */}
        <nav className="hidden xl:flex items-center gap-6 lg:gap-8 font-mono text-xs sm:text-sm tracking-widest">
          {navLinks.map((link) => {
            const isActive = activeTab === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors uppercase font-medium ${
                  isActive
                    ? "text-case-redBright font-bold"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute -bottom-1 left-0 right-0 flex flex-col items-center"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  >
                    <div className="w-full h-[1px] bg-case-red" />
                    <div className="w-1.5 h-1.5 rounded-full bg-case-redBright shadow-[0_0_6px_#ef4444] -mt-[3px]" />
                  </motion.div>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA — desktop only */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded border border-case-red/60 text-case-redBright hover:bg-case-red/10 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-[0_0_12px_rgba(239,68,68,0.15)] group"
          >
            <span>DISPATCH REPORT</span>
            <Send size={13} className="text-case-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle
            Touch target: min 44×44px via padding + icon size */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2.5 text-neutral-300 hover:text-white rounded border border-white/10 focus:outline-none focus:ring-1 focus:ring-case-red/40 transition-colors"
          aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Drawer Dropdown Menu
          max-h: prevents overflow beyond viewport; overflow-y for long lists */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden border-t border-white/10 bg-case-charcoal/98 backdrop-blur-md rounded-b-xl px-4 font-mono text-xs overflow-hidden"
            style={{ maxHeight: "calc(100dvh - 60px)" }}
          >
            <div className="flex flex-col py-2 overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-3 px-3 rounded flex items-center justify-between uppercase tracking-wider min-h-[44px] transition-colors ${
                    activeTab === link.label
                      ? "text-case-redBright bg-case-redDark/20 font-bold border-l-2 border-case-redBright"
                      : "text-neutral-300 hover:text-white hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  <span>{link.label}</span>
                  {activeTab === link.label && (
                    <span className="text-[10px] text-case-red">●</span>
                  )}
                </a>
              ))}

              {/* Mobile CTA Button */}
              <div className="py-3 border-t border-white/10 mt-1">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 min-h-[44px] rounded border border-case-red/60 text-case-red font-bold uppercase tracking-wider bg-case-redDark/10 hover:bg-case-red/20 active:bg-case-red/30 transition-colors"
                >
                  <span>DISPATCH REPORT</span>
                  <Send size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
