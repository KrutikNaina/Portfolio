import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mainBg from "../../assets/main-bg.png";
import lampImg from "../../assets/lamp.png";
import handcuffsImg from "../../assets/handcuffs.png";
import policeTapeImg from "../../assets/police-tape.png";
import wantedPaperImg from "../../assets/wanted-paper.png";
import confidentialFileImg from "../../assets/confidential-file.png";
import fingerprintImg from "../../assets/fingerprint.png";
import evidenceImg from "../../assets/evidence.png";
import krutikImg from "../../assets/krutik.png";
import policeBadgeImg from "../../assets/police-badegs.png";
import avatarImg from "/icons/avtar.png";

/**
 * CaseFileLoader Component
 * Dark cinematic crime-investigation preloader for Krutik Naina portfolio.
 * Performs real preloading of critical above-the-fold assets & fonts,
 * then smoothly fades away to trigger the sequential hero reveal.
 */
const CaseFileLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [flash, setFlash] = useState(false);

  // Critical assets list to preload
  const criticalAssets = useMemo(
    () => [
      mainBg,
      krutikImg,
      policeBadgeImg,
      avatarImg,
      fingerprintImg,
      wantedPaperImg,
      lampImg,
      handcuffsImg,
      confidentialFileImg,
      policeTapeImg,
      evidenceImg,
    ],
    []
  );

  // Dynamic progress text based on current percentage
  const getProgressText = (pct) => {
    if (pct >= 100) return "CASE FILE VERIFIED";
    if (pct >= 90) return "CASE FILE READY";
    if (pct >= 72) return "LOADING TECH STACK...";
    if (pct >= 52) return "LOADING PROJECT RECORDS...";
    if (pct >= 32) return "VERIFYING IDENTITY...";
    if (pct >= 12) return "LOADING EVIDENCE...";
    return "OPENING CASE FILE...";
  };

  useEffect(() => {
    let isMounted = true;
    let assetsLoaded = false;
    let targetProgress = 0;

    // Preload all critical assets in background
    const preloadImage = (src) => {
      return new Promise((resolve) => {
        if (!src) return resolve();
        const img = new Image();
        img.src = src;
        if (img.complete) {
          resolve();
        } else {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      });
    };

    const imagePromises = criticalAssets.map((src) => preloadImage(src));
    const fontPromise = document.fonts
      ? document.fonts.ready.catch(() => {})
      : Promise.resolve();

    Promise.all([...imagePromises, fontPromise]).then(() => {
      assetsLoaded = true;
    });

    // Choreographed progressive stepper to allow proper cinematic readability (~1.5s total)
    const startTime = Date.now();
    const duration = 1600; // 1.6s smooth cinematic progression

    const interval = setInterval(() => {
      if (!isMounted) return;
      const elapsed = Date.now() - startTime;
      const timeRatio = Math.min(1, elapsed / duration);

      // Smooth easeOut-style curve for progress pacing
      const calculatedPct = Math.round(timeRatio * 96);

      if (timeRatio >= 1 && assetsLoaded) {
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress((prev) => Math.max(prev, calculatedPct));
      }
    }, 40);

    // Fallback safety timeout
    const safetyTimeout = setTimeout(() => {
      if (isMounted) {
        setProgress(100);
        clearInterval(interval);
      }
    }, 2400);

    return () => {
      isMounted = false;
      clearInterval(interval);
      clearTimeout(safetyTimeout);
    };
  }, [criticalAssets]);

  // Handle completion state transition with proper pause to view CASE FILE VERIFIED
  useEffect(() => {
    if (progress >= 100 && !isDone) {
      // Trigger a very subtle document flash
      setFlash(true);
      const flashTimer = setTimeout(() => setFlash(false), 140);

      // Intentional pause at 100% so user clearly reads "CASE FILE VERIFIED" and sees green indicator
      const doneTimer = setTimeout(() => {
        setIsDone(true);
        if (onComplete) {
          onComplete();
        }
      }, 550);

      return () => {
        clearTimeout(flashTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [progress, isDone, onComplete]);

  // Text transition with typewriter feel
  const currentStatusText = getProgressText(progress);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="case-file-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.012, filter: "blur(2px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#07080a] text-neutral-200 select-none flex flex-col justify-between items-center p-4 sm:p-8 overflow-hidden pointer-events-auto"
        >
          {/* Subtle Flash Overlay */}
          {flash && (
            <div className="absolute inset-0 bg-white/10 pointer-events-none z-50 transition-opacity duration-150" />
          )}

          {/* Background Layer 1: Forensic Grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Background Layer 2: Subtle Red Atmospheric Glows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.12) 0%, transparent 60%),
                radial-gradient(circle at 10% 20%, rgba(185, 28, 28, 0.05) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(10, 15, 25, 0.8) 0%, transparent 50%)
              `,
            }}
          />

          {/* Background Layer 3: Faint Red Investigation Crosshairs / Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden sm:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="#ef4444"
              strokeWidth="0.5"
              strokeDasharray="4 8"
            />
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="#ef4444"
              strokeWidth="0.5"
              strokeDasharray="4 8"
            />
            <circle
              cx="50%"
              cy="50%"
              r="180"
              stroke="#ef4444"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="6 6"
              className="opacity-30"
            />
          </svg>

          {/* Background Layer 4: Faint Red Fingerprint Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 mix-blend-screen overflow-hidden">
            <img
              src={fingerprintImg}
              alt=""
              width="360"
              height="360"
              className="w-72 sm:w-96 h-72 sm:h-96 object-contain filter invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[320deg]"
            />
          </div>

          {/* Top Corner Confidential Header Tags */}
          <div className="w-full flex items-center justify-between z-10 font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400">
            <div className="flex items-center gap-2 border-l-2 border-[#a81c1c] pl-2 sm:pl-3">
              <span className="text-[#ef4444] font-bold">CLASSIFIED</span>
              <span className="hidden xs:inline text-neutral-400">// REF: KN-2025</span>
            </div>
            <div className="flex items-center gap-2 border-r-2 border-[#a81c1c] pr-2 sm:pr-3 text-right">
              <span className="hidden xs:inline text-neutral-400">TECH CRIME UNIT //</span>
              <span className="text-[#ef4444] font-bold">SECTOR-07</span>
            </div>
          </div>

          {/* Centerpiece Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto px-4 max-w-lg w-full">
            {/* Red Scanning Line sweep */}
            <div className="relative w-full flex flex-col items-center">
              <div className="absolute -inset-x-8 -inset-y-6 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    y: ["-100%", "250%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.4,
                    ease: "easeInOut",
                  }}
                  className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#ef4444] to-transparent shadow-[0_0_8px_#ef4444] opacity-40 motion-reduce:hidden"
                />
              </div>

              {/* Stencil KN Logo - Stage 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mb-3 sm:mb-4 relative"
              >
                <div className="text-5xl sm:text-7xl font-dossier font-black tracking-widest text-[#dc2626] drop-shadow-[0_0_20px_rgba(220,38,38,0.65)] leading-none select-none">
                  KN
                </div>
                {/* Underline Stencil Bar */}
                <div className="w-12 sm:w-16 h-1 bg-[#dc2626] mx-auto mt-1 shadow-[0_0_8px_rgba(220,38,38,0.7)]" />
              </motion.div>

              {/* Case File Badge - Stage 3 */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block border border-[#a81c1c]/80 bg-[#160a0a]/90 px-3 sm:px-4 py-1 mb-2 shadow-[0_0_12px_rgba(168,28,28,0.3)]"
              >
                <span className="font-mono font-bold text-xs sm:text-sm text-neutral-200 tracking-[0.2em] uppercase">
                  CONFIDENTIAL CASE FILE
                </span>
              </motion.div>

              {/* CASE ID Serial Tag - Stage 4 */}
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-[10px] sm:text-xs text-[#a81c1c] font-black tracking-widest uppercase mb-5 sm:mb-6"
              >
                CASE ID: DEV-07-006
              </motion.div>

              {/* Dynamic Status Progress Text - Stage 6 */}
              <div className="min-h-[24px] flex items-center justify-center gap-2 mb-3">
                <span
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    progress >= 100
                      ? "bg-[#22c55e] shadow-[0_0_8px_#22c55e]"
                      : "bg-[#ef4444] shadow-[0_0_8px_#ef4444] animate-pulse"
                  }`}
                />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentStatusText}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-neutral-300 uppercase"
                  >
                    {currentStatusText}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Horizontal Progress Bar - Stage 5 */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0.9 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="w-64 sm:w-80 h-1.5 sm:h-2 bg-[#12141a] border border-[#2b303c] rounded-full overflow-hidden p-[1px] relative shadow-[0_0_10px_rgba(0,0,0,0.8)]"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#991b1b] via-[#dc2626] to-[#ef4444] rounded-full shadow-[0_0_8px_#ef4444]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </motion.div>

              {/* Percentage Indicator */}
              <div className="mt-2 font-mono text-[10px] sm:text-xs text-neutral-400 tracking-widest">
                {progress}%
              </div>
            </div>
          </div>


          {/* Bottom Corner Details */}
          <div className="w-full flex items-center justify-between z-10 font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400">
            <div className="border-l-2 border-white/20 pl-2 sm:pl-3">
              <span className="hidden xs:inline text-neutral-400">CLEARANCE: </span>
              <span className="text-neutral-300 font-semibold">LEVEL 5 ACCESS</span>
            </div>
            <div className="border-r-2 border-white/20 pr-2 sm:pr-3 text-right">
              <span className="hidden xs:inline text-neutral-400">ARCHIVE STATUS: </span>
              <span className="text-neutral-300 font-semibold">
                {progress >= 100 ? "VERIFIED" : "INITIALIZING"}
              </span>
            </div>
          </div>

          {/* Foreground Scanline Texture */}
          <div className="absolute inset-0 pointer-events-none scanlines opacity-30 z-20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseFileLoader;
