import { Github, ExternalLink } from "lucide-react";
import { Helmet } from 'react-helmet';

const projects = [
  {
    name: "VedAI - Spiritual AI Chatbot (MERN Version)",
    // github: "https://github.com/KrutikNaina/VedAI-MERN",
    live: "https://vedai-mern.krutiknaina.com/",
    date: "Oct 2024 - Present",
    description:
      "The MERN version of VedAI with real-time chat, MongoDB storage, JWT authentication, and Gemini API integration. Includes spiritual insights, Gita shloka answers, Choghadiya, and future prediction modules.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Gemini API", "Tailwind"],
  },

  // ⭐ NEW PROJECT 1: SkillHub
  {
    name: "SkillHub - Digital Skill Portfolio Platform",
    github: "https://github.com/KrutikNaina/SkillHub",
    live: "https://skillhub.krutiknaina.com/",
    date: "Jun 2024 - Present",
    description:
      "A Skill Portfolio & Growth Tracker allowing users to showcase skills, track progress, create repositories, log milestones, and collaborate with peers.",
    technologies: ["React", "Tailwind", "Firebase", "Node.js", "MongoDB"],
  },

  // ⭐ NEW PROJECT 2: Scanventory (MERN Stack)
  {
    name: "Scanventory - QR Based Inventory System (MERN)",
    github: "https://github.com/KrutikNaina/Smart_Inventory_Management",
    live: "https://smart-inventory-one.vercel.app/",
    date: "Jul 2024 - Aug 2024",
    description:
      "A QR-powered smart inventory management system that lets businesses scan, track, and update item stock in real-time with an admin dashboard.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "QR Code", "JWT"],
  },
];

const ProjectSection = () => {
  return (
    <div className="mt-20 px-4">
      <Helmet>
        <title>Krutik Naina | Full-Stack Developer</title>
        <meta name="description" content="Krutik Naina's portfolio showcasing full-stack development and AI projects." />
      </Helmet>

      <h2 id="projects" className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-12 scroll-mt-20">
        My{" "}
        <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text">
          Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-[0_0_30px_#00ffff30] hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="text-sm text-gray-400">{project.date}</p>
            </div>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="border border-white/20 text-sm text-white px-3 py-1 rounded-full bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#00ffff] transition"
                  title="GitHub"
                >
                  <Github size={22} />
                </a>
              )}


              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9900ff] transition"
                title="Live Demo"
              >
                <ExternalLink size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
