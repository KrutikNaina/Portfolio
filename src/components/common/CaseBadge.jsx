import React from "react";

/**
 * CaseBadge Component
 * Micro-badge for security clearances, tech categories, and file classifications
 * Variants: 'red' | 'cyan' | 'slate' | 'paper' | 'yellow'
 */
const CaseBadge = ({
  children,
  icon = null,
  variant = "slate",
  size = "sm",
  className = "",
}) => {
  const sizeClasses = {
    xs: "text-[10px] px-2 py-0.5 font-mono gap-1",
    sm: "text-xs px-2.5 py-1 font-mono gap-1.5",
    md: "text-sm px-3 py-1.5 font-mono gap-2",
  };

  const variantClasses = {
    slate: "bg-case-slate/80 text-case-text border border-white/10 shadow-sm",
    red: "bg-case-redDark/30 text-case-redBright border border-case-redBright/40 shadow-[0_0_10px_rgba(239,68,68,0.15)]",
    cyan: "bg-case-cyan/15 text-case-cyanSubtle border border-case-cyan/40 shadow-[0_0_10px_rgba(6,182,212,0.15)]",
    yellow: "bg-case-caution/20 text-case-yellow border border-case-yellow/40",
    paper: "bg-case-paperDark/90 text-case-textDark border border-[#c5ba9e] shadow-sm font-semibold",
    outline: "bg-transparent text-case-textMuted border border-white/10",
  };

  return (
    <span
      className={`inline-flex items-center uppercase tracking-wider rounded font-medium select-none ${sizeClasses[size] || sizeClasses.sm} ${variantClasses[variant] || variantClasses.slate} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default CaseBadge;
