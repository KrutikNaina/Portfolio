import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Radio,
  Lock,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  Flame,
  Copy,
  Check,
} from "lucide-react";
import StatusStamp from "./common/StatusStamp";
import EvidenceLabel from "./common/EvidenceLabel";
import fingerprintImg from "../assets/fingerprint.png";

const contactPlates = [
  {
    id: "email",
    plateCode: "COMM // 01",
    title: "Official Email Dispatch",
    label: "DIRECT INBOX",
    value: "krutiknaina29@gmail.com",
    href: "mailto:krutiknaina29@gmail.com",
    icon: <Mail size={22} className="text-case-redBright" />,
    actionLabel: "SEND DISPATCH",
    status: "ENCRYPTED CHANNEL",
  },
  {
    id: "linkedin",
    plateCode: "COMM // 02",
    title: "Professional Network",
    label: "LINKEDIN DOSSIER",
    value: "linkedin.com/in/krutiknaina",
    href: "https://www.linkedin.com/in/krutiknaina",
    icon: <Linkedin size={22} className="text-case-redBright" />,
    actionLabel: "CONNECT PROFILE",
    status: "ONLINE // VERIFIED",
  },
  {
    id: "github",
    plateCode: "COMM // 03",
    title: "Source Code Repository",
    label: "GITHUB ARCHIVE",
    value: "github.com/krutiknaina",
    href: "https://github.com/krutiknaina",
    icon: <Github size={22} className="text-case-redBright" />,
    actionLabel: "AUDIT CODEBASE",
    status: "PUBLIC ACCESS",
  },
  {
    id: "location",
    plateCode: "COMM // 04",
    title: "Physical Coordinates",
    label: "OPERATIONAL BASE",
    value: "Rajkot, Gujarat, India",
    href: "https://maps.app.goo.gl/fgRYxkBWHAE76dnFA",
    icon: <MapPin size={22} className="text-case-redBright" />,
    actionLabel: "RADAR COORD",
    status: "GLOBAL REMOTE",
  },
];

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("krutiknaina29@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative mt-24 mb-16 scroll-mt-24 select-none">
      <Helmet>
        <title>CONTACT ME // SECURE DISPATCH: Krutik Naina</title>
        <meta
          name="description"
          content="Initiate contact with Full-Stack Architect Krutik Naina. Secure dispatch channels for contract missions, full-time engineering roles, and architecture consulting."
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
            FINAL PROTOCOL // DOSSIER #07
          </span>
          <div className="h-[1px] w-12 sm:w-20 bg-case-red/40" />
          <span className="font-mono text-[10px] sm:text-xs text-case-textMuted tracking-widest uppercase">
            SECURE TRANSMISSION
          </span>
        </motion.div>

        {/* Heading: CONTACT ME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-dossier tracking-wider text-case-text uppercase leading-none">
            CONTACT{" "}
            <span className="text-case-redBright drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              ME
            </span>
          </h2>
          <div className="sm:ml-2">
            <StatusStamp
              text="CHANNELS OPEN"
              variant="cyan"
              size="md"
              rotate={-6}
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-3 flex flex-col items-center justify-center"
        >
          <div className="inline-block border-y border-case-red/30 py-1.5 px-6 bg-case-redDark/10 backdrop-blur-sm">
            <p className="font-mono font-black text-sm sm:text-base md:text-lg text-case-redBright tracking-[0.2em] uppercase">
              TRANSMIT MISSION BRIEFING. INITIALIZE COLLABORATION.
            </p>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-mono text-case-textMuted max-w-xl mx-auto">
            DIRECT EVIDENCE CHANNELS • ENCRYPTED DISPATCH • AVAILABLE WORLDWIDE
          </p>
        </motion.div>

        {/* Red Investigation Ruler */}
        <div className="flex items-center justify-center gap-2 mt-5 max-w-lg mx-auto">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-case-red to-case-redBright" />
          <span className="font-mono text-[10px] text-case-textMuted tracking-widest uppercase">
            VERIFIED COMMS NETWORK
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-case-red to-case-redBright" />
        </div>
      </div>

      {/* =========================================================================
          4 EVIDENCE / CONTACT PLATES
          ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-16">
        {contactPlates.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            className="group relative bg-[#0e1017]/95 border border-[#2b303c] hover:border-case-red/60 rounded-sm p-5 shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_20px_rgba(185,28,28,0.25)] transition-all duration-300 flex flex-col justify-between"
          >
            {/* 4 Corner Screws */}
            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
            <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
            <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />

            <div>
              {/* Plate Header */}
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 font-mono text-[10px]">
                <span className="text-case-redBright font-bold uppercase">{item.plateCode}</span>
                <span className="text-neutral-400 font-semibold">{item.status}</span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded bg-white/5 border border-white/10 group-hover:border-case-red/40 group-hover:bg-case-redDark/20 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <span className="font-mono text-[10px] text-case-textMuted uppercase block">
                    {item.label}
                  </span>
                  <h3 className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-case-redBright transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Value / Link Display */}
              <p className="font-mono text-xs text-neutral-300 bg-[#07090e] border border-white/5 p-2 rounded mb-4 break-all select-all">
                {item.value}
              </p>
            </div>

            {/* Action Trigger Button */}
            <div className="pt-2 border-t border-white/5">
              <a
                href={item.href}
                target={item.id === "email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded bg-white/5 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-case-red hover:border-case-red transition-all duration-200 group/btn"
              >
                <span>{item.actionLabel}</span>
                <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

          </motion.div>
        ))}
      </div>


      {/* =========================================================================
          CLIMACTIC CONCLUSION: CASE CLOSED // INVESTIGATION COMPLETED
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Subtle Background Red Fingerprint Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none opacity-20 mix-blend-screen z-0">
          <img
            src={fingerprintImg}
            alt=""
            width="256"
            height="256"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain filter invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[320deg]"
          />
        </div>

        {/* Heavy Closed Case Dossier Binder */}
        <div className="relative bg-[#11141c] border-2 border-case-red/70 rounded p-5 sm:p-8 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(185,28,28,0.25)] z-10">
          
          {/* Metal Paperclip at Upper Corner */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-12 border-[2.5px] border-[#9ca3af] rounded-full shadow-[2px_3px_5px_rgba(0,0,0,0.8)] z-20 pointer-events-none bg-transparent" />

          {/* Top Verification Ribbon */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-case-redBright animate-pulse" />
            <span className="font-mono text-xs sm:text-sm font-black tracking-[0.25em] text-case-redBright uppercase">
              FINAL INVESTIGATION SUMMARY // VERDICT REACHED
            </span>
            <span className="w-2 h-2 rounded-full bg-case-redBright animate-pulse" />
          </div>

          {/* MASSIVE DISTRESSED "CASE CLOSED" STAMP
              Mobile: font and border reduced to prevent 320px overflow */}
          <motion.div
            initial={{ scale: 2, opacity: 0, rotate: -15 }}
            whileInView={{ scale: 1, opacity: 1, rotate: -4 }}
            transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block my-2 max-w-full"
          >
            <div className="border-[3px] sm:border-[4px] md:border-[5px] border-case-redBright text-case-redBright px-3 sm:px-6 md:px-10 py-1.5 sm:py-2 md:py-3 font-dossier font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase shadow-[inset_0_0_0_2px_rgba(239,68,68,0.4),0_0_35px_rgba(239,68,68,0.4)] break-words">
              CASE CLOSED
            </div>
          </motion.div>

          {/* PHILOSOPHY STATEMENT — scaled for mobile */}
          <div className="mt-6 sm:mt-8 space-y-2 max-w-2xl mx-auto">
            <p className="font-mono font-black text-base sm:text-lg md:text-2xl lg:text-3xl text-white tracking-wider uppercase leading-tight">
              I DON'T JUST WRITE CODE.
            </p>
            <p className="font-mono font-black text-sm sm:text-base md:text-xl lg:text-2xl text-case-redBright tracking-wider uppercase leading-tight">
              I SOLVE PROBLEMS AND BUILD EXPERIENCES.
            </p>
          </div>

          {/* Brief Explanatory Note */}
          <p className="mt-5 text-neutral-300 text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Whether architecting high-throughput backend infrastructure, engineering custom AI integration pipelines, or crafting conversion-focused SaaS applications — I deliver production-grade results without compromise.
          </p>

          {/* LARGE "LET'S CONNECT" CTA BUTTON — full width on mobile */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="mailto:krutiknaina29@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] rounded bg-case-red hover:bg-case-redBright text-white font-mono text-sm sm:text-base font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(185,28,28,0.5)] hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] hover:scale-105 group"
            >
              <span>LET'S CONNECT</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 min-h-[44px] rounded bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span className="text-emerald-400">EMAIL COPIED!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-case-redBright" />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom Security Classification Watermark */}
          <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[9px] font-mono text-case-textDim uppercase tracking-widest">
            <span>FILE ARCHIVE STATUS: CONFIRMED & SEALED</span>
            <span>IDENTIFIER: KN-2025-END</span>
          </div>

        </div>
      </motion.div>

    </section>
  );
};

export default ContactSection;

