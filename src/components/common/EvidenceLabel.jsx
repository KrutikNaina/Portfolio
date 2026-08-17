import React from "react";

/**
 * EvidenceLabel Component
 * Crime scene evidence marker (e.g. EXHIBIT A, ITEM #04, EVIDENCE 01)
 */
const EvidenceLabel = ({
  code = "EXHIBIT A",
  variant = "yellow",
  className = "",
}) => {
  const variantStyles = {
    yellow: "bg-case-yellow text-black border-black font-black",
    red: "bg-case-red text-white border-case-black font-bold",
    white: "bg-case-text text-black border-black font-bold",
    dark: "bg-case-charcoal text-case-textMuted border-case-slate font-bold",
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 border shadow-[2px_2px_0px_rgba(0,0,0,0.8)] font-mono text-[11px] uppercase tracking-widest ${variantStyles[variant] || variantStyles.yellow} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      <span>{code}</span>
    </div>
  );
};

export default EvidenceLabel;
