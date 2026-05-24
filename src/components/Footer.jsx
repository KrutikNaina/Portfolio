import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Premium Gradient Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
        <p className="text-neutral-400 text-sm md:text-base text-center md:text-left font-medium">
          © 2025 Krutik Naina — Passionate about crafting high-performance digital experiences.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/krutiknaina"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-[#00ffff] hover:border-[#00ffff]/30 hover:bg-[#00ffff]/5 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/krutiknaina"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-[#9900ff] hover:border-[#9900ff]/30 hover:bg-[#9900ff]/5 hover:scale-110 hover:shadow-[0_0_15px_rgba(153,0,255,0.15)] transition-all duration-300"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:krutiknaina29@gmail.com"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-[#00ffff] hover:border-[#00ffff]/30 hover:bg-[#00ffff]/5 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-300"
            title="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
