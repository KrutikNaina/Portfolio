import React from "react";
import mainBg from "../../assets/main-bg.png";

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
            radial-gradient(circle at 100% 0%, rgba(245, 158, 11, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 0% 15%, rgba(107, 20, 20, 0.12) 0%, transparent 35%),
            radial-gradient(circle at 100% 50%, rgba(8, 145, 178, 0.03) 0%, transparent 30%),
            radial-gradient(circle at 0% 90%, rgba(185, 28, 28, 0.04) 0%, transparent 35%)
          `
        }}
      />

      {/* =========================================================================
          LAYER 3: CENTER CONTENT CONTAINER
          ========================================================================= */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        <main className="w-full flex-1">
          {children}
        </main>
      </div>

      {/* =========================================================================
          LAYER 4: FOREGROUND SCANLINE
          ========================================================================= */}
      <div className="fixed inset-0 z-30 pointer-events-none select-none scanlines opacity-20 transform-gpu" />
    </div>
  );
};

export default CrimeSceneBackground;

