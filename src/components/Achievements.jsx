import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Calendar,
  Award,
  Flame,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Helmet } from "react-helmet";
import StatusStamp from "./common/StatusStamp";
import EvidenceLabel from "./common/EvidenceLabel";
import fingerprintImg from "../assets/fingerprint.png";

const achievements = [
  {
    exhibit: "EXHIBIT ACH-01",
    caseCode: "CASE #GEN-AI-2024",
    title: "Gen AI Study Completion",
    issuer: "Google Cloud / Generative AI Program",
    date: "Sep 2024 – Oct 2024",
    badge: "AI SPECIALIZATION",
    stampText: "SOLVED & CERTIFIED",
    stampVariant: "cyan",
    description:
      "Successfully completed Google's intensive Generative AI Study Jam program. Mastered advanced prompt engineering strategies, large language model orchestration, contextual embeddings, and ethical AI deployment architectures.",
    forensicNotes:
      "Credential verified in model grounding and Retrieval-Augmented Generation (RAG) implementation. Passed all theoretical and practical evaluations.",
    highlights: ["Prompt Engineering", "LLM Fine-Tuning", "Vector Embeddings", "AI Ethics"],
  },
  {
    exhibit: "EXHIBIT ACH-02",
    caseCode: "CASE #HTM-5.0-2024",
    title: "Hack The Mountains 5.0",
    issuer: "Marwadi University // National Hackathon",
    date: "Issued Sep 2024",
    badge: "36-HR HACKATHON",
    stampText: "CASE CRACKED",
    stampVariant: "red",
    description:
      "Mobilized in Hack The Mountains 5.0, an intensive 36-hour non-stop hackathon. Led technical development in engineering a production-grade full-stack web application from ground zero under strict time constraints alongside a multidisciplinary team.",
    forensicNotes:
      "Demonstrated rapid prototyping agility, real-time database structuring, API integration, and live stage product demonstration.",
    highlights: ["36-Hr Sprint", "Rapid Prototyping", "Full-Stack MVP", "Team Leadership"],
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative mt-24 mb-20 scroll-mt-24 select-none">
      <Helmet>
        <title>MY ACHIEVEMENTS // SOLVED EVIDENCE: Krutik Naina</title>
        <meta
          name="description"
          content="Official achievements and solved milestones of Krutik Naina: Gen AI Study Completion and Hack The Mountains 5.0."
        />
      </Helmet>

      {/* =========================================================================
          SECTION HEADER: Case Classification & Stencil Heading
          ========================================================================= */}
      <div className="relative mb-16 text-center">
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
            CASE FILE // DOSSIER #06
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-case-red/40" />
          <span className="font-mono text-[10px] sm:text-xs text-case-textMuted tracking-widest uppercase">
            SOLVED EVIDENCE ARCHIVE
          </span>
        </motion.div>

        {/* Heading: MY ACHIEVEMENTS with Rubber Stamp */}
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
              ACHIEVEMENTS
            </span>
          </h2>
          <div className="sm:ml-2">
            <StatusStamp
              text="VERIFIED"
              variant="red"
              size="md"
              rotate={5}
            />
          </div>
        </motion.div>

        {/* Subtitle: RECOGNIZED MILESTONES. OFFICIAL COMMENDATIONS. */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 flex flex-col items-center justify-center"
        >
          <div className="inline-block border-y border-case-red/30 py-1.5 px-6 bg-case-redDark/10 backdrop-blur-sm">
            <p className="font-mono font-black text-sm sm:text-base md:text-lg text-case-redBright tracking-[0.2em] uppercase">
              RECOGNIZED MILESTONES. OFFICIAL COMMENDATIONS.
            </p>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-mono text-case-textMuted max-w-xl mx-auto">
            HACKATHON MISSIONS • TECHNICAL ACCREDITATIONS • CASE VERIFICATIONS
          </p>
        </motion.div>

        {/* Red Investigation Ruler */}
        <div className="flex items-center justify-center gap-2 mt-5 max-w-lg mx-auto">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-case-red to-case-redBright" />
          <span className="font-mono text-[10px] text-case-textMuted tracking-widest uppercase">
            DOCUMENTED RECOGNITION // RECORDED
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-case-red to-case-redBright" />
        </div>
      </div>

      {/* =========================================================================
          SOLVED EVIDENCE CARDS GRID
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={item.caseCode}
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            className="group relative bg-[#0e1017]/95 border-2 border-[#2b3140] hover:border-case-red/60 rounded-sm p-6 sm:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.85)] hover:shadow-[0_0_25px_rgba(185,28,28,0.2)] transition-all duration-300 flex flex-col justify-between"
          >
            {/* 4 Corner Screws / Rivets */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />

            {/* Corner Tape Simulation */}
            <div className="absolute -top-3 right-10 w-14 h-4 bg-amber-100/15 border border-white/10 -rotate-3 pointer-events-none" />

            {/* Subtle Fingerprint Watermark */}
            <div className="absolute bottom-4 right-4 w-32 h-32 pointer-events-none opacity-15 mix-blend-screen z-0">
              <img
                src={fingerprintImg}
                alt=""
                width="128"
                height="128"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain filter invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[320deg]"
              />
            </div>

            <div className="relative z-10">
              {/* Top Case Label and Rubber Stamp */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <EvidenceLabel code={item.exhibit} variant="yellow" />
                  <span className="font-mono text-xs font-bold text-case-textMuted">
                    {item.caseCode}
                  </span>
                </div>
                <StatusStamp
                  text={item.stampText}
                  variant={item.stampVariant}
                  size="sm"
                  rotate={index === 0 ? -4 : 4}
                  animate={false}
                />
              </div>

              {/* Title with Trophy Icon */}
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 rounded bg-white/5 border border-white/10 text-case-redBright group-hover:border-case-red/40 group-hover:bg-case-redDark/20 transition-all shrink-0 mt-1">
                  <Trophy size={20} />
                </div>
                <div>
                  <h3 className="font-mono text-lg sm:text-xl font-bold text-white group-hover:text-case-redBright transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 mt-1">
                    {item.issuer}
                  </p>
                </div>
              </div>

              {/* Date Metadata */}
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-case-redBright font-semibold my-2.5">
                <Calendar size={12} />
                <span>{item.date}</span>
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed my-3 font-sans">
                {item.description}
              </p>

              {/* Forensic Notes Box */}
              <div className="bg-[#08090d] border border-white/10 rounded p-3 my-3">
                <div className="font-mono text-[10px] font-bold text-case-redBright uppercase tracking-wider mb-1 flex items-center gap-1">
                  <CheckCircle2 size={11} />
                  <span>INVESTIGATION OUTCOME:</span>
                </div>
                <p className="font-mono text-[11px] text-neutral-300 leading-relaxed">
                  {item.forensicNotes}
                </p>
              </div>
            </div>

            {/* Highlights Tags & Chain of Custody Footer */}
            <div className="relative z-10 mt-auto pt-3 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.highlights.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="font-mono text-[10px] text-neutral-300 border border-white/10 px-2.5 py-0.5 rounded bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-case-textDim">
                <span>COMMENDATION LOGGED</span>
                <span className="text-emerald-400 font-bold">STATUS: CONFIRMED</span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

