import React from "react";
import mainBg from "../../assets/main-bg.png";
import lampImg from "../../assets/lamp.png";
import handcuffsImg from "../../assets/handcuffs.png";
import policeTapeImg from "../../assets/police-tape.png";
import wantedPaperImg from "../../assets/wanted-paper.png";
import confidentialFileImg from "../../assets/confidential-file.png";
import fingerprintImg from "../../assets/fingerprint.png";
import evidenceImg from "../../assets/evidence.png";

/**
 * CrimeSceneBackground Component
 * High-performance GPU-friendly Detective Investigation Environment
 * Optimized: Consolidated ambient lighting, removed scroll event listeners for static fixed elements,
 * lazy-loaded offscreen/edge decorative images, async decoding.
 */
const CrimeSceneBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full min-h-screen bg-case-black text-case-text overflow-x-hidden ${className}`}>
      
      {/* =========================================================================
          LAYER 1: BASE WALL & CONCRETE GRUNGE TEXTURE
          ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden will-change-transform">
        {/* Main Background Image */}
        <img
          src={mainBg}
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter brightness-75 contrast-125 scale-105"
        />

        {/* Dark Vignette Gradients */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07080a]/80 to-[#07080a]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080a]/90 via-[#07080a]/50 to-[#07080a]/95" />

        {/* Forensic Grid Matrix — hidden on smallest screens to reduce visual noise */}
        <div 
          className="absolute inset-0 opacity-[0.025] hidden sm:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        {/* Smaller grid on mobile for subtle texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] sm:hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* =========================================================================
          LAYER 2: AMBIENT INVESTIGATION LIGHTING (Consolidated into single layer)
          ========================================================================= */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none select-none overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 100% 0%, rgba(245, 158, 11, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 0% 15%, rgba(107, 20, 20, 0.15) 0%, transparent 35%),
            radial-gradient(circle at 100% 50%, rgba(8, 145, 178, 0.04) 0%, transparent 30%),
            radial-gradient(circle at 0% 90%, rgba(185, 28, 28, 0.05) 0%, transparent 35%)
          `
        }}
      />

      {/* =========================================================================
          LAYER 3: PERIPHERAL RED INVESTIGATION STRINGS
          Desktop only — pure SVG, zero layout shifts
          ========================================================================= */}
      <div className="fixed inset-0 z-[2] pointer-events-none select-none overflow-hidden hidden lg:block">
        <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="redStringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7f1d1d" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#dc2626" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0.8" />
            </linearGradient>
            <filter id="stringGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#ef4444" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Left Edge Peripheral Threads */}
          <g>
            <line x1="30" y1="120" x2="120" y2="420" stroke="url(#redStringGrad)" strokeWidth="1.5" filter="url(#stringGlow)" />
            <line x1="120" y1="420" x2="40" y2="780" stroke="url(#redStringGrad)" strokeWidth="1.2" strokeDasharray="4 2" />
            
            <circle cx="30" cy="120" r="4.5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1.5" />
            <circle cx="30" cy="120" r="1.5" fill="#ffffff" />

            <circle cx="120" cy="420" r="4.5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1.5" />
            <circle cx="120" cy="420" r="1.5" fill="#ffffff" />

            <circle cx="40" cy="780" r="4.5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1.5" />
            <circle cx="40" cy="780" r="1.5" fill="#ffffff" />
          </g>

          {/* Right Edge Peripheral Threads */}
          <g>
            <line x1="calc(100% - 60px)" y1="160" x2="calc(100% - 130px)" y2="520" stroke="url(#redStringGrad)" strokeWidth="1.5" filter="url(#stringGlow)" />
            <line x1="calc(100% - 130px)" y1="520" x2="calc(100% - 50px)" y2="850" stroke="url(#redStringGrad)" strokeWidth="1.2" />

            <circle cx="calc(100% - 60px)" cy="160" r="4.5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1.5" />
            <circle cx="calc(100% - 60px)" cy="160" r="1.5" fill="#ffffff" />

            <circle cx="calc(100% - 130px)" cy="520" r="4.5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1.5" />
            <circle cx="calc(100% - 130px)" cy="520" r="1.5" fill="#ffffff" />

            <circle cx="calc(100% - 50px)" cy="850" r="4.5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1.5" />
            <circle cx="calc(100% - 50px)" cy="850" r="1.5" fill="#ffffff" />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 4: PERIPHERAL DECORATIVE ASSETS
          All decorative assets lazy-loaded with async decoding
          ========================================================================= */}
      <div className="fixed inset-0 z-[3] pointer-events-none select-none overflow-hidden">
        
        {/* 1. TOP-RIGHT: Overhead Investigation Desk Lamp */}
        <div className="hidden sm:block absolute -top-6 right-2 sm:right-6 md:right-12 w-40 sm:w-40 md:w-56 lg:w-64 opacity-75 sm:opacity-90 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
          <img 
            src={lampImg} 
            alt="" 
            width="256"
            height="256"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain transform -rotate-12 origin-top-right" 
          />
        </div>

        {/* 2. TOP-LEFT: Pinned Fingerprint Security Watermark */}
        <div className="absolute top-16 -left-4 sm:left-0 md:left-8 w-16 sm:w-28 md:w-44 opacity-10 sm:opacity-20 lg:opacity-40 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          <img 
            src={fingerprintImg} 
            alt="" 
            width="176"
            height="176"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain transform -rotate-12" 
          />
        </div>

        {/* 3. FAR-LEFT MARGIN: Pinned Confidential Folder */}
        <div className="hidden xl:block absolute top-[36%] -left-10 w-44 lg:w-52 opacity-35 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]">
          <img 
            src={confidentialFileImg} 
            alt="" 
            width="208"
            height="208"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain transform rotate-6 scale-95" 
          />
        </div>

        {/* 4. FAR-RIGHT MARGIN: Wanted Paper Artifact */}
        <div className="hidden xl:block absolute top-[45%] -right-12 w-40 lg:w-48 opacity-30 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]">
          <img 
            src={wantedPaperImg} 
            alt="" 
            width="192"
            height="192"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain transform -rotate-6" 
          />
        </div>

        {/* 5. BOTTOM-LEFT: Discarded Handcuffs */}
        <div className="hidden sm:block absolute bottom-4 sm:left-4 md:left-10 w-40 md:w-52 lg:w-60 opacity-40 lg:opacity-50 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]">
          <img 
            src={handcuffsImg} 
            alt="" 
            width="240"
            height="240"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain transform -rotate-12" 
          />
        </div>

        {/* 6. BOTTOM-RIGHT: Forensic Evidence Marker Bag */}
        <div className="hidden md:block absolute bottom-8 right-4 md:right-10 w-32 md:w-40 opacity-40 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
          <img 
            src={evidenceImg} 
            alt="" 
            width="160"
            height="160"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain transform rotate-12" 
          />
        </div>

        {/* 7. TOP & BOTTOM PERIPHERAL POLICE TAPE STRIPS */}
        <div className="hidden lg:block absolute -top-8 left-1/4 w-72 opacity-25 filter drop-shadow-lg transform -rotate-3">
          <img src={policeTapeImg} alt="" width="288" height="60" loading="lazy" decoding="async" className="w-full h-auto object-contain" />
        </div>
        <div className="hidden lg:block absolute -bottom-8 right-1/4 w-80 opacity-20 filter drop-shadow-lg transform rotate-2">
          <img src={policeTapeImg} alt="" width="320" height="60" loading="lazy" decoding="async" className="w-full h-auto object-contain" />
        </div>

      </div>

      {/* =========================================================================
          LAYER 5: CENTER CONTENT CONTAINER
          ========================================================================= */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        <main className="w-full flex-1">
          {children}
        </main>
      </div>

      {/* =========================================================================
          LAYER 6: FOREGROUND SCANLINE & GRAIN
          ========================================================================= */}
      <div className="fixed inset-0 z-30 pointer-events-none select-none scanlines opacity-40" />
    </div>
  );
};

export default CrimeSceneBackground;
