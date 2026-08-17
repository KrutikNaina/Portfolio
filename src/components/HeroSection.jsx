import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code, Terminal, Layers, ShieldCheck, AlertTriangle } from "lucide-react";
import avatarImg from "/icons/avtar.png";
import fingerprintImg from "../assets/fingerprint.png";

const HeroSection = () => {
  const charges = [
    "CRAFTING SCALABLE WEB APPS",
    "WRITING CLEAN & EFFICIENT CODE",
    "SOLVING COMPLEX PROBLEMS",
    "TURNING IDEAS INTO REALITY",
    "COMMITTED TO PERFORMANCE",
    "USER EXPERIENCE ENHANCEMENT",
  ];

  const stats = [
    {
      icon: <Terminal size={16} className="text-neutral-400" />,
      value: "2+",
      label1: "YEARS",
      label2: "EXPERIENCE",
    },
    {
      icon: <Code size={16} className="text-neutral-400" />,
      value: "15+",
      label1: "PROJECTS",
      label2: "COMPLETED",
    },
    {
      icon: <Layers size={16} className="text-neutral-400" />,
      value: "10+",
      label1: "TECHNOLOGIES",
      label2: "MASTERED",
    },
    {
      icon: <ShieldCheck size={16} className="text-neutral-400" />,
      value: "100%",
      label1: "CLIENT",
      label2: "SATISFACTION",
    },
  ];

  return (
    <section id="home" className="relative pt-4 sm:pt-6 md:pt-10 pb-10 sm:pb-12 select-none">
      
      {/* Main Grid: stacks on mobile, side-by-side on lg+ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 xl:gap-10 items-start max-w-7xl mx-auto">
        
        {/* =========================================================================
            LEFT COLUMN: MUGSHOT / WANTED DOSSIER CARD
            Mobile: full width, centered; Desktop: col-span-5
            ========================================================================= */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          
          {/* Subtle Red Fingerprint Glow — reduced on mobile */}
          <div className="absolute -bottom-8 -left-4 sm:-left-8 w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 pointer-events-none opacity-20 sm:opacity-30 md:opacity-40 mix-blend-screen z-0">
            <img src={fingerprintImg} alt="" width="176" height="176" loading="lazy" decoding="async" className="w-full h-full object-contain filter invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[320deg]" />
          </div>

          {/* Aged Paper Mugshot Board Container */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md bg-[#e4dac4] text-[#1c1a16] rounded-sm p-3 sm:p-4 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.8)] border border-[#c4ba9f] z-10">
            
            {/* Metal Paperclip at top-left */}
            <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 w-3 sm:w-4 h-9 sm:h-12 border-[2px] sm:border-[2.5px] border-[#9ca3af] rounded-full shadow-[2px_3px_5px_rgba(0,0,0,0.6)] z-30 pointer-events-none bg-transparent" />

            {/* Red Distressed "WANTED" Stamp — top-right of photo */}
            <div className="absolute top-5 sm:top-7 right-4 sm:right-7 z-30 pointer-events-none transform rotate-3">
              <div className="border-[2px] sm:border-[2.5px] border-[#a81c1c] text-[#a81c1c] px-2 sm:px-3 py-0.5 font-dossier font-black text-base sm:text-lg md:text-xl tracking-[0.2em] uppercase shadow-sm">
                WANTED
              </div>
            </div>

            {/* Inner Mugshot Photo Box */}
            <div className="relative bg-[#1a1c20] border-2 border-[#373b44] rounded-sm overflow-hidden flex items-center justify-center aspect-[3.8/4.8] shadow-inner">
              
              {/* Height Ruler Lines on the Left */}
              <div className="absolute left-0 top-0 bottom-0 w-9 sm:w-12 z-20 flex flex-col justify-between py-4 sm:py-6 px-1 sm:px-1.5 font-mono text-[8px] sm:text-[9px] text-[#8e8d88] border-r border-[#4b4e56]/40 pointer-events-none">
                <div className="border-b border-[#5c606b]/40 pb-0.5"><span>6'0"</span></div>
                <div className="border-b border-[#5c606b]/40 pb-0.5"><span>5'6"</span></div>
                <div className="border-b border-[#5c606b]/40 pb-0.5"><span>5'0"</span></div>
                <div className="border-b border-[#5c606b]/40 pb-0.5"><span>4'6"</span></div>
                <div className="border-b border-[#5c606b]/40 pb-0.5"><span>4'0"</span></div>
                <div className="border-b border-[#5c606b]/40 pb-0.5"><span>3'6"</span></div>
                <div className="border-b border-[#5c606b]/40 pb-0.5"><span>3'0"</span></div>
              </div>

              {/* Developer Mugshot Portrait (Critical LCP Image) */}
              <img
                src={avatarImg}
                alt="Krutik Naina - Full Stack Developer Mugshot"
                width="380"
                height="480"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center filter contrast-125 brightness-95 grayscale"
              />

              {/* Black Booking Placard */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[82%] bg-[#121316] border-2 border-[#383a42] rounded px-2 sm:px-3 py-1.5 sm:py-2 text-center shadow-[0_10px_25px_rgba(0,0,0,0.9)] z-20">
                <div className="font-mono font-black text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase leading-tight">
                  KRUTIK NAINA
                </div>
                <div className="font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-widest text-[#a81c1c] font-bold mt-0.5">
                  FULL-STACK DEVELOPER
                </div>
                <div className="font-mono text-[8px] sm:text-[9px] text-neutral-400 tracking-[0.1em] sm:tracking-[0.15em] border-t border-white/10 pt-0.5 sm:pt-1 mt-0.5 sm:mt-1 font-semibold">
                  2024-DEV-07-006
                </div>
              </div>

            </div>

            {/* Bottom Case File Serial Tag */}
            <div className="mt-2 sm:mt-3 text-center font-mono text-[10px] sm:text-xs text-[#a81c1c] font-bold tracking-widest uppercase">
              CASE FILE: 2024-DEV-07-006
            </div>

          </div>
        </div>


        {/* =========================================================================
            RIGHT COLUMN: LARGE "WANTED" TITLE, BADGE, DOSSIER & STATS
            Mobile: full width, stacked; Desktop: col-span-7
            ========================================================================= */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">
          
          {/* Top Row: "WANTED" Stencil Header + Police Star Badge
              Mobile: stacked column; sm+: side by side */}
          <div className="flex flex-col xs:flex-row items-start justify-between gap-3">
            
            {/* WANTED Boxed Header */}
            <div className="flex-1 min-w-0">
              <div className="inline-block border-2 border-[#b91c1c] px-3 sm:px-4 py-1 bg-[#150a0a]/80 shadow-[0_0_15px_rgba(185,28,28,0.2)]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-dossier font-black tracking-widest text-[#dc2626] uppercase leading-none drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                  WANTED
                </h1>
              </div>

              <div className="mt-2 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base font-mono font-bold tracking-wider sm:tracking-widest text-neutral-300 uppercase leading-snug">
                FOR BUILDING DIGITAL SOLUTIONS
              </div>
            </div>

            {/* Police Badge Emblem — scaled for mobile */}
            <div className="flex flex-col items-center text-center shrink-0">
              <div className="w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 relative flex items-center justify-center filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                {/* SVG Shield Badge */}
                <svg viewBox="0 0 100 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Shield Outline */}
                  <path d="M50 5 L92 20 L85 85 L50 115 L15 85 L8 20 Z" fill="#14171d" stroke="#4b5563" strokeWidth="3" />
                  <path d="M50 12 L84 25 L78 80 L50 106 L22 80 L16 25 Z" fill="#0d0f14" stroke="#a81c1c" strokeWidth="1.5" />
                  
                  {/* Star in Center */}
                  <polygon points="50,30 55,45 71,45 58,55 63,70 50,60 37,70 42,55 29,45 45,45" fill="#a81c1c" stroke="#dc2626" strokeWidth="1" />
                  
                  {/* Circular Banner ring */}
                  <circle cx="50" cy="52" r="26" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="3 2" />
                </svg>

                {/* Badge Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-between py-2 text-[5px] sm:text-[6px] md:text-[7.5px] font-mono font-black uppercase tracking-wider text-neutral-300 pointer-events-none">
                  <span className="pt-1 sm:pt-2 text-[6px] sm:text-[7px] md:text-[8px] text-neutral-200">DEVELOPER</span>
                  <span className="pb-3 sm:pb-4 text-[#a81c1c] font-extrabold">POLICE</span>
                </div>
              </div>

              <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-neutral-400 font-bold tracking-widest uppercase mt-1">
                TECH CRIME UNIT
              </span>
            </div>

          </div>

          {/* Center Main Dossier Metal Box */}
          <div className="relative bg-[#0e1015]/95 border border-[#2b303c] rounded-sm p-4 sm:p-5 md:p-6 shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
            
            {/* 4 Corner Screw Rivets */}
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner flex items-center justify-center">
              <div className="w-1 h-[0.5px] bg-[#111827] rotate-45" />
            </div>
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner flex items-center justify-center">
              <div className="w-1 h-[0.5px] bg-[#111827] -rotate-45" />
            </div>
            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner flex items-center justify-center">
              <div className="w-1 h-[0.5px] bg-[#111827] -rotate-12" />
            </div>
            <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner flex items-center justify-center">
              <div className="w-1 h-[0.5px] bg-[#111827] rotate-30" />
            </div>

            {/* 2-Column Grid: Metadata on Left, Charges on Right
                Mobile: single column stacked */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 font-mono text-xs sm:text-[13px]">
              
              {/* Left Column: Subject Details */}
              <div className="md:col-span-5 space-y-2 sm:space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-[#a81c1c] font-bold tracking-wider shrink-0 w-20 sm:w-24">NAME:</span>
                  <span className="text-white font-bold tracking-wide">KRUTIK NAINA</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#a81c1c] font-bold tracking-wider shrink-0 w-20 sm:w-24">ALIAS:</span>
                  <span className="text-neutral-200 font-bold tracking-wide">CODE ARCHITECT</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#a81c1c] font-bold tracking-wider shrink-0 w-20 sm:w-24">OCCUPATION:</span>
                  <span className="text-neutral-200 font-bold tracking-wide">FULL-STACK DEV</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#a81c1c] font-bold tracking-wider shrink-0 w-20 sm:w-24">LOCATION:</span>
                  <span className="text-neutral-200 font-bold tracking-wide">RAJKOT, INDIA</span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[#a81c1c] font-bold tracking-wider shrink-0 w-20 sm:w-24">STATUS:</span>
                  <span className="text-white font-bold tracking-wide flex items-center gap-2 flex-wrap">
                    <span>IN DEVELOPMENT</span>
                    <span className="w-2 h-2 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444] animate-pulse shrink-0" />
                  </span>
                </div>
              </div>

              {/* Right Column: Record of Charges */}
              <div className="md:col-span-7 space-y-2 border-t md:border-t-0 md:border-l border-[#2b303c] pt-3 md:pt-0 md:pl-6">
                <div className="text-[#a81c1c] font-bold tracking-wider mb-2">
                  CHARGES:
                </div>
                <ul className="space-y-1 sm:space-y-1.5 text-neutral-300 text-[11px] sm:text-xs md:text-[12.5px] leading-relaxed">
                  {charges.map((charge, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-500 font-bold select-none shrink-0">&gt;</span>
                      <span className="tracking-wide font-medium">{charge}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Red Warning Banner */}
          <div className="relative border border-[#a81c1c]/70 bg-[#170808]/80 py-2 sm:py-2.5 px-3 sm:px-4 text-center shadow-[0_0_12px_rgba(168,28,28,0.2)]">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs font-bold text-[#dc2626] tracking-wider sm:tracking-widest uppercase flex-wrap">
              <AlertTriangle size={13} className="shrink-0 text-[#dc2626]" />
              <span>EXTREMELY PASSIONATE &amp; DANGEROUSLY DEDICATED</span>
              <AlertTriangle size={13} className="shrink-0 text-[#dc2626]" />
            </div>
          </div>

          {/* 4-Column Stats Cards — 2-col on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-1">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-[#0e1015]/95 border border-[#2b303c] rounded-sm p-3 sm:p-3.5 flex flex-col justify-between shadow-md group hover:border-[#a81c1c]/50 transition-colors"
              >
                {/* 4 Corner Screws */}
                <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />

                {/* Stat Value & Icon */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-1">
                  {item.icon}
                  <span className="text-lg sm:text-xl md:text-2xl font-mono font-black text-[#dc2626] tracking-tight">
                    {item.value}
                  </span>
                </div>

                {/* 2-line Label */}
                <div className="text-center font-mono text-[9px] sm:text-[10px] text-neutral-400 font-bold uppercase tracking-wider leading-tight mt-1">
                  <div>{item.label1}</div>
                  <div>{item.label2}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Bottom Scroll Down Callout */}
      <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center text-center font-mono text-xs text-neutral-500 tracking-widest uppercase">
        <a href="#about" className="flex flex-col items-center gap-1 hover:text-neutral-300 transition-colors group min-h-[44px] justify-center">
          <span>SCROLL DOWN TO VIEW EVIDENCE</span>
          <ChevronDown size={18} className="text-[#a81c1c] animate-bounce" />
        </a>
      </div>

    </section>
  );
};

export default HeroSection;
