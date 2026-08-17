import React from "react";
import { motion } from "framer-motion";

/**
 * PaperCard Component
 * Manila/aged paper surface with optional paperclip, coffee stain or distressed border
 */
const PaperCard = ({
  children,
  title,
  subtitle,
  caseId,
  showPaperclip = true,
  rotate = 0,
  className = "",
  animate = true,
}) => {
  const Component = animate ? motion.div : "div";
  const motionProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
        viewport: { once: true },
      }
    : {};

  return (
    <Component
      {...motionProps}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
      className={`surface-paper rounded-sm p-6 sm:p-8 relative ${className}`}
    >
      {/* Paperclip in upper left corner */}
      {showPaperclip && (
        <div className="paperclip -top-4 left-6" title="Confidential Attachment" />
      )}

      {/* Case Header on Paper */}
      {(title || caseId) && (
        <div className="border-b-2 border-case-textDark/20 pb-3 mb-5 flex flex-wrap items-center justify-between gap-2 font-mono">
          <div>
            {caseId && (
              <span className="text-[11px] font-bold text-case-red tracking-widest block uppercase">
                {caseId}
              </span>
            )}
            {title && (
              <h4 className="text-lg sm:text-xl font-bold font-typewriter text-case-textDark tracking-tight">
                {title}
              </h4>
            )}
            {subtitle && (
              <p className="text-xs text-case-textDark/70 font-sans mt-0.5">{subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="w-2 h-2 rounded-full bg-case-textDark/40" />
            <span className="text-[10px] uppercase tracking-wider text-case-textDark/80">
              OFFICIAL RECORD
            </span>
          </div>
        </div>
      )}

      {/* Card Body */}
      <div className="text-case-textDark/90 font-sans leading-relaxed text-sm sm:text-base">
        {children}
      </div>

      {/* Bottom distressed watermark */}
      <div className="mt-6 pt-3 border-t border-case-textDark/15 flex items-center justify-between text-[10px] font-mono text-case-textDark/60 uppercase tracking-widest">
        <span>SECURITY LEVEL: RESTRICTED</span>
        <span>FORM: KN-DOSS-01</span>
      </div>
    </Component>
  );
};

export default PaperCard;
