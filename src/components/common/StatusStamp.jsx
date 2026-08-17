import React from "react";
import { motion } from "framer-motion";

/**
 * StatusStamp Component
 * Realistic distressed rubber stamp with dynamic ink color and rotation
 * Variants: 'red' | 'cyan' | 'amber' | 'gray'
 */
const StatusStamp = ({
  text = "CONFIDENTIAL",
  variant = "red",
  rotate = -8,
  size = "md",
  className = "",
  animate = true,
}) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 border-[2px]",
    md: "text-sm sm:text-base px-3 py-1 border-[2.5px]",
    lg: "text-lg sm:text-2xl px-4 py-1.5 border-[3px]",
    xl: "text-2xl sm:text-4xl px-6 py-2 border-[4px]",
  };

  const variantClasses = {
    red: "text-case-redBright border-case-redBright shadow-[inset_0_0_0_1px_rgba(239,68,68,0.3),0_0_12px_rgba(239,68,68,0.2)]",
    cyan: "text-case-cyanSubtle border-case-cyanSubtle shadow-[inset_0_0_0_1px_rgba(6,182,212,0.3),0_0_12px_rgba(6,182,212,0.2)]",
    amber: "text-case-yellow border-case-yellow shadow-[inset_0_0_0_1px_rgba(234,179,8,0.3),0_0_12px_rgba(234,179,8,0.2)]",
    gray: "text-case-textMuted border-case-textMuted shadow-[inset_0_0_0_1px_rgba(163,159,149,0.3)]",
  };

  const Component = animate ? motion.div : "div";
  const motionProps = animate
    ? {
        initial: { scale: 1.6, opacity: 0, rotate: rotate - 15 },
        whileInView: { scale: 1, opacity: 0.9, rotate: rotate },
        transition: { type: "spring", stiffness: 350, damping: 20 },
        viewport: { once: true },
      }
    : { style: { transform: `rotate(${rotate}deg)` } };

  return (
    <Component
      {...motionProps}
      className={`inline-block font-dossier tracking-[0.2em] font-bold uppercase select-none rounded-[2px] backdrop-blur-[1px] ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.red} ${className}`}
    >
      {text}
    </Component>
  );
};

export default StatusStamp;
