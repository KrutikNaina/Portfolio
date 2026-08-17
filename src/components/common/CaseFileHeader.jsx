import React from "react";
import CaseBadge from "./CaseBadge";

/**
 * CaseFileHeader Component
 * Top investigation dossier classification bar & file folder directory header
 */
const CaseFileHeader = ({
  caseNumber = "CASE #KN-2025-ARCHITECT",
  classification = "TOP SECRET // LEVEL 5",
  status = "ACTIVE INVESTIGATION",
  agency = "DEPT OF SOFTWARE FORENSICS",
  className = "",
}) => {
  return (
    <div
      className={`surface-metal rounded-lg p-3 sm:p-4 mb-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-case-textMuted ${className}`}
    >
      {/* Left: Agency & Case Code */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-case-redBright animate-pulse" />
          <span className="font-bold text-case-text tracking-wider">{caseNumber}</span>
        </div>
        <span className="text-white/20 hidden sm:inline">|</span>
        <span className="text-case-textDim tracking-widest uppercase">{agency}</span>
      </div>

      {/* Right: Security Clearance & Status Badges */}
      <div className="flex items-center gap-2.5 flex-wrap w-full md:w-auto justify-between md:justify-end">
        <CaseBadge variant="red" size="xs">
          {classification}
        </CaseBadge>
        <CaseBadge variant="cyan" size="xs">
          {status}
        </CaseBadge>
      </div>
    </div>
  );
};

export default CaseFileHeader;
