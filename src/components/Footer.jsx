import React from "react";
import { Github, Linkedin, Mail, Shield, Terminal, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-white/10 relative z-20 select-none">
      {/* Top Footer Marker */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-case-textMuted">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-8 h-8 rounded bg-case-redDark/20 border border-case-red/40 flex items-center justify-center text-case-redBright font-dossier text-lg font-black">
            KN
          </div>
          <div>
            <div className="text-white font-bold tracking-wider uppercase">
              CASE ARCHIVE // KRUTIK NAINA
            </div>
            <div className="text-[10px] text-neutral-500">
              © 2025 • FULL-STACK ARCHITECT & SYSTEM FORENSICS
            </div>
          </div>
        </div>

        {/* Center Forensic Note */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] text-neutral-400 bg-white/5 border border-white/10 px-3 py-1 rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>CHAIN OF CUSTODY: 100% VERIFIED</span>
        </div>

        {/* Right Social Action Links & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/krutiknaina"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-white/5 border border-white/10 text-neutral-300 hover:text-case-redBright hover:border-case-red/40 hover:bg-case-redDark/20 transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/krutiknaina"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded bg-white/5 border border-white/10 text-neutral-300 hover:text-case-redBright hover:border-case-red/40 hover:bg-case-redDark/20 transition-all"
            title="GitHub Repository"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:krutiknaina29@gmail.com"
            className="p-2 rounded bg-white/5 border border-white/10 text-neutral-300 hover:text-case-redBright hover:border-case-red/40 hover:bg-case-redDark/20 transition-all"
            title="Email Dispatch"
          >
            <Mail size={16} />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded bg-case-red text-white hover:bg-case-redBright transition-all ml-2"
            title="Return to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

