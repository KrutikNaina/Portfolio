import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code, Terminal, Layers, Skull, AlertTriangle } from "lucide-react";
import krutikImg from "../assets/krutik.png";
import policeBadgeImg from "../assets/police-badegs.png";

const HeroSection = ({ isReady = true }) => {
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
      icon: <Terminal size={18} className="text-neutral-400" />,
      value: "2+",
      label1: "YEARS",
      label2: "EXPERIENCE",
    },
    {
      icon: <Code size={18} className="text-neutral-400" />,
      value: "15+",
      label1: "PROJECTS",
      label2: "COMPLETED",
    },
    {
      icon: <Layers size={18} className="text-neutral-400" />,
      value: "10+",
      label1: "TECHNOLOGIES",
      label2: "MASTERED",
    },
    {
      icon: <Skull size={18} className="text-neutral-400" />,
      value: "100%",
      label1: "CLIENT",
      label2: "SATISFACTION",
    },
  ];

  const currentAnimation = isReady ? "visible" : "hidden";

  // Motion variants for sequential reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: customDelay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.96, y: 12 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: customDelay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="home" className="relative pt-2 sm:pt-4 md:pt-6 pb-8 sm:pb-12 select-none">
      
      {/* Main Grid: stacks on mobile, side-by-side on lg+ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 xl:gap-10 items-center max-w-7xl mx-auto">
        
        {/* =========================================================================
            STEP 3: LEFT COLUMN: MUGSHOT DOSSIER BOARD (krutik.png)
            Mobile: full width, centered; Desktop: col-span-5
            ========================================================================= */}
        <motion.div
          custom={0.12}
          initial="hidden"
          animate={currentAnimation}
          variants={scaleIn}
          className="lg:col-span-5 relative flex flex-col items-center justify-center"
        >
          {/* Mugshot Image Container with Matching Case-File Border & Shadow */}
          <div className="relative w-full max-w-[340px] sm:max-w-[390px] md:max-w-[420px] rounded-sm p-1 sm:p-1.5 bg-[#0a0c10]/80 border border-[#2b303c] shadow-[0_25px_50px_rgba(0,0,0,0.95),0_0_20px_rgba(185,28,28,0.15)] group">
            
            {/* 4 Subtle Corner Accent Markers */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-case-red/80 pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-case-red/80 pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-case-red/80 pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-case-red/80 pointer-events-none" />

            <img
              src={krutikImg}
              alt="Krutik Naina - Wanted Full-Stack Developer Mugshot Dossier"
              width="440"
              height="580"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-contain select-none pointer-events-none rounded-[2px]"
            />
          </div>
        </motion.div>


        {/* =========================================================================
            RIGHT COLUMN: WANTED TITLE, BADGE, DOSSIER & STATS
            Mobile: full width, stacked; Desktop: col-span-7
            ========================================================================= */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-4">
          
          {/* STEP 4: Top Row: "WANTED" Stencil Header + Police Star Badge */}
          <motion.div
            custom={0.22}
            initial="hidden"
            animate={currentAnimation}
            variants={fadeInUp}
            className="flex items-center justify-between gap-4"
          >
            
            {/* WANTED Boxed Header */}
            <div className="flex-1 min-w-0">
              <div className="inline-block border-2 border-[#b91c1c]/90 px-3 sm:px-5 py-1.5 bg-[#140808]/90 shadow-[0_0_20px_rgba(185,28,28,0.25)]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-dossier font-black tracking-widest text-[#dc2626] uppercase leading-none drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]">
                  WANTED
                </h1>
              </div>

              <div className="mt-2 text-xs sm:text-sm md:text-base font-mono font-bold tracking-wider sm:tracking-widest text-neutral-300 uppercase leading-snug">
                FOR BUILDING DIGITAL SOLUTIONS
              </div>
            </div>

            {/* Police Badge Emblem Image */}
            <div className="shrink-0 flex items-center justify-center">
              <img
                src={policeBadgeImg}
                alt="Tech Crime Unit Developer Police Badge"
                width="110"
                height="125"
                loading="eager"
                decoding="async"
                className="w-20 sm:w-24 md:w-28 lg:w-28 xl:w-32 h-auto object-contain filter drop-shadow-[0_6px_15px_rgba(0,0,0,0.9)]"
              />
            </div>

          </motion.div>

          {/* STEP 5 & 6: Center Main Dossier Metal Box (Subject Details + Charges) */}
          <div className="relative bg-[#0d0f14]/95 border border-[#262b37] rounded-sm p-4 sm:p-5 shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
            
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

            {/* 2-Column Grid: Metadata on Left (Step 5), Charges on Right (Step 6) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 font-mono text-xs sm:text-[13px]">
              
              {/* STEP 5: Left Column: Subject Details */}
              <motion.div
                custom={0.34}
                initial="hidden"
                animate={currentAnimation}
                variants={fadeInUp}
                className="md:col-span-5 space-y-2 sm:space-y-2.5"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-[#dc2626] font-bold tracking-wider shrink-0 w-24">NAME:</span>
                  <span className="text-white font-bold tracking-wide">KRUTIK NAINA</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#dc2626] font-bold tracking-wider shrink-0 w-24">ALIAS:</span>
                  <span className="text-neutral-200 font-bold tracking-wide">CODE ARCHITECT</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#dc2626] font-bold tracking-wider shrink-0 w-24">OCCUPATION:</span>
                  <span className="text-neutral-200 font-bold tracking-wide">FULL-STACK DEVELOPER</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-[#dc2626] font-bold tracking-wider shrink-0 w-24">LOCATION:</span>
                  <span className="text-neutral-200 font-bold tracking-wide">RAJKOT, GUJARAT, INDIA</span>
                </div>

                <div className="flex items-center gap-2 pt-0.5">
                  <span className="text-[#dc2626] font-bold tracking-wider shrink-0 w-24">STATUS:</span>
                  <span className="text-white font-bold tracking-wide flex items-center gap-2 flex-wrap">
                    <span>IN DEVELOPMENT</span>
                    <span className="w-2 h-2 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444] animate-pulse shrink-0" />
                  </span>
                </div>
              </motion.div>

              {/* STEP 6: Right Column: Record of Charges */}
              <motion.div
                custom={0.44}
                initial="hidden"
                animate={currentAnimation}
                variants={fadeInUp}
                className="md:col-span-7 space-y-1.5 border-t md:border-t-0 md:border-l border-[#262b37] pt-3 md:pt-0 md:pl-5"
              >
                <div className="text-[#dc2626] font-bold tracking-wider mb-1.5">
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
              </motion.div>

            </div>

          </div>

          {/* STEP 8: Red Warning Banner */}
          <motion.div
            custom={0.62}
            initial="hidden"
            animate={currentAnimation}
            variants={fadeInUp}
            className="relative border border-[#b91c1c]/70 bg-[#160808]/90 py-2 px-3 sm:px-4 text-center shadow-[0_0_15px_rgba(185,28,28,0.2)]"
          >
            <div className="flex items-center justify-center gap-2 font-mono text-[10px] sm:text-xs font-bold text-[#dc2626] tracking-wider sm:tracking-widest uppercase flex-wrap">
              <AlertTriangle size={13} className="shrink-0 text-[#dc2626]" />
              <span>EXTREMELY PASSIONATE &amp; DANGEROUSLY DEDICATED</span>
              <AlertTriangle size={13} className="shrink-0 text-[#dc2626]" />
            </div>
          </motion.div>

          {/* STEP 7: 4-Column Stats Cards */}
          <motion.div
            custom={0.54}
            initial="hidden"
            animate={currentAnimation}
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
          >
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-[#0d0f14]/95 border border-[#262b37] rounded-sm p-3 flex flex-col justify-between shadow-md group hover:border-[#b91c1c]/60 transition-colors"
              >
                {/* 4 Corner Screws */}
                <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
                <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />

                {/* Stat Value & Icon */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-0.5">
                  {item.icon}
                  <span className="text-lg sm:text-xl md:text-2xl font-mono font-black text-[#dc2626] tracking-tight">
                    {item.value}
                  </span>
                </div>

                {/* 2-line Label */}
                <div className="text-center font-mono text-[9px] sm:text-[10px] text-neutral-400 font-bold uppercase tracking-wider leading-tight mt-0.5">
                  <div>{item.label1}</div>
                  <div>{item.label2}</div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>

      {/* STEP 9: Bottom Scroll Down Callout */}
      <motion.div
        custom={0.7}
        initial="hidden"
        animate={currentAnimation}
        variants={fadeInUp}
        className="mt-8 sm:mt-10 flex flex-col items-center justify-center text-center font-mono text-xs text-neutral-500 tracking-widest uppercase"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("about");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              window.history.pushState(null, "", "#about");
            }
          }}
          className="flex flex-col items-center gap-1 hover:text-neutral-300 transition-colors group min-h-[44px] justify-center"
        >
          <span>SCROLL DOWN TO VIEW EVIDENCE</span>
          <ChevronDown size={18} className="text-[#dc2626] animate-bounce" />
        </a>
      </motion.div>

    </section>
  );
};

export default HeroSection;


