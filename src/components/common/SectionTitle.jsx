import React from "react";
import { motion } from "framer-motion";
import StatusStamp from "./StatusStamp";

/**
 * SectionTitle Component
 * Consistent cinematic investigation section header with file stamps and case taxonomy
 */
const SectionTitle = ({
  fileCode = "FILE // 01",
  title = "SECTION TITLE",
  highlightWord = "",
  stampText = "CONFIDENTIAL",
  stampVariant = "red",
  description = "",
  id = "",
  className = "",
}) => {
  return (
    <div id={id} className={`relative mb-14 sm:mb-16 scroll-mt-28 ${className}`}>
      {/* File Classification Top Tag */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-case-redBright uppercase flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-case-redBright animate-pulse" />
          {fileCode}
        </span>
        <div className="h-[1px] w-12 sm:w-20 bg-case-red/40" />
      </div>

      {/* Main Heading + Stamp Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-dossier tracking-wider text-case-text uppercase leading-none">
          {title}{" "}
          {highlightWord && (
            <span className="text-case-redBright drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              {highlightWord}
            </span>
          )}
        </h2>

        {stampText && (
          <div className="sm:ml-2">
            <StatusStamp
              text={stampText}
              variant={stampVariant}
              size="md"
              rotate={-6}
            />
          </div>
        )}
      </div>

      {/* Red Investigation Ruler / Marker line */}
      <div className="flex items-center justify-center gap-2 mt-4 max-w-md mx-auto">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-case-red to-case-redBright" />
        <span className="font-mono text-[10px] text-case-textMuted tracking-widest uppercase">
          EVIDENCE ARCHIVE
        </span>
        <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-case-red to-case-redBright" />
      </div>

      {/* Monospace Subtitle */}
      {description && (
        <p className="mt-4 text-center text-case-textMuted text-sm sm:text-base font-mono max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
