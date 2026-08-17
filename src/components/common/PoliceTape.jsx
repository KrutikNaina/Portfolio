import React from "react";

/**
 * PoliceTape Component
 * Police caution / crime barrier banner tape
 */
const PoliceTape = ({
  text = "POLICE LINE // DO NOT CROSS // CLEAN CODE ZONE // TOP CLASSIFIED //",
  variant = "caution",
  rotate = 0,
  className = "",
}) => {
  const isCaution = variant === "caution";

  return (
    <div
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
      className={`relative w-full overflow-hidden py-2 select-none shadow-xl ${
        isCaution
          ? "bg-case-yellow text-case-black font-black"
          : "bg-case-red text-case-text font-black"
      } ${className}`}
    >
      {/* Caution Stripe Pattern Background */}
      <div className="absolute inset-0 opacity-15 police-tape-ribbon pointer-events-none" />

      {/* Repeating Marquee Text */}
      <div className="relative flex whitespace-nowrap overflow-hidden font-mono text-xs sm:text-sm tracking-[0.25em] font-extrabold uppercase">
        <div className="flex shrink-0 animate-[marquee_25s_linear_infinite] gap-6">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
        <div className="flex shrink-0 animate-[marquee_25s_linear_infinite] gap-6" aria-hidden="true">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default PoliceTape;
