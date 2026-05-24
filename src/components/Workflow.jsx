import { Layers, Terminal, Send, Cpu, Briefcase, Sparkles, Download } from "lucide-react";
import { motion } from "framer-motion";
import codeImg from "../assets/aboutus.png";
import { checklistItems } from "../constants";
import { Helmet } from 'react-helmet';

const Workflow = () => {
  const getIcon = (index) => {
    switch (index) {
      case 0: return <Layers size={16} className="text-[#00ffff]" />;
      case 1: return <Terminal size={16} className="text-[#9900ff]" />;
      case 2: return <Send size={16} className="text-[#00ffff]" />;
      case 3: return <Cpu size={16} className="text-[#9900ff]" />;
      case 4: return <Briefcase size={16} className="text-[#00ffff]" />;
      case 5: return <Sparkles size={16} className="text-[#9900ff]" />;
      default: return <Sparkles size={16} className="text-neutral-400" />;
    }
  };

  return (
    <div className="mt-20 relative">
      <Helmet>
        <title>Krutik Naina | Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Krutik Naina, showcasing front-end development projects and skills." />
        <meta name="keywords" content="Krutik Naina, Front-End Developer, React, Portfolio" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Krutik Naina | Full-Stack Developer" />
        <meta property="og:description" content="Explore the portfolio of Krutik Naina, a passionate front-end developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krutiknaina.com/" />
        <meta property="og:image" content="https://krutiknaina.com/og-image.jpg" />
      </Helmet>

      <h2 id="about" className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide scroll-mt-20 mb-12">
        About{" "}
        <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text font-bold">
          Me
        </span>
      </h2>

      <div className="flex flex-wrap justify-center items-center lg:items-stretch gap-8 lg:gap-0 max-w-6xl mx-auto">
        {/* Floating Image Section */}
        <div className="p-2 w-full lg:w-1/2 flex justify-center items-center relative mb-4 lg:mb-0">
          {/* Subtle Glow behind image */}
          <div className="absolute w-72 h-72 bg-[#00ffff]/5 rounded-full blur-[100px] pointer-events-none" />
          <motion.img
            src={codeImg}
            alt="Coding"
            className="max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] w-full h-auto drop-shadow-[0_10px_30px_rgba(0,255,255,0.15)] relative z-10"
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Structured Info Cards Grid Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checklistItems.map((item, index) => (
              <div 
                key={index} 
                className="group p-5 rounded-2xl bg-[#060713]/90 backdrop-blur-xl border border-white/5 hover:border-[#00ffff]/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:scale-[1.01] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#00ffff]/20 group-hover:bg-[#00ffff]/5 transition-all">
                      {getIcon(index)}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide group-hover:text-[#00ffff] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Download CV Button Container */}
          <div className="mt-8 flex justify-start">
            <a
              href="/icons/Krutik_Naina_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(153,0,255,0.4)] text-sm group"
            >
              <span>Download CV</span>
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Workflow;
