import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Terminal,
  Cpu,
  Database,
  Cloud,
  BrainCircuit,
  Boxes,
  GraduationCap,
  Download,
  ShieldAlert,
  FileText,
  Pin,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Fingerprint as FingerprintIcon,
} from "lucide-react";
import { Helmet } from "react-helmet";
import avatarImg from "/icons/avtar.png";
import fingerprintImg from "../assets/fingerprint.png";
import StatusStamp from "./common/StatusStamp";
import EvidenceLabel from "./common/EvidenceLabel";
import RedString from "./common/RedString";

/**
 * 6 Core Investigation Report Evidence Points
 */
const investigationEvidence = [
  {
    exhibit: "EXHIBIT 01",
    tag: "CORE CAPABILITY",
    title: "Full-Stack Development",
    icon: <Layers size={18} className="text-case-redBright" />,
    summary:
      "Architecting end-to-end resilient applications using modern React ecosystems, Node.js, and Python. Seamlessly bridges responsive user interfaces with robust server architectures.",
    highlights: ["React.js", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    classification: "VERIFIED IN PROD",
  },
  {
    exhibit: "EXHIBIT 02",
    tag: "SERVER ARCHITECTURE",
    title: "Backend Systems",
    icon: <Database size={18} className="text-case-redBright" />,
    summary:
      "Engineering robust REST & GraphQL APIs, optimized database schemas in MongoDB & PostgreSQL, resilient auth mechanisms (JWT/OAuth), and low-latency microservices.",
    highlights: ["Express.js", "PostgreSQL", "MongoDB", "REST APIs", "JWT Security"],
    classification: "MISSION CRITICAL",
  },
  {
    exhibit: "EXHIBIT 03",
    tag: "CLOUD & DEVOPS",
    title: "Infrastructure & Systems",
    icon: <Cloud size={18} className="text-case-redBright" />,
    summary:
      "Deploying high-throughput distributed pipelines utilizing AWS SES, Azure Communications, BullMQ asynchronous worker pools, Redis caching, and Docker containerization.",
    highlights: ["AWS SES", "Azure Cloud", "Redis", "BullMQ Queues", "Docker"],
    classification: "SCALED TO 99.9%",
  },
  {
    exhibit: "EXHIBIT 04",
    tag: "INTELLIGENT SYSTEMS",
    title: "AI Integration & RAG",
    icon: <BrainCircuit size={18} className="text-case-redBright" />,
    summary:
      "Integrating cutting-edge LLMs (Gemini Pro) with customized Retrieval-Augmented Generation (RAG) vector pipelines, semantic search embeddings, and autonomous agent workflows.",
    highlights: ["Gemini Pro API", "RAG Pipelines", "Vector Search", "LLM Prompting"],
    classification: "HIGH PRECISION",
  },
  {
    exhibit: "EXHIBIT 05",
    tag: "VENTURE ENGINEERING",
    title: "Product Building & SaaS",
    icon: <Boxes size={18} className="text-case-redBright" />,
    summary:
      "Translating complex business requirements into monetizable SaaS platforms like MailCraft and VedAI, with integrated analytics telemetry, dynamic QR engines, and payment flows.",
    highlights: ["SaaS Architecture", "Analytics Pipelines", "Dynamic QR", "UX Strategy"],
    classification: "PRODUCTION LIVE",
  },
  {
    exhibit: "EXHIBIT 06",
    tag: "KNOWLEDGE INGESTION",
    title: "Continuous Learning",
    icon: <GraduationCap size={18} className="text-case-redBright" />,
    summary:
      "Pursuing Master of Computer Applications (MCA), actively contributing to open-source codebases, mastering advanced algorithmic challenges, and exploring emerging software paradigms.",
    highlights: ["MCA Candidate", "Open Source", "Hackathons", "Tech Exploration"],
    classification: "ACTIVE EVOLUTION",
  },
];

const Workflow = () => {
  return (
    <section id="about" className="relative mt-24 mb-20 scroll-mt-24 select-none">
      <Helmet>
        <title>ABOUT ME // CASE FILE #KN-2025: Krutik Naina</title>
        <meta
          name="description"
          content="Investigation case file and developer profile of Krutik Naina: Full-Stack development, backend systems, infrastructure, AI integration, and continuous learning."
        />
        <meta
          name="keywords"
          content="Krutik Naina, About Me, Case File, Full Stack Developer, Backend Systems, Infrastructure, AI Integration"
        />
      </Helmet>

      {/* =========================================================================
          SECTION HEADER: Case Taxonomy & Dossier Heading
          ========================================================================= */}
      <div className="relative mb-14 text-center">
        {/* Classification Top Tracker */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-2"
        >
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-case-redBright uppercase flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-case-redBright animate-pulse" />
            CASE FILE // DOSSIER #02
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-case-red/40" />
          <span className="font-mono text-[10px] sm:text-xs text-case-textMuted tracking-widest uppercase">
            SECURITY CLEARANCE: LEVEL 4
          </span>
        </motion.div>

        {/* Main Heading: ABOUT ME with Stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-dossier tracking-wider text-case-text uppercase leading-none">
            ABOUT{" "}
            <span className="text-case-redBright drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              ME
            </span>
          </h2>
          <div className="sm:ml-2">
            <StatusStamp
              text="CONFIDENTIAL"
              variant="red"
              size="md"
              rotate={-6}
            />
          </div>
        </motion.div>

        {/* Subtitle: BUILDING SOLUTIONS. NOT EXCUSES. */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 flex flex-col items-center justify-center"
        >
          <div className="inline-block border-y border-case-red/30 py-1.5 px-6 bg-case-redDark/10 backdrop-blur-sm">
            <p className="font-mono font-black text-sm sm:text-base md:text-lg text-case-redBright tracking-[0.2em] uppercase">
              BUILDING SOLUTIONS. NOT EXCUSES.
            </p>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-mono text-case-textMuted max-w-xl mx-auto">
            OFFICIAL DOSSIER • TECHNICAL EVIDENCE REPOSITORY • SYSTEM FORENSICS
          </p>
        </motion.div>

        {/* Red Investigation Ruler / Marker line */}
        <div className="flex items-center justify-center gap-2 mt-5 max-w-lg mx-auto">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-case-red to-case-redBright" />
          <span className="font-mono text-[10px] text-case-textMuted tracking-widest uppercase">
            EVIDENCE ARCHIVE // RECORD 2025
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-case-red to-case-redBright" />
        </div>
      </div>

      {/* =========================================================================
          MAIN INVESTIGATION CASE FILE GRID
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
        
        {/* =====================================================================
            LEFT COLUMN: DEVELOPER MUGSHOT / PROFILE EVIDENCE DOSSIER
            ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          {/* Subtle Background Red Fingerprint Glow on left side
              Mobile rule: hidden on mobile to prevent overflow; visible sm+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.25, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden sm:block absolute -top-10 -left-10 w-52 h-52 pointer-events-none mix-blend-screen z-0"
          >
            <img
              src={fingerprintImg}
              alt=""
              width="208"
              height="208"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain filter invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[320deg]"
            />
          </motion.div>

          {/* Aged Paper Dossier Container */}
          <motion.div
            initial={{ rotate: -2, y: 15 }}
            whileInView={{ rotate: -0.5, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            viewport={{ once: true }}
            className="relative bg-[#ebe3d1] text-[#23211c] rounded-sm p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)] border border-[#d4cbb3] z-10"
          >
            {/* Metal Paperclip at top-left */}
            <div
              className="absolute -top-4 left-8 w-4 h-12 border-[2.5px] border-[#6b7280] rounded-full shadow-[2px_3px_5px_rgba(0,0,0,0.6)] z-30 pointer-events-none bg-transparent"
              title="Official Fastener"
            />

            {/* Top Manila Folder Tab / File Tag */}
            <div className="flex items-center justify-between border-b-2 border-[#23211c]/20 pb-3 mb-4 font-mono">
              <div className="flex items-center gap-2">
                <EvidenceLabel code="DEV-FILE #01" variant="red" />
                <span className="text-xs font-bold tracking-wider text-[#23211c]/80 uppercase">
                  RECORD IDENTIFIER
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-case-redDark uppercase tracking-widest">
                <FingerprintIcon size={14} className="text-case-redDark" />
                <span>BIOMETRIC LOGGED</span>
              </div>
            </div>

            {/* DEVELOPER PROFILE Header Banner */}
            <div className="bg-[#1f232c] text-white px-3.5 py-1.5 rounded-sm mb-5 flex items-center justify-between shadow-sm">
              <span className="font-dossier text-base sm:text-lg tracking-[0.2em] text-[#ef4444] uppercase font-black">
                DEVELOPER PROFILE
              </span>
              <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                AUTH // LEVEL 5
              </span>
            </div>

            {/* Mugshot Photo Frame with Height Ruler */}
            <div className="relative bg-[#14161b] border-2 border-[#383d48] rounded-sm overflow-hidden flex items-center justify-center aspect-[4/4.8] shadow-inner mb-5">
              {/* Height Ruler Lines on the Left */}
              <div className="absolute left-0 top-0 bottom-0 w-12 z-20 flex flex-col justify-between py-6 px-1.5 font-mono text-[9px] text-[#9ca3af] border-r border-[#4b5563]/50 bg-black/40 pointer-events-none">
                <div className="border-b border-[#4b5563]/50 pb-0.5 flex justify-between">
                  <span>6'0"</span>
                </div>
                <div className="border-b border-[#4b5563]/50 pb-0.5 flex justify-between">
                  <span>5'8"</span>
                </div>
                <div className="border-b border-[#4b5563]/50 pb-0.5 flex justify-between">
                  <span>5'4"</span>
                </div>
                <div className="border-b border-[#4b5563]/50 pb-0.5 flex justify-between">
                  <span>5'0"</span>
                </div>
                <div className="border-b border-[#4b5563]/50 pb-0.5 flex justify-between">
                  <span>4'8"</span>
                </div>
                <div className="border-b border-[#4b5563]/50 pb-0.5 flex justify-between">
                  <span>4'0"</span>
                </div>
              </div>

              {/* Developer Portrait Image */}
              <img
                src={avatarImg}
                alt="Krutik Naina - Developer Profile Mugshot"
                width="400"
                height="480"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center filter contrast-125 brightness-95 grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Corner Evidence Watermark */}
              <div className="absolute top-3 right-3 z-30 pointer-events-none transform rotate-6">
                <div className="border-[2px] border-[#dc2626] text-[#dc2626] px-2.5 py-0.5 font-dossier font-bold text-sm tracking-[0.18em] uppercase shadow-sm bg-[#150a0a]/90">
                  IDENTIFIED
                </div>
              </div>

              {/* Black Booking Placard Held in Photo */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-[#121316]/95 border-2 border-[#3b414f] rounded px-3 py-2 text-center shadow-[0_10px_25px_rgba(0,0,0,0.9)] z-20">
                <div className="font-mono font-black text-xs sm:text-sm tracking-[0.2em] text-white uppercase leading-tight">
                  KRUTIK NAINA
                </div>
                <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#ef4444] font-bold mt-0.5">
                  SYSTEM ARCHITECT // DEV
                </div>
                <div className="font-mono text-[8px] text-neutral-400 tracking-[0.15em] border-t border-white/10 pt-0.5 mt-1">
                  SERIAL: KN-2025-DEV-006
                </div>
              </div>
            </div>

            {/* Profile Metadata Table (Name, Alias, Role, Status, Location) */}
            <div className="space-y-2.5 font-mono text-xs sm:text-[13px] border-t-2 border-[#23211c]/20 pt-4">
              <div className="flex items-baseline justify-between border-b border-[#23211c]/10 pb-1.5">
                <span className="font-bold text-case-redDark tracking-wider uppercase text-[11px] sm:text-xs">
                  NAME:
                </span>
                <span className="font-bold text-[#14161b] tracking-wide text-right">
                  KRUTIK NAINA
                </span>
              </div>

              <div className="flex items-baseline justify-between border-b border-[#23211c]/10 pb-1.5">
                <span className="font-bold text-case-redDark tracking-wider uppercase text-[11px] sm:text-xs">
                  ALIAS:
                </span>
                <span className="font-bold text-[#23211c] tracking-wide text-right">
                  CODE ARCHITECT
                </span>
              </div>

              <div className="flex items-baseline justify-between border-b border-[#23211c]/10 pb-1.5">
                <span className="font-bold text-case-redDark tracking-wider uppercase text-[11px] sm:text-xs">
                  ROLE:
                </span>
                <span className="font-bold text-[#23211c] tracking-wide text-right">
                  FULL-STACK DEVELOPER
                </span>
              </div>

              <div className="flex items-start justify-between border-b border-[#23211c]/10 pb-1.5 gap-2">
                <span className="font-bold text-case-redDark tracking-wider uppercase text-[11px] sm:text-xs shrink-0">
                  STATUS:
                </span>
                <span className="font-bold text-emerald-800 tracking-wide flex items-center gap-1.5 flex-wrap justify-end">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                  <span className="text-right text-[10px] sm:text-xs">ACTIVE // READY</span>
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-0.5">
                <span className="font-bold text-case-redDark tracking-wider uppercase text-[11px] sm:text-xs flex items-center gap-1">
                  <MapPin size={12} className="text-case-redDark" />
                  LOCATION:
                </span>
                <span className="font-bold text-[#23211c] tracking-wide text-right">
                  RAJKOT, GUJARAT, INDIA
                </span>
              </div>
            </div>

            {/* Subtle Fingerprint Stamp in Paper Corner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.35 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-16 right-4 w-28 h-28 pointer-events-none mix-blend-multiply opacity-35"
            >
              <img
                src={fingerprintImg}
                alt=""
                width="112"
                height="112"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain filter contrast-200"
              />
            </motion.div>

            {/* Download Case File / CV Action Button — min-h-[44px] for touch */}
            <div className="mt-5 sm:mt-6 pt-4 border-t-2 border-[#23211c]/25">
              <a
                href="/icons/Krutik_Naina_CV.pdf"
                download
                className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 min-h-[44px] rounded-sm bg-[#1c1f26] text-white font-mono text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-case-redDark active:bg-case-redDark transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.4)] group"
              >
                <span>DOWNLOAD CASE DOSSIER (CV)</span>
                <Download
                  size={15}
                  className="text-[#ef4444] group-hover:translate-y-0.5 transition-transform"
                />
              </a>
            </div>

            {/* Bottom Form Footer Code */}
            <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-[#23211c]/60 uppercase tracking-widest">
              <span>CHAIN OF CUSTODY: VERIFIED</span>
              <span>FORM: KN-CASE-02</span>
            </div>
          </motion.div>
        </motion.div>


        {/* =====================================================================
            RIGHT COLUMN: INVESTIGATION REPORT (6 Sequential Evidence Cards)
            ===================================================================== */}
        <div className="lg:col-span-7 flex flex-col space-y-5 relative">
          
          {/* Header Bar: Investigation Report Classification */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-case-charcoal/95 border border-case-slate rounded-sm p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <FileText size={16} className="text-case-redBright" />
                <span className="font-dossier text-lg sm:text-xl font-bold tracking-widest text-case-text uppercase">
                  INVESTIGATION REPORT // CASE BRIEFING
                </span>
              </div>
              <p className="font-mono text-xs text-case-textMuted leading-relaxed">
                Documented findings across system architecture, engineering proficiencies, and technical execution.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="font-mono text-[10px] text-case-redBright font-bold uppercase border border-case-redBright/40 px-2.5 py-1 rounded bg-case-redDark/20 tracking-widest">
                6 PIECES OF EVIDENCE
              </span>
            </div>
          </motion.div>

          {/* Sequential 2-Column Evidence Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            
            {investigationEvidence.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group relative bg-[#0e1015]/95 border border-[#2b303c] hover:border-case-red/60 rounded-sm p-4 sm:p-5 shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(185,28,28,0.2)] flex flex-col justify-between"
              >
                {/* 4 Corner Screw Rivets */}
                <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />

                {/* Corner Tape Simulation Accent */}
                <div className="absolute -top-2.5 right-6 w-12 h-4 bg-amber-100/15 border border-white/10 -rotate-3 pointer-events-none" />

                {/* Evidence Card Top Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <EvidenceLabel code={item.exhibit} variant="yellow" />
                      <span className="font-mono text-[10px] text-case-textMuted font-bold">
                        {item.tag}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-case-redBright tracking-widest uppercase font-semibold">
                      {item.classification}
                    </span>
                  </div>

                  {/* Title with Icon */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-1.5 rounded bg-white/5 border border-white/10 group-hover:border-case-red/40 group-hover:bg-case-redDark/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-mono text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-case-redBright transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-neutral-300 text-xs leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                {/* Highlights Tags & Forensic Footer */}
                <div className="mt-auto pt-3 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.highlights.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="font-mono text-[10px] text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded group-hover:border-case-red/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-case-textDim pt-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-case-redBright" />
                      <span>EVIDENCE VERIFIED</span>
                    </span>
                    <span className="text-neutral-500">INDEX: 0{idx + 1}</span>
                  </div>
                </div>

              </motion.div>
            ))}

          </div>

          {/* Bottom Investigation Summary Ribbon with Corner Accents */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative border border-case-red/60 bg-[#160808]/90 p-4 rounded-sm shadow-[0_0_15px_rgba(185,28,28,0.2)] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
          >
            <div className="flex items-center gap-3">
              <ShieldAlert size={20} className="text-case-redBright shrink-0" />
              <div>
                <div className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                  READY TO INVESTIGATE & BUILD YOUR ARCHITECTURE
                </div>
                <div className="font-mono text-[11px] text-neutral-400">
                  Available for full-time roles, contract missions, and system overhauls.
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-case-red text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-case-redBright transition-all duration-200 shadow-md shrink-0"
            >
              <span>DISCUSS MISSION</span>
              <ExternalLink size={13} />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Workflow;

