import React from "react";

/**
 * MetalPlate Component
 * Tactical brushed steel / dark alloy surface with corner rivets and engraved typography
 */
const MetalPlate = ({
  children,
  title,
  serialNumber,
  className = "",
}) => {
  return (
    <div className={`surface-metal rounded-lg p-5 sm:p-7 relative border border-white/10 ${className}`}>
      {/* 4 Corner Screws / Rivets */}
      <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-500 shadow-inner flex items-center justify-center pointer-events-none">
        <div className="w-1.5 h-[0.5px] bg-slate-900 rotate-45" />
      </div>
      <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-500 shadow-inner flex items-center justify-center pointer-events-none">
        <div className="w-1.5 h-[0.5px] bg-slate-900 -rotate-45" />
      </div>
      <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-500 shadow-inner flex items-center justify-center pointer-events-none">
        <div className="w-1.5 h-[0.5px] bg-slate-900 -rotate-12" />
      </div>
      <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-500 shadow-inner flex items-center justify-center pointer-events-none">
        <div className="w-1.5 h-[0.5px] bg-slate-900 rotate-30" />
      </div>

      {/* Header if present */}
      {(title || serialNumber) && (
        <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 font-mono text-xs text-case-textMuted">
          {title && (
            <h4 className="font-bold text-case-text uppercase tracking-wider text-sm">
              {title}
            </h4>
          )}
          {serialNumber && (
            <span className="text-[10px] text-case-cyanSubtle font-mono font-bold tracking-widest">
              [SER // {serialNumber}]
            </span>
          )}
        </div>
      )}

      {/* Body Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default MetalPlate;
