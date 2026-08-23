import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  Terminal,
  Cpu,
  Database,
  Layers,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Lock,
  X,
  Maximize2,
  Folder,
  FolderOpen,
  Fingerprint as FingerprintIcon,
  Search,
  Server,
  Workflow,
  Clock,
  Pin,
  Flame,
} from "lucide-react";
import { Helmet } from "react-helmet";
import fingerprintImg from "../assets/fingerprint.png";
import StatusStamp from "./common/StatusStamp";
import EvidenceLabel from "./common/EvidenceLabel";

/**
 * Case Files Data Structure
 */
const caseFiles = [
  {
    id: "mailcraft",
    caseNumber: "CASE #KN-MC-2024",
    exhibitCode: "EXHIBIT 01",
    classification: "FLAGSHIP DOSSIER",
    name: "MailCraft — Transactional & Campaign Email Infrastructure",
    shortName: "MailCraft",
    caseType: "SaaS Infrastructure // Distributed Queue Engine",
    architecture:
      "Dual-provider AWS SES + Azure routing with BullMQ asynchronous queue worker pool, Redis throttling, and custom DNS DKIM/SPF verification.",
    status: "OPERATIONAL // LIVE PRODUCTION",
    statusVariant: "red",
    live: "https://mailcraft.tech",
    date: "Dec 2024 - Present",
    description:
      "A high-throughput transactional and campaign email infrastructure platform. Orchestrates high-volume email routing with AWS SES and Azure Communication Services, leveraging a distributed BullMQ task worker queue and Redis throttling to manage high delivery throughput. Incorporates live analytics, custom DNS verified domains (DKIM/SPF), real-time bounce/complaint webhook ingestion, and advanced suppression lists.",
    forensicBrief:
      "Primary investigation subject. Demonstrated 99.9% deliverability throughput with real-time webhook telemetry and automated worker concurrency. Architecture successfully audited for distributed scale.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "AWS SES",
      "Azure email",
      "JWT",
      "Tailwind CSS",
      "REST API",
    ],
    metadata: [
      "Live SaaS",
      "Queue Architecture",
      "Rate Limiting",
      "Analytics Ingestion",
    ],
    featured: true,
  },
  {
    id: "vedai",
    caseNumber: "CASE #KN-VA-2024",
    exhibitCode: "EXHIBIT 02",
    classification: "AI SYSTEM",
    name: "WAI / VedAI — Spiritual Guidance Platform",
    shortName: "VedAI",
    caseType: "AI Platform // Retrieval-Augmented Generation",
    architecture:
      "Gemini Pro query engine with customized Vedic RAG vector embeddings, stateless JWT authentication, and optimized MongoDB index trees.",
    status: "DEPLOYED // OPERATIONAL",
    statusVariant: "cyan",
    live: "https://vedai-chat.vercel.app/",
    date: "Oct 2024 - Present",
    description:
      "A low-latency spiritual AI query engine and predictive system. Implements Retrieval-Augmented Generation (RAG) using the Gemini Pro API and customized Vedic embeddings to provide contextually-grounded replies. Utilizes a secure, stateless JWT authentication flow and optimized MongoDB indexing to handle real-time chat histories, astrologic forecasting engines, and personalized astrology telemetry.",
    forensicBrief:
      "Engineered for sub-second semantic retrieval. Combines LLM prompt orchestration with grounded spiritual datasets for personalized astrological inference.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "Gemini API",
      "Tailwind CSS",
    ],
    metadata: ["AI-Powered", "Stateless Auth", "Vedic Knowledge Base"],
    featured: false,
  },
  {
    id: "skillhub",
    caseNumber: "CASE #KN-SH-2024",
    exhibitCode: "EXHIBIT 03",
    classification: "DEV ARTIFACT",
    name: "SkillHub — Developer Portfolio & Milestone Engine",
    shortName: "SkillHub",
    caseType: "Developer Tool // Milestone Validation Engine",
    architecture:
      "GitHub API ingestion pipeline with Firebase reactive sync layer and MongoDB aggregations for peer code review validation.",
    status: "ACTIVE REPOSITORY",
    statusVariant: "amber",
    github: "https://github.com/KrutikNaina/SkillHub",
    live: "https://skillhub.krutiknaina.com/",
    date: "Jun 2024 - Present",
    description:
      "A gamified skill validation platform and developer growth engine. Integrates GitHub API pipelines for automatic repository and commit ingestion, enabling engineers to log structured learning milestones. Built on a real-time reactive sync layer with Firebase and aggregation services on MongoDB for peer-to-peer code review and developer validation dashboard metrics.",
    forensicBrief:
      "Real-time event synchronization engine that validates engineer code velocity and milestone completion via automated GitHub telemetry.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Node.js", "MongoDB"],
    metadata: ["Real-time Sync", "Gamified Milestones", "OAuth Pipeline"],
    featured: false,
  },
  {
    id: "scanventory",
    caseNumber: "CASE #KN-SV-2024",
    exhibitCode: "EXHIBIT 04",
    classification: "ENTERPRISE PROTOCOL",
    name: "Scanverity / Scanventory — QR-Powered Asset Tracking Infrastructure",
    shortName: "Scanventory",
    caseType: "MERN Stack // Cryptographic Telemetry",
    architecture:
      "Dynamic cryptographic QR-code generation paired with session-based role authorization and real-time inventory audit logs.",
    status: "CASE ARCHIVED // VERIFIED",
    statusVariant: "gray",
    github: "https://github.com/KrutikNaina/Smart_Inventory_Management",
    live: "https://smart-inventory-one.vercel.app/",
    date: "Jul 2024 - Aug 2024",
    description:
      "An enterprise-grade, mobile-optimized QR asset-tracking and warehouse inventory system. Employs dynamic cryptographic QR-code generation, secure session-based role authorization, and real-time stock levels sync. Features an administrative telemetry dashboard for audit logs, batch transaction imports, and multi-location logistics tracking.",
    forensicBrief:
      "Tamper-evident asset tracking architecture with batch barcode ingestion, role-based security clearance, and warehouse audit telemetry.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "QR Code", "JWT"],
    metadata: ["Cryptographic QR", "Audit Logging", "Real-Time Telemetry"],
    featured: false,
  },
];

const ProjectSection = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const featuredProject = caseFiles.find((p) => p.featured);
  const smallerCaseFiles = caseFiles.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative mt-24 mb-20 scroll-mt-24 select-none">
      <Helmet>
        <title>CONFIDENTIAL CASE FILES // MY PROJECTS: Krutik Naina</title>
        <meta
          name="description"
          content="Confidential case files and technical project archive of Krutik Naina: MailCraft SaaS infrastructure, VedAI RAG engine, SkillHub, and Scanventory."
        />
        <meta
          name="keywords"
          content="Krutik Naina, Projects, Portfolio, Case Files, MailCraft, VedAI, SkillHub, Scanventory, Full-Stack"
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
            CASE FILE // DOSSIER #04
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-case-red/40" />
          <span className="font-mono text-[10px] sm:text-xs text-case-textMuted tracking-widest uppercase">
            CONFIDENTIAL ARCHIVE
          </span>
        </motion.div>

        {/* Heading: MY PROJECTS with Rubber Stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-dossier tracking-wider text-case-text uppercase leading-none">
            MY{" "}
            <span className="text-case-redBright drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              PROJECTS
            </span>
          </h2>
          <div className="sm:ml-2">
            <StatusStamp
              text="RESTRICTED"
              variant="red"
              size="md"
              rotate={-5}
            />
          </div>
        </motion.div>

        {/* Subtitle: EVIDENCE OF WORK. BUILT WITH PASSION. */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 flex flex-col items-center justify-center"
        >
          <div className="inline-block border-y border-case-red/30 py-1.5 px-6 bg-case-redDark/10 backdrop-blur-sm">
            <p className="font-mono font-black text-sm sm:text-base md:text-lg text-case-redBright tracking-[0.2em] uppercase">
              EVIDENCE OF WORK. BUILT WITH PASSION.
            </p>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-mono text-case-textMuted max-w-xl mx-auto">
            SYSTEM ARCHITECTURES • CLOUD WORKFLOWS • MONETIZABLE PLATFORMS
          </p>
        </motion.div>

        {/* Red Investigation Ruler */}
        <div className="flex items-center justify-center gap-2 mt-5 max-w-lg mx-auto">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-case-red to-case-redBright" />
          <span className="font-mono text-[10px] text-case-textMuted tracking-widest uppercase">
            CLICK TO OPEN & INSPECT EVIDENCE
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-case-red to-case-redBright" />
        </div>
      </div>

      {/* =========================================================================
          CASE FILES CONTAINER
          ========================================================================= */}
      <div className="max-w-6xl mx-auto space-y-10">

        {/* =====================================================================
            FEATURED CASE FILE: MailCraft Flagship Dossier Folder
            ===================================================================== */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Top Folder Tab — truncate case number on mobile if long */}
            <div className="flex items-center">
              <div className="bg-[#1c202a] border-t-2 border-l-2 border-r-2 border-[#3b4254] text-[#ef4444] px-3 sm:px-5 py-1.5 sm:py-2 rounded-t-md font-mono text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest flex items-center gap-1.5 sm:gap-2 shadow-sm min-w-0">
                <FolderOpen size={13} className="text-[#ef4444] shrink-0" />
                <span className="truncate">{featuredProject.caseNumber}</span>
                <span className="text-neutral-500 shrink-0">|</span>
                <span className="text-white uppercase shrink-0">PRIMARY TARGET</span>
              </div>
            </div>

            {/* Main Physical File Jacket Body */}
            <div className="relative bg-[#11141c] border-2 border-[#3b4254] rounded-b-md rounded-tr-md p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)]">

              {/* Metal Paperclip at Upper Corner */}
              <div
                className="absolute -top-3 left-12 w-4 h-12 border-[2.5px] border-[#9ca3af] rounded-full shadow-[2px_3px_5px_rgba(0,0,0,0.7)] z-30 pointer-events-none bg-transparent"
                title="Classified Attachment"
              />

              {/* Distressed Red Rubber Stamp on Top-Right */}
              <div className="absolute top-6 right-6 z-20 pointer-events-none hidden sm:block">
                <StatusStamp
                  text="FLAGSHIP MISSION"
                  variant="red"
                  size="md"
                  rotate={6}
                  animate={false}
                />
              </div>

              {/* Subtle Fingerprint Watermark in Background
                  Mobile rule: hidden on mobile to prevent overflow/distraction */}
              <div className="hidden sm:block absolute bottom-6 right-8 w-44 h-44 pointer-events-none opacity-20 mix-blend-screen z-0">
                <img
                  src={fingerprintImg}
                  alt=""
                  width="176"
                  height="176"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain filter invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[320deg]"
                />
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Column: Case Information Dossier (Col 1 to 7) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                  <div>
                    {/* Header Tags & Code */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <EvidenceLabel code={featuredProject.exhibitCode} variant="yellow" />
                      <span className="font-mono text-xs text-case-redBright font-bold uppercase tracking-wider bg-case-redDark/20 border border-case-redBright/40 px-2.5 py-0.5 rounded">
                        {featuredProject.classification}
                      </span>
                      <span className="font-mono text-xs text-neutral-400 ml-auto">
                        {featuredProject.date}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-mono font-black text-white tracking-tight leading-snug">
                      {featuredProject.name}
                    </h3>

                    {/* Case Type */}
                    <div className="mt-2 flex items-center gap-2 font-mono text-xs sm:text-[13px]">
                      <span className="text-case-redBright font-bold uppercase">CASE TYPE:</span>
                      <span className="text-neutral-300 font-semibold">{featuredProject.caseType}</span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Metadata Pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {featuredProject.metadata.map((meta, i) => (
                        <span
                          key={i}
                          className="font-mono text-[11px] font-semibold text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                        >
                          • {meta}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2.5">
                      IDENTIFIED TECH STACK:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs text-neutral-200 border border-white/10 px-2.5 py-1 rounded bg-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Architecture Blueprint & Actions (Col 8 to 12) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">

                  {/* Architecture Forensics Box */}
                  <div className="bg-[#0b0d13] border border-[#2b303c] rounded p-4 space-y-3 shadow-inner">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-xs">
                      <span className="text-case-redBright font-bold uppercase flex items-center gap-1.5">
                        <Server size={14} />
                        ARCHITECTURE SPEC
                      </span>
                      <span className="text-neutral-500 font-mono text-[10px]">DIAGNOSTIC // OK</span>
                    </div>
                    <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                      {featuredProject.architecture}
                    </p>
                  </div>

                  {/* Status Indicator Box */}
                  <div className="bg-[#0b0d13] border border-[#2b303c] rounded p-4 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                        SYSTEM STATUS
                      </div>
                      <div className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{featuredProject.status}</span>
                      </div>
                    </div>
                    <ShieldCheck size={24} className="text-emerald-500/60" />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCase(featuredProject)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-white/5 border border-white/15 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                    >
                      <Search size={14} className="text-case-redBright" />
                      <span>INSPECT EVIDENCE DOSSIER</span>
                    </button>

                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-case-red text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-case-redBright transition-all duration-200 shadow-[0_0_15px_rgba(185,28,28,0.4)]"
                    >
                      <span>LAUNCH INFRASTRUCTURE</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>
        )}


        {/* =====================================================================
            SMALLER CASE FILES (3-Column Physical Folder Grid)
            ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallerCaseFiles.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.15 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedCase(project)}
            >
              {/* Folder Top Tab */}
              <div className="flex items-center justify-between">
                <div className="bg-[#181b24] border-t border-l border-r border-[#323846] text-case-textMuted group-hover:text-case-redBright px-3.5 py-1 rounded-t font-mono text-[10px] font-bold tracking-wider flex items-center gap-1.5 transition-colors">
                  <Folder size={12} />
                  <span>{project.caseNumber}</span>
                </div>
                <div className="pr-2">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Main Card Folder Body */}
              <div className="relative bg-[#0f1117] border border-[#2b303c] group-hover:border-case-red/60 rounded-b rounded-tr p-5 sm:p-6 flex flex-col justify-between h-full shadow-[0_8px_20px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_20px_rgba(185,28,28,0.2)] transition-all duration-300">

                {/* 4 Corner Screws */}
                <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-[#374151] border border-[#6b7280]" />
                <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#374151] border border-[#6b7280]" />
                <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-[#374151] border border-[#6b7280]" />
                <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-[#374151] border border-[#6b7280]" />

                <div>
                  {/* Top Bar with Exhibit Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/5">
                    <EvidenceLabel code={project.exhibitCode} variant="yellow" />
                    <span className="font-mono text-[9px] text-case-redBright font-semibold uppercase">
                      {project.classification}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-mono text-base font-bold text-white group-hover:text-case-redBright transition-colors mb-2 leading-snug">
                    {project.name}
                  </h4>

                  {/* Case Type */}
                  <div className="font-mono text-[11px] text-neutral-400 mb-3">
                    <span className="text-case-red font-bold">TYPE:</span> {project.caseType}
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.metadata.map((meta, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9.5px] text-neutral-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                      >
                        • {meta}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Details */}
                <div className="mt-auto pt-3 border-t border-white/5 space-y-3">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] text-neutral-300 border border-white/10 px-2 py-0.5 rounded bg-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="font-mono text-[10px] text-neutral-500 px-1 py-0.5">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Interactive Action Links */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-mono text-[10px] text-case-redBright font-bold uppercase group-hover:underline flex items-center gap-1">
                      <Maximize2 size={11} />
                      OPEN FILE
                    </span>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                          title="Source Code"
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded text-case-red hover:text-case-redBright hover:bg-case-redDark/20 transition-colors"
                          title="Launch Target"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* =========================================================================
          INTERACTIVE EVIDENCE INSPECTOR MODAL (Rendered at Root Portal Level)
          ========================================================================= */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedCase && (
              <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-6">
                {/* Modal Backdrop Click-to-Close */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/85 backdrop-blur-sm"
                  onClick={() => setSelectedCase(null)}
                />

                {/* Modal Physical Case File Window */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative w-full max-w-2xl bg-[#0e1017] border-2 border-[#3b4254] rounded-sm p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-10 max-h-[85vh] overflow-y-auto overscroll-contain my-auto"
                >
                  {/* Paperclip in Top-Left Corner */}
                  <div className="absolute -top-3 left-8 w-4 h-12 border-[2.5px] border-[#9ca3af] rounded-full shadow-[2px_3px_5px_rgba(0,0,0,0.8)] z-30 pointer-events-none bg-transparent" />

                  {/* Close Button — min 44×44px touch area */}
                  <button
                    type="button"
                    onClick={() => setSelectedCase(null)}
                    className="absolute top-3 right-3 p-2 text-neutral-400 hover:text-white rounded border border-white/10 hover:border-white/30 bg-white/5 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                    aria-label="Close Case File"
                  >
                    <X size={18} />
                  </button>

                  {/* Top Modal Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 pb-2.5 border-b border-white/10 pr-10">
                    <EvidenceLabel code={selectedCase.exhibitCode} variant="yellow" />
                    <span className="font-mono text-xs text-case-redBright font-bold uppercase">
                      {selectedCase.caseNumber}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      // {selectedCase.classification}
                    </span>
                  </div>

                  {/* Case Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-black text-white mb-2 leading-tight">
                    {selectedCase.name}
                  </h3>

                  {/* Case Type & Date */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-neutral-400 mb-4 pb-2 border-b border-white/10">
                    <div>
                      <span className="text-case-red font-bold">CASE TYPE:</span>{" "}
                      <span className="text-neutral-200">{selectedCase.caseType}</span>
                    </div>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Clock size={12} />
                      <span>{selectedCase.date}</span>
                    </div>
                  </div>

                  {/* Forensic Briefing Alert */}
                  <div className="bg-[#170c0c] border border-case-red/40 p-3 rounded mb-4">
                    <div className="font-mono text-[11px] font-bold text-case-redBright uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Flame size={14} />
                      INVESTIGATOR FORENSIC LOG:
                    </div>
                    <p className="font-mono text-xs text-neutral-300 leading-relaxed">
                      {selectedCase.forensicBrief}
                    </p>
                  </div>

                  {/* Architecture Blueprint Section */}
                  <div className="bg-[#0b0d13] border border-[#2b303c] p-3.5 rounded mb-4">
                    <div className="font-mono text-xs font-bold text-case-redBright uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Server size={14} />
                      ARCHITECTURE &amp; PIPELINE SPEC:
                    </div>
                    <p className="font-mono text-xs text-neutral-200 leading-relaxed">
                      {selectedCase.architecture}
                    </p>
                  </div>

                  {/* Full Description */}
                  <div className="mb-4">
                    <div className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1.5">
                      FULL CASE SPECIFICATION:
                    </div>
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {selectedCase.description}
                    </p>
                  </div>

                  {/* Tech Stack Full Inventory */}
                  <div className="mb-4">
                    <div className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
                      TECHNOLOGY INVENTORY ({selectedCase.technologies.length}):
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCase.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs text-neutral-200 border border-white/10 px-2.5 py-1 rounded bg-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer Links */}
                  <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{selectedCase.status}</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      {selectedCase.github && (
                        <a
                          href={selectedCase.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded border border-white/20 text-white font-mono text-xs font-bold tracking-wider hover:bg-white/10 transition-colors"
                        >
                          <Github size={14} />
                          <span>SOURCE CODE</span>
                        </a>
                      )}
                      {selectedCase.live && (
                        <a
                          href={selectedCase.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 rounded bg-case-red text-white font-mono text-xs font-bold tracking-wider hover:bg-case-redBright transition-colors shadow-md"
                        >
                          <span>LAUNCH TARGET</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default ProjectSection;


