import React from "react";
import mainBg from "../../assets/main-bg.png";
import lampImg from "../../assets/lamp.png";
import handcuffsImg from "../../assets/handcuffs.png";
import fingerprintImg from "../../assets/fingerprint.png";
import notesCardImg from "../../assets/notes-card.png";
import collegePhotoImg from "../../assets/college-photo.png";
import wantedTagImg from "../../assets/wanted-tag.png";

/**
 * CrimeSceneBackground Component
 * Clean, high-performance GPU-friendly Detective Investigation Environment
 * Ultra-clean concrete texture, forensic grid, and atmospheric red ambient lighting
 */
const CrimeSceneBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full min-h-screen bg-case-black text-case-text overflow-x-hidden ${className}`}>
      
      {/* =========================================================================
          LAYER 1: BASE WALL & CONCRETE GRUNGE TEXTURE
          ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden will-change-transform transform-gpu">
        {/* Main Background Image */}
        <img
          src={mainBg}
          alt=""
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity filter brightness-75 contrast-125 scale-105"
        />

        {/* Dark Vignette Gradients */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07080a]/80 to-[#07080a]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080a]/90 via-[#07080a]/50 to-[#07080a]/95" />

        {/* Forensic Grid Matrix */}
        <div 
          className="absolute inset-0 opacity-[0.02] hidden sm:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
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
          LAYER 2: AMBIENT INVESTIGATION LIGHTING
          ========================================================================= */}
      <div 
        className="fixed inset-0 z-[1] pointer-events-none select-none overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 100% 0%, rgba(245, 158, 11, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 0% 15%, rgba(107, 20, 20, 0.12) 0%, transparent 35%),
            radial-gradient(circle at 100% 50%, rgba(8, 145, 178, 0.03) 0%, transparent 30%),
            radial-gradient(circle at 0% 90%, rgba(185, 28, 28, 0.04) 0%, transparent 35%)
          `
        }}
      />

      {/* =========================================================================
          LAYER 3: CALIBRATED DESK DECORATION EVIDENCE ASSETS (Z-INDEX 1)
          ========================================================================= */}
      <div className="fixed inset-0 z-[1] pointer-events-none select-none overflow-hidden transform-gpu">
        
        {/* 1. TOP-RIGHT: Overhead Investigation Desk Lamp */}
        <div className="hidden sm:block absolute -top-6 -right-4 sm:right-2 md:right-8 w-44 sm:w-56 md:w-64 opacity-75 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
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
        <div className="absolute top-16 -left-4 sm:left-4 w-24 sm:w-36 opacity-20 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
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

        {/* 3. PINNED STICKY NOTES EVIDENCE (notes-card.png) */}
        <div className="hidden lg:block absolute top-[26%] -left-6 xl:left-2 2xl:left-6 w-36 xl:w-44 opacity-45 xl:opacity-65 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]">
          <img 
            src={notesCardImg} 
            alt="Confidential Notes Evidence" 
            width="200"
            height="180"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain transform -rotate-6" 
          />
        </div>

        {/* 4. DISTRESSED WANTED TAG (wanted-tag.png) */}
        <div className="hidden lg:block absolute top-[40%] -right-6 xl:right-2 2xl:right-6 w-36 xl:w-44 opacity-40 xl:opacity-60 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]">
          <img 
            src={wantedTagImg} 
            alt="Wanted Evidence Tag" 
            width="190"
            height="150"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain transform rotate-6" 
          />
        </div>

        {/* 5. TAPED INSTITUTION EVIDENCE PHOTO (college-photo.png) */}
        <div className="hidden sm:block absolute bottom-6 right-2 sm:right-6 xl:right-10 w-36 sm:w-44 xl:w-52 opacity-40 xl:opacity-55 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
          <img 
            src={collegePhotoImg} 
            alt="Institution Archive Evidence" 
            width="210"
            height="190"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain transform rotate-6" 
          />
        </div>

        {/* 6. DISCARDED HANDCUFFS (handcuffs.png) */}
        <div className="hidden sm:block absolute bottom-6 left-2 sm:left-6 xl:left-10 w-36 sm:w-44 xl:w-52 opacity-35 xl:opacity-50 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]">
          <img 
            src={handcuffsImg} 
            alt="Handcuffs Evidence" 
            width="240"
            height="240"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain transform -rotate-12" 
          />
        </div>

      </div>

      {/* =========================================================================
          LAYER 4: RED CASE INVESTIGATION STRINGS / THREADS (Z-INDEX 2)
          ========================================================================= */}
      <div className="fixed inset-0 z-[2] pointer-events-none select-none overflow-hidden transform-gpu">
        <svg className="w-full h-full opacity-60 sm:opacity-75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="redCaseLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#991b1b" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.9" />
            </linearGradient>
            <filter id="redLineGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#ef4444" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Left Edge Red Case Threads */}
          <g>
            <line x1="28" y1="130" x2="110" y2="380" stroke="url(#redCaseLineGrad)" strokeWidth="1.8" filter="url(#redLineGlow)" />
            <line x1="110" y1="380" x2="45" y2="760" stroke="url(#redCaseLineGrad)" strokeWidth="1.4" strokeDasharray="5 3" />
            
            {/* Red Pin Markers */}
            <circle cx="28" cy="130" r="5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
            <circle cx="28" cy="130" r="1.5" fill="#ffffff" />

            <circle cx="110" cy="380" r="5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
            <circle cx="110" cy="380" r="1.5" fill="#ffffff" />

            <circle cx="45" cy="760" r="5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
            <circle cx="45" cy="760" r="1.5" fill="#ffffff" />
          </g>

          {/* Right Edge Red Case Threads */}
          <g>
            <line x1="calc(100% - 50px)" y1="150" x2="calc(100% - 130px)" y2="480" stroke="url(#redCaseLineGrad)" strokeWidth="1.8" filter="url(#redLineGlow)" />
            <line x1="calc(100% - 130px)" y1="480" x2="calc(100% - 55px)" y2="820" stroke="url(#redCaseLineGrad)" strokeWidth="1.4" />

            {/* Red Pin Markers */}
            <circle cx="calc(100% - 50px)" cy="150" r="5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
            <circle cx="calc(100% - 50px)" cy="150" r="1.5" fill="#ffffff" />

            <circle cx="calc(100% - 130px)" cy="480" r="5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
            <circle cx="calc(100% - 130px)" cy="480" r="1.5" fill="#ffffff" />

            <circle cx="calc(100% - 55px)" cy="820" r="5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
            <circle cx="calc(100% - 55px)" cy="820" r="1.5" fill="#ffffff" />
          </g>
        </svg>
      </div>

      {/* =========================================================================
          LAYER 5: CENTER CONTENT CONTAINER (Z-INDEX 10)
          ========================================================================= */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        <main className="w-full flex-1">
          {children}
        </main>
      </div>

      {/* =========================================================================
          LAYER 6: FOREGROUND SCANLINE
          ========================================================================= */}
      <div className="fixed inset-0 z-30 pointer-events-none select-none scanlines opacity-20 transform-gpu" />
    </div>
  );
};

export default CrimeSceneBackground;


