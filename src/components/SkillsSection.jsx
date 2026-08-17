import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  Cloud,
  Terminal,
  FileCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";
import StatusStamp from "./common/StatusStamp";
import EvidenceLabel from "./common/EvidenceLabel";

/**
 * 4 Evidence Tool Categories with exact specs and actual icons
 */
const skillCategories = [
  {
    id: "CAT-01",
    sectionCode: "SEC // 01",
    title: "FRONTEND & LANGUAGES",
    subtitle: "Client-Side Interface & Presentation Layer",
    icon: <Layers size={16} className="text-case-redBright" />,
    badge: "5 ARTIFACTS",
    gridClass: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4",
    skills: [
      {
        name: "JavaScript",
        toolCode: "JS-01",
        role: "Core Logic / ES6+",
        icon: "/icons/js.png",
        status: "CALIBRATED",
      },
      {
        name: "React.js",
        toolCode: "RCT-02",
        role: "Component Architecture",
        icon: "/icons/react.png",
        status: "CALIBRATED",
      },
      {
        name: "Tailwind CSS",
        toolCode: "TWD-03",
        role: "Design Systems & UI",
        icon: "/icons/tailwind.png",
        status: "CALIBRATED",
      },
      {
        name: "HTML",
        toolCode: "HTM-04",
        role: "Semantic Web Structure",
        icon: "/icons/html.png",
        status: "CALIBRATED",
      },
      {
        name: "CSS",
        toolCode: "CSS-05",
        role: "Styling & Responsive Layout",
        icon: "/icons/css.png",
        status: "CALIBRATED",
      },
    ],
  },
  {
    id: "CAT-02",
    sectionCode: "SEC // 02",
    title: "BACKEND & SYSTEMS",
    subtitle: "Server Architectures, Microservices & Core Logic",
    icon: <Cpu size={16} className="text-case-redBright" />,
    badge: "3 ARTIFACTS",
    gridClass: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4",
    skills: [
      {
        name: "Node.js",
        toolCode: "NOD-06",
        role: "High-Throughput Runtime",
        icon: "/icons/node.png",
        status: "CALIBRATED",
      },
      {
        name: "Express.js",
        toolCode: "EXP-07",
        role: "RESTful Server APIs",
        icon: "/icons/express.png",
        status: "CALIBRATED",
      },
      {
        name: "Python",
        toolCode: "PYT-08",
        role: "Scripting, AI & Automation",
        icon: "/icons/python.svg",
        status: "CALIBRATED",
      },
    ],
  },
  {
    id: "CAT-03",
    sectionCode: "SEC // 03",
    title: "DATABASES & STORAGE",
    subtitle: "Persistence Engines, Caching & Relational Schemas",
    icon: <Database size={16} className="text-case-redBright" />,
    badge: "2 ARTIFACTS",
    gridClass: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl",
    skills: [
      {
        name: "MongoDB",
        toolCode: "MDB-09",
        role: "NoSQL & Document Modeling",
        icon: "/icons/MongoDB.png",
        status: "CALIBRATED",
      },
      {
        name: "PostgreSQL",
        toolCode: "PG-10",
        role: "Relational ACID Transactions",
        icon: "/icons/postgresql.png",
        status: "CALIBRATED",
      },
    ],
  },
  {
    id: "CAT-04",
    sectionCode: "SEC // 04",
    title: "DEVOPS & INFRASTRUCTURE",
    subtitle: "Cloud Distribution, Containers & Version Integrity",
    icon: <Cloud size={16} className="text-case-redBright" />,
    badge: "6 ARTIFACTS",
    gridClass: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4",
    skills: [
      {
        name: "Docker",
        toolCode: "DCK-11",
        role: "Container Virtualization",
        icon: "/icons/docker-mark-blue.png",
        status: "CALIBRATED",
      },
      {
        name: "AWS",
        toolCode: "AWS-12",
        role: "Cloud Compute & SES Routing",
        icon: "/icons/AWS.png",
        status: "CALIBRATED",
      },
      {
        name: "Azure",
        toolCode: "AZR-13",
        role: "Enterprise Cloud Infrastructure",
        icon: "/icons/Azure.png",
        status: "CALIBRATED",
      },
      {
        name: "DigitalOcean",
        toolCode: "DOC-14",
        role: "Droplets & VPS Deployments",
        icon: "/icons/DigitalOcean.png",
        status: "CALIBRATED",
      },
      {
        name: "Git",
        toolCode: "GIT-15",
        role: "Distributed Version Control",
        icon: "/icons/git.png",
        status: "CALIBRATED",
      },
      {
        name: "GitHub",
        toolCode: "GHB-16",
        role: "CI/CD & Repository Management",
        icon: "/icons/github.png",
        status: "CALIBRATED",
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative mt-24 mb-20 scroll-mt-24 select-none">
      <Helmet>
        <title>SKILLS & ABILITIES // EVIDENCE ARSENAL: Krutik Naina</title>
        <meta
          name="description"
          content="Police evidence and tools-of-the-trade board detailing Krutik Naina's technical proficiencies across Frontend, Backend, Databases, and DevOps infrastructure."
        />
        <meta
          name="keywords"
          content="Krutik Naina, Skills, Abilities, Evidence Board, React, Node.js, Python, MongoDB, PostgreSQL, AWS, Docker"
        />
      </Helmet>

      {/* =========================================================================
          SECTION HEADER: Case Classification & Stencil Heading
          ========================================================================= */}
      <div className="relative mb-14 text-center">
        {/* Classification Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-2"
        >
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-case-redBright uppercase flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-case-redBright animate-pulse" />
            CASE FILE // EVIDENCE #03
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-case-red/40" />
          <span className="font-mono text-[10px] sm:text-xs text-case-textMuted tracking-widest uppercase">
            FORENSIC ARSENAL
          </span>
        </motion.div>

        {/* Heading: SKILLS & ABILITIES with Distressed Stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-dossier tracking-wider text-case-text uppercase leading-none">
            SKILLS &{" "}
            <span className="text-case-redBright drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              ABILITIES
            </span>
          </h2>
          <div className="sm:ml-2">
            <StatusStamp
              text="VERIFIED"
              variant="cyan"
              size="md"
              rotate={4}
            />
          </div>
        </motion.div>

        {/* Subtitle: TOOLS OF THE TRADE. BUILT THROUGH EXPERIENCE. */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 flex flex-col items-center justify-center"
        >
          <div className="inline-block border-y border-case-red/30 py-1.5 px-3 sm:px-6 bg-case-redDark/10 backdrop-blur-sm">
            <p className="font-mono font-black text-[11px] sm:text-sm md:text-base lg:text-lg text-case-redBright tracking-[0.1em] sm:tracking-[0.2em] uppercase">
              TOOLS OF THE TRADE. BUILT THROUGH EXPERIENCE.
            </p>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-mono text-case-textMuted max-w-xl mx-auto">
            POLICE EVIDENCE LOCKER • OPERATIONAL STACK • BATTLE-TESTED TECHNOLOGIES
          </p>
        </motion.div>

        {/* Red Investigation Ruler */}
        <div className="flex items-center justify-center gap-2 mt-5 max-w-lg mx-auto">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-case-red to-case-redBright" />
          <span className="font-mono text-[10px] text-case-textMuted tracking-widest uppercase">
            CHAIN OF CUSTODY // VERIFIED 16 WEAPONS
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-case-red to-case-redBright" />
        </div>
      </div>

      {/* =========================================================================
          TOOLS OF THE TRADE BOARD: Category Drawers & Evidence Plates
          ========================================================================= */}
      <div className="max-w-6xl mx-auto space-y-10">
        {skillCategories.map((category, catIdx) => (
          <div key={category.id} className="relative">
            
            {/* Category Tactical Header Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: catIdx * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-between gap-3 pb-2.5 mb-4 border-b border-[#2b303c] relative"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-sm bg-case-redDark/20 border border-case-red/40 flex items-center justify-center">
                  {category.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-case-red tracking-widest uppercase">
                      {category.sectionCode}
                    </span>
                    <h3 className="font-dossier text-xl sm:text-2xl font-bold tracking-wider text-white uppercase">
                      {category.title}
                    </h3>
                  </div>
                  <p className="font-mono text-[11px] text-case-textMuted hidden sm:block">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <EvidenceLabel code={category.badge} variant="dark" />
              </div>
            </motion.div>

            {/* Evidence Plates Grid (Not huge, compact, readable) */}
            <div className={category.gridClass}>
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                  className="group relative bg-[#0e1015]/95 border border-[#2b303c] hover:border-case-red/60 rounded-sm p-3 sm:p-3.5 shadow-[0_6px_18px_rgba(0,0,0,0.7)] hover:shadow-[0_0_15px_rgba(185,28,28,0.2)] transition-all duration-300 flex flex-col justify-between"
                >
                  {/* 4 Corner Screws / Rivets */}
                  <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                  <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                  <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                  <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />

                  {/* Top Plate Bar: Tool Code & Status LED */}
                  <div className="flex items-center justify-between gap-1 mb-2.5 pb-1.5 border-b border-white/5 font-mono text-[9px]">
                    <span className="text-case-textMuted font-bold tracking-wider group-hover:text-case-redBright transition-colors">
                      {skill.toolCode}
                    </span>
                    <div className="flex items-center gap-1 text-[8px] text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 group-hover:bg-case-redBright transition-colors shadow-[0_0_4px_currentColor]" />
                      <span className="hidden sm:inline uppercase tracking-widest">{skill.status}</span>
                    </div>
                  </div>

                  {/* Center: Actual Logo + Name */}
                  <div className="flex flex-col items-center justify-center text-center my-1.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 mb-2 flex items-center justify-center relative p-1.5 rounded bg-white/5 border border-white/5 group-hover:border-case-red/30 group-hover:bg-case-redDark/10 transition-all duration-300">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} Evidence Logo`}
                        width="44"
                        height="44"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h4 className="font-mono text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-case-redBright transition-colors leading-tight">
                      {skill.name}
                    </h4>
                  </div>

                  {/* Bottom Plate Footnote: Role / Specialty */}
                  <div className="mt-2 pt-1.5 border-t border-white/5 text-center">
                    <p className="font-mono text-[9.5px] sm:text-[10px] text-neutral-400 group-hover:text-neutral-300 transition-colors leading-tight line-clamp-1">
                      {skill.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* =========================================================================
          BOTTOM FORENSIC SUMMARY BANNER
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-12 bg-case-charcoal/90 border border-case-slate rounded-sm p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck size={22} className="text-case-redBright shrink-0" />
          <div>
            <div className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
              100% OPERATIONAL PROFICIENCY ACROSS THE MODERN SOFTWARE STACK
            </div>
            <div className="font-mono text-[11px] text-neutral-400">
              Continuously integrating modern tools, frameworks, and architecture patterns.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-case-redBright font-bold uppercase border border-case-redBright/40 px-3 py-1.5 rounded bg-case-redDark/20 tracking-widest shrink-0">
          <Lock size={12} />
          <span>ARSENAL SECURED</span>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;

