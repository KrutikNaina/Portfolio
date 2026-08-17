import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Building,
  CheckCircle2,
  BookOpen,
  Award,
  Pin,
  Clock,
} from "lucide-react";
import { Helmet } from "react-helmet";
import StatusStamp from "./common/StatusStamp";
import EvidenceLabel from "./common/EvidenceLabel";

const educationTimeline = [
  {
    caseCode: "CASE RECORD #EDU-01",
    exhibit: "EXHIBIT E1",
    degree: "MCA (Master of Computer Applications)",
    institution: "Marwadi University, Rajkot",
    duration: "2024 – 2026",
    status: "CURRENTLY PURSUING",
    active: true,
    specialization:
      "Advanced Distributed Systems, Software Engineering Paradigms, Cloud Architectures & Algorithmic Optimization.",
    badge: "ACTIVE ENROLLMENT",
    stampText: "IN PROGRESS",
    stampVariant: "red",
  },
  {
    caseCode: "CASE RECORD #EDU-02",
    exhibit: "EXHIBIT E2",
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Saurashtra University, Rajkot",
    duration: "2022 – 2024",
    status: "COMPLETED",
    active: false,
    specialization:
      "Full-Stack Web Architectures, Database Management Systems, Data Structures, OOP (Java/C++), and Network Protocols.",
    badge: "DEGREE CONFERRED",
    stampText: "VERIFIED GRADUATE",
    stampVariant: "cyan",
  },
  {
    caseCode: "CASE RECORD #EDU-03",
    exhibit: "EXHIBIT E3",
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Virani High School, Rajkot",
    duration: "2020 – 2022",
    status: "COMPLETED",
    active: false,
    specialization:
      "Core Science, Advanced Mathematics, Logical Reasoning, and Fundamentals of Computer Technology.",
    badge: "BOARD CERTIFIED",
    stampText: "SOLVED",
    stampVariant: "amber",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative mt-24 mb-20 scroll-mt-24 select-none">
      <Helmet>
        <title>MY EDUCATION // ACADEMIC EVIDENCE: Krutik Naina</title>
        <meta
          name="description"
          content="Academic credentials and educational case files of Krutik Naina: MCA at Marwadi University, BCA at Saurashtra University, and HSC at Virani High School."
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
            CASE FILE // DOSSIER #05
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-case-red/40" />
          <span className="font-mono text-[10px] sm:text-xs text-case-textMuted tracking-widest uppercase">
            ACADEMIC CREDENTIALS
          </span>
        </motion.div>

        {/* Heading: MY EDUCATION */}
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
              EDUCATION
            </span>
          </h2>
          <div className="sm:ml-2">
            <StatusStamp
              text="ACADEMIC RECORD"
              variant="cyan"
              size="md"
              rotate={-4}
            />
          </div>
        </motion.div>

        {/* Subtitle: KNOWLEDGE ACQUIRED. SKILLS EARNED. CASES SOLVED. */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 flex flex-col items-center justify-center"
        >
          <div className="inline-block border-y border-case-red/30 py-1.5 px-6 bg-case-redDark/10 backdrop-blur-sm">
            <p className="font-mono font-black text-sm sm:text-base md:text-lg text-case-redBright tracking-[0.2em] uppercase">
              KNOWLEDGE ACQUIRED. SKILLS EARNED. CASES SOLVED.
            </p>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-mono text-case-textMuted max-w-xl mx-auto">
            TIMELINE OF FORMAL TRAINING • INVESTIGATION DEGREES • INSTITUTIONAL DOSSIERS
          </p>
        </motion.div>

        {/* Red Investigation Ruler */}
        <div className="flex items-center justify-center gap-2 mt-5 max-w-lg mx-auto">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-case-red to-case-redBright" />
          <span className="font-mono text-[10px] text-case-textMuted tracking-widest uppercase">
            CHRONOLOGICAL EVIDENCE LINE
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-case-red to-case-redBright" />
        </div>
      </div>

      {/* =========================================================================
          INVESTIGATION TIMELINE: Vertical Red Evidence Line & Connected Cards
          ========================================================================= */}
      <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
        
        {/* Central Vertical Red Investigation Line */}
        <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 transform md:-translate-x-1/2 w-[3px] bg-gradient-to-b from-case-red via-case-redBright to-case-red shadow-[0_0_10px_rgba(239,68,68,0.5)] pointer-events-none z-0" />

        <div className="space-y-12 relative z-10">
          {educationTimeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.caseCode}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* Timeline Pin Node on Central Line */}
                <div
                  className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-30"
                  title="Evidence Node"
                >
                  <div className="w-6 h-6 rounded-full bg-[#12141a] border-2 border-case-redBright shadow-[0_0_12px_rgba(239,68,68,0.8)] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-case-redBright" />
                  </div>
                  {item.active && (
                    <span className="absolute inset-0 rounded-full bg-case-redBright/40 animate-pulse pointer-events-none" />
                  )}
                </div>

                {/* Left/Right Document Card Container
                    Mobile: reduced left padding so more card width at 320px */}
                <div
                  className={`w-full md:w-[calc(50%-2.5rem)] pl-10 sm:pl-12 md:pl-0 ${
                    isLeft ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"
                  }`}
                >
                  {/* Physical Manila / Dark Tactical Case File Card */}
                  <div className="group relative bg-[#0e1017]/95 border border-[#2e3444] hover:border-case-red/60 rounded-sm p-5 sm:p-6 shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(185,28,28,0.2)] transition-all duration-300">
                    
                    {/* Metal Paperclip at top corner */}
                    <div
                      className={`absolute -top-3 ${
                        isLeft ? "right-8" : "left-8"
                      } w-3.5 h-10 border-[2px] border-[#9ca3af] rounded-full shadow-[2px_3px_5px_rgba(0,0,0,0.7)] z-20 pointer-events-none bg-transparent`}
                    />

                    {/* Top Case Label & Stamp */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <EvidenceLabel code={item.exhibit} variant="yellow" />
                        <span className="font-mono text-xs font-bold text-case-textMuted">
                          {item.caseCode}
                        </span>
                      </div>
                      <span
                        className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                          item.active
                            ? "bg-case-redDark/30 border-case-redBright/50 text-case-redBright shadow-[0_0_8px_rgba(239,68,68,0.2)]"
                            : "bg-white/5 border-white/10 text-neutral-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Degree Title */}
                    <div className="flex items-start gap-2.5 mb-2">
                      <div className="p-2 rounded bg-white/5 border border-white/10 text-case-redBright shrink-0 mt-0.5">
                        <GraduationCap size={18} />
                      </div>
                      <div>
                        <h3 className="font-mono text-base sm:text-lg font-bold text-white group-hover:text-case-redBright transition-colors leading-snug">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono mt-1">
                          <Building size={12} className="text-case-redBright" />
                          <span>{item.institution}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specialization / Case Details */}
                    <p className="text-neutral-300 text-xs sm:text-[13px] leading-relaxed my-3 font-sans">
                      {item.specialization}
                    </p>

                    {/* Footer Date & Official Stamp */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2 font-mono text-xs">
                      <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] shrink-0">
                        <Calendar size={12} className="text-case-red shrink-0" />
                        <span>{item.duration}</span>
                      </div>

                      <div className="shrink-0">
                        <StatusStamp
                          text={item.stampText}
                          variant={item.stampVariant}
                          size="sm"
                          rotate={isLeft ? -3 : 3}
                          animate={false}
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Empty Spacer Column for Desktop Alternate Layout */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;

