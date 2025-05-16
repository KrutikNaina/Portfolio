import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants";

const Footer = () => {
  return (
    <footer>
      {/* Bottom Row */}
      <br/><br/>
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-700 pt-6">
        <p className="text-white text-base md:text-lg text-center">
          © 2025 Krutik Naina. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/krutik-naina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-[#0077b5] transform hover:scale-110 transition duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/krutiknaina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transform hover:scale-110 transition duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:krutiknaina29@gmail.com"
            className="text-neutral-300 hover:text-red-400 transform hover:scale-110 transition duration-300"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
      <br/>
    </footer>
  );
};

export default Footer;
