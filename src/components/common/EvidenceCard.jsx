import React from "react";
import { motion } from "framer-motion";
import EvidenceLabel from "./EvidenceLabel";

/**
 * EvidenceCard Component
 * Pinned evidence card with pushpin, tape, evidence labels, and charcoal slate body
 */
const EvidenceCard = ({
  children,
  title,
  exhibitCode = "EXHIBIT A",
  caseNumber = "CASE #001",
  tag = "CRITICAL EVIDENCE",
  showPushpin = true,
  rotate = 0,
  className = "",
  animate = true,
}) => {
  const Component = animate ? motion.div : "div";
  const motionProps = animate
    ? {
        initial: { opacity: 0, scale: 0.96, y: 15 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        transition: { duration: 0.45, ease: "easeOut" },
        viewport: { once: true },
      }
    : {};

  return (
    <Component
      {...motionProps}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
      className={`surface-pinned rounded-lg p-5 sm:p-6 relative border border-white/10 group ${className}`}
    >
      {/* Top Pushpin */}
      {showPushpin && (
        <div className="pushpin -top-2 left-1/2 -translate-x-1/2" title="Pinned Evidence" />
      )}

      {/* Top Corner Tape strip simulation */}
      <div className="absolute -top-3 right-6 w-16 h-5 bg-amber-100/20 border border-white/10 -rotate-6 backdrop-blur-[1px] pointer-events-none" />

      {/* Header with Exhibit label and Case Number */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <EvidenceLabel code={exhibitCode} variant="yellow" />
          <span className="font-mono text-xs text-case-textMuted font-bold">
            {caseNumber}
          </span>
        </div>
        {tag && (
          <span className="font-mono text-[10px] uppercase text-case-redBright tracking-wider border border-case-redBright/30 px-2 py-0.5 rounded bg-case-redDark/20">
            {tag}
          </span>
        )}
      </div>

      {/* Title */}
      {title && (
        <h4 className="text-lg sm:text-xl font-bold text-case-text group-hover:text-case-cyanSubtle transition-colors mb-3">
          {title}
        </h4>
      )}

      {/* Main Content */}
      <div className="relative z-10">{children}</div>

      {/* Forensic Footer Metadata */}
      <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-case-textDim">
        <span>FORENSIC LOG: ACTIVE</span>
        <span className="text-case-cyanSubtle/80 font-bold">CHAIN OF CUSTODY VERIFIED</span>
      </div>
    </Component>
  );
};

export default EvidenceCard;
