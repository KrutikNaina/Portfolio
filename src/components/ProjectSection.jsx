import { Github, ExternalLink, Sparkles, Terminal, Cpu, Database, Layers } from "lucide-react";
import { Helmet } from 'react-helmet';

const projects = [
  {
    name: "MailCraft — Transactional & Campaign Email Infrastructure",
    type: "SaaS Infrastructure",
    live: "https://mailcraft.tech",
    date: "Dec 2024 - Present",
    description: "A high-throughput transactional and campaign email infrastructure platform. Orchestrates high-volume email routing with AWS SES and Azure Communication Services, leveraging a distributed BullMQ task worker queue and Redis throttling to manage high delivery throughput. Incorporates live analytics, custom DNS verified domains (DKIM/SPF), real-time bounce/complaint webhook ingestion, and advanced suppression lists.",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "BullMQ", "AWS SES", "Azure email", "JWT", "Tailwind CSS", "REST API"],
    metadata: ["Live SaaS", "Queue Architecture", "Rate Limiting", "Analytics Ingestion"],
    featured: true
  },
  {
    name: "VedAI — Spiritual AI Guidance Platform",
    type: "AI Platform",
    live: "https://vedai-mern.krutiknaina.com/",
    date: "Oct 2024 - Present",
    description: "A low-latency spiritual AI query engine and predictive system. Implements Retrieval-Augmented Generation (RAG) using the Gemini Pro API and customized Vedic embeddings to provide contextually-grounded replies. Utilizes a secure, stateless JWT authentication flow and optimized MongoDB indexing to handle real-time chat histories, astrologic forecasting engines, and personalized astrology telemetry.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Gemini API", "Tailwind CSS"],
    metadata: ["AI-Powered", "Stateless Auth", "Vedic Knowledge Base"]
  },
  {
    name: "SkillHub — Developer Portfolio & Milestone Engine",
    type: "Developer Tool",
    github: "https://github.com/KrutikNaina/SkillHub",
    live: "https://skillhub.krutiknaina.com/",
    date: "Jun 2024 - Present",
    description: "A gamified skill validation platform and developer growth engine. Integrates GitHub API pipelines for automatic repository and commit ingestion, enabling engineers to log structured learning milestones. Built on a real-time reactive sync layer with Firebase and aggregation services on MongoDB for peer-to-peer code review and developer validation dashboard metrics.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"],
    metadata: ["Real-time Sync", "Gamified Milestones", "OAuth Pipeline"]
  },
  {
    name: "Scanventory — QR-Powered Asset Tracking Infrastructure",
    type: "MERN Stack",
    github: "https://github.com/KrutikNaina/Smart_Inventory_Management",
    live: "https://smart-inventory-one.vercel.app/",
    date: "Jul 2024 - Aug 2024",
    description: "An enterprise-grade, mobile-optimized QR asset-tracking and warehouse inventory system. Employs dynamic cryptographic QR-code generation, secure session-based role authorization, and real-time stock levels sync. Features an administrative telemetry dashboard for audit logs, batch transaction imports, and multi-location logistics tracking.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "QR Code", "JWT"],
    metadata: ["Cryptographic QR", "Audit Logging", "Real-Time Telemetry"]
  }
];

const getProjectIcon = (type) => {
  switch (type) {
    case "SaaS Infrastructure":
      return <Layers className="text-[#00ffff]" size={16} />;
    case "AI Platform":
      return <Cpu className="text-[#9900ff]" size={16} />;
    case "Developer Tool":
      return <Terminal className="text-[#00ffff]" size={16} />;
    case "MERN Stack":
      return <Database className="text-[#9900ff]" size={16} />;
    default:
      return <Terminal className="text-neutral-400" size={16} />;
  }
};

const ProjectSection = () => {
  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <div className="relative mt-20 px-4 md:px-6">
      <Helmet>
        <title>Krutik Naina | Full-Stack Developer Showcase</title>
        <meta name="description" content="Explore production-grade full-stack developer portfolio and SaaS infrastructure projects designed by Krutik Naina." />
      </Helmet>

      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00ffff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#9900ff]/5 rounded-full blur-[130px] pointer-events-none" />

      <h2 id="projects" className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-12 scroll-mt-20 relative z-10">
        My{" "}
        <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text font-bold">
          Projects
        </span>
      </h2>

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        {/* Flagship Featured Project: MailCraft */}
        {featuredProject && (
          <div className="relative group overflow-hidden rounded-3xl p-[1px] bg-gradient-to-r from-[#00ffff]/20 via-[#9900ff]/20 to-[#00ffff]/20 hover:from-[#00ffff]/50 hover:via-[#9900ff]/50 hover:to-[#00ffff]/50 transition-all duration-500 shadow-[0_0_30px_rgba(0,255,255,0.05)] hover:shadow-[0_0_45px_rgba(0,255,255,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffff]/5 via-transparent to-[#9900ff]/5 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative backdrop-blur-xl bg-[#060713]/90 rounded-[23px] p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-stretch">
              
              {/* Left Column: Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Badge & Category */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#00ffff]/20 to-[#9900ff]/20 border border-[#00ffff]/30 text-[#00ffff] text-xs font-semibold uppercase tracking-wider">
                      <Sparkles size={12} className="animate-pulse" />
                      Featured Project
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium">
                      {getProjectIcon(featuredProject.type)}
                      {featuredProject.type}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono ml-auto lg:ml-0">{featuredProject.date}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-300 transition-colors">
                    {featuredProject.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Metadata Indicators */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.metadata.map((meta, i) => (
                      <span key={i} className="text-xs font-semibold text-neutral-400 bg-[#070a1e]/60 border border-neutral-800/80 px-2.5 py-1 rounded-md">
                        • {meta}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div>
                  <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Core Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs text-neutral-200 border border-white/10 px-3 py-1.5 rounded-full bg-white/5 hover:border-[#00ffff]/30 hover:bg-[#00ffff]/5 transition-all duration-300 hover:scale-105 hover:text-white cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Actions & Visual Representation */}
              <div className="w-full lg:w-72 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 items-start lg:items-stretch">
                <div className="hidden lg:block space-y-4">
                  <div className="p-4 rounded-2xl bg-[#070a1e]/50 border border-white/5 space-y-2">
                    <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Architecture</div>
                    <div className="text-xs text-neutral-500">AWS SES + Azure integrations combined with Redis queue processing yields 99.9% deliverability workflows.</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#070a1e]/50 border border-white/5 space-y-2">
                    <div className="text-xs text-[#00ffff] font-bold uppercase tracking-wider">Status</div>
                    <div className="text-xs text-neutral-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00ffff] animate-ping" />
                      Production Deployment
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row lg:flex-col gap-3 mt-auto pt-6">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/20 transition-all text-sm"
                    >
                      <Github size={18} />
                      <span>Explore Repository</span>
                    </a>
                  )}
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-black font-semibold hover:opacity-90 transition-all text-sm shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(153,0,255,0.4)]"
                  >
                    <span>Launch Infrastructure</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <div
              key={index}
              className="group/card relative overflow-hidden rounded-2xl p-[1px] bg-white/10 hover:bg-gradient-to-br hover:from-[#00ffff]/40 hover:to-[#9900ff]/40 transition-all duration-500 shadow-md hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#00ffff]/2 via-transparent to-[#9900ff]/2 opacity-20 group-hover/card:opacity-40 transition-opacity duration-500" />
              <div className="relative backdrop-blur-xl bg-[#060713]/90 rounded-[15px] p-6 flex flex-col h-full justify-between">
                
                <div>
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold">
                      {getProjectIcon(project.type)}
                      {project.type}
                    </span>
                    <p className="text-xs text-neutral-400 font-mono">{project.date}</p>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-[#00ffff] transition-colors">
                    {project.name}
                  </h3>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.metadata.map((meta, i) => (
                      <span key={i} className="text-[10px] text-neutral-400 bg-[#070a1e] border border-neutral-800 px-2 py-0.5 rounded">
                        {meta}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech & Links Footer */}
                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-neutral-400 border border-white/5 px-2 py-0.5 rounded-full bg-white/5 group-hover/card:border-[#00ffff]/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#00ffff] transition-colors font-medium"
                      >
                        <Github size={14} />
                        <span>Repository</span>
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#9900ff] transition-colors ml-auto font-medium"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectSection;
