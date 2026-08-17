import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Shield, Crosshair, ChevronRight, Fingerprint, Eye } from "lucide-react";

/**
 * Case Steps Configuration
 */
const caseSteps = [
  { id: "home", code: "01", label: "ARREST REPORT", sub: "Subject Identification" },
  { id: "about", code: "02", label: "PROFILE DOSSIER", sub: "Background Findings" },
  { id: "skills", code: "03", label: "SKILLS ARSENAL", sub: "Tools of the Trade" },
  { id: "projects", code: "04", label: "PROJECT DOSSIERS", sub: "Confidential Cases" },
  { id: "education", code: "05", label: "EDUCATION LOG", sub: "Academic Credentials" },
  { id: "achievements", code: "06", label: "ACHIEVEMENTS", sub: "Commendations" },
  { id: "contact", code: "07", label: "CASE CLOSED", sub: "Final Dispatch" },
];

const CaseProgressHUD = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = caseSteps
        .map((step) => ({
          id: step.id,
          element: document.getElementById(step.id),
        }))
        .filter((item) => item.element !== null);

      const scrollPosition = window.scrollY + 250;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Investigation Case File Progress"
      className="hidden xl:flex fixed left-6 2xl:left-8 top-1/2 -translate-y-1/2 z-40 flex-col pointer-events-auto select-none"
    >
      {/* HUD Container */}
      <div className="relative bg-[#0d0f15]/95 border border-[#2c3242] rounded p-4 shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(185,28,28,0.15)] backdrop-blur-md w-56">
        
        {/* 4 Corner Screws */}
        <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
        <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
        <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />
        <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#374151] border border-[#6b7280] shadow-inner" />

        {/* Top Case Classification */}
        <div className="pb-2.5 mb-3 border-b border-white/10 flex items-center justify-between font-mono">
          <div>
            <div className="text-[10px] font-bold text-case-redBright tracking-widest uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-case-redBright animate-pulse" />
              <span>CASE FILE</span>
            </div>
            <div className="text-[9px] text-white font-bold tracking-wider">
              DEV-07-006
            </div>
          </div>
          <div className="text-right font-mono text-[10px] font-bold text-neutral-400">
            <span>{percent}%</span>
          </div>
        </div>

        {/* Vertical Stepper with active progress line */}
        <div className="relative space-y-1">
          
          {/* Background Track Line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-white/10" />

          {/* Animated Scroll Progress Fill Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-case-red to-case-redBright shadow-[0_0_8px_#ef4444]"
          />

          {caseSteps.map((step) => {
            const isActive = activeSection === step.id;

            return (
              <button
                key={step.id}
                type="button"
                onClick={() => scrollTo(step.id)}
                className={`relative w-full flex items-center gap-2.5 px-1 py-1 rounded text-left transition-all group ${
                  isActive
                    ? "text-white bg-case-redDark/20"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {/* Node Dot */}
                <div
                  className={`relative z-10 w-4.5 h-4.5 rounded-full flex items-center justify-center transition-all shrink-0 ${
                    isActive
                      ? "bg-[#11141c] border-2 border-case-redBright shadow-[0_0_8px_#ef4444]"
                      : "bg-[#0a0c10] border border-white/20 group-hover:border-white/50"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      isActive ? "bg-case-redBright animate-pulse" : "bg-neutral-600 group-hover:bg-neutral-400"
                    }`}
                  />
                </div>

                {/* Step Metadata */}
                <div className="flex-1 overflow-hidden font-mono">
                  <div className="flex items-center justify-between text-[9.5px] leading-none">
                    <span
                      className={`font-bold tracking-wider truncate uppercase ${
                        isActive ? "text-case-redBright font-black" : "text-neutral-300"
                      }`}
                    >
                      {step.code} {step.label}
                    </span>
                  </div>
                </div>

                {isActive && (
                  <ChevronRight size={11} className="text-case-redBright shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Status Footnote */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[8px] font-mono text-case-textDim uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <Eye size={10} className="text-case-red" />
            <span>SURVEILLANCE</span>
          </span>
          <span className="text-emerald-400 font-bold">ONLINE</span>
        </div>

      </div>
    </aside>
  );
};

export default CaseProgressHUD;
