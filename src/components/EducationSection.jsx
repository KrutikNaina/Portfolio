import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const educationData = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Marwadi University, Rajkot",
    duration: "2024 - 2026",
    status: "Currently Pursuing",
    active: true
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Saurashtra University, Rajkot",
    duration: "2022 - 2024",
    status: "Completed",
    active: false
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Virani High School, Rajkot",
    duration: "2020 - 2022",
    status: "Completed",
    active: false
  },
];

const EducationSection = () => {
  return (
    <div id="education" className="relative mt-20 px-4 max-w-6xl mx-auto scroll-mt-24">
      <Helmet>
        <title>Krutik Naina | Full-Stack Developer</title>
        <meta name="description" content="Krutik Naina's education history - MCA, BCA, and HSC details." />
        <meta name="keywords" content="Krutik Naina, Education, MCA, BCA, Full-Stack Developer" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Krutik Naina | Education & Credentials" />
        <meta property="og:description" content="Explore Krutik Naina's academic credentials and milestones." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krutiknaina.com/" />
      </Helmet>

      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00ffff]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#9900ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-16 relative z-10">
        My{" "}
        <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text font-bold">
          Education
        </span>
      </h2>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Thin elegant gradient line with subtle glow */}
        <div className="absolute left-[19px] md:left-1/2 top-0 transform md:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#00ffff] via-[#9900ff] to-[#00ffff]/20 shadow-[0_0_10px_rgba(0,255,255,0.2)] pointer-events-none" />

        {educationData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative w-full md:w-1/2 my-8 pl-10 pr-2 md:px-0 flex ${
                isLeft 
                  ? "md:pr-12 md:text-right justify-start md:justify-end ml-0" 
                  : "md:pl-12 md:text-left justify-start ml-auto"
              }`}
            >
              {/* Dot on center line */}
              <div
                className={`absolute top-1/2 w-4 h-4 rounded-full bg-[#060713] border-2 transform -translate-y-1/2 z-20 ${
                  isLeft 
                    ? "left-[12px] md:left-auto md:right-[-9px]" 
                    : "left-[12px] md:left-[-9px]"
                }`}
                style={{
                  borderColor: item.active ? '#00ffff' : '#9900ff',
                  boxShadow: item.active ? '0 0 10px #00ffff' : '0 0 10px #9900ff'
                }}
              >
                {/* Pulsing ring for active node */}
                {item.active && (
                  <span className="absolute inset-0 rounded-full bg-[#00ffff]/40 animate-ping" />
                )}
              </div>

              {/* Card Container */}
              <div className="w-full max-w-[460px] text-left relative group rounded-2xl p-[1px] bg-white/10 hover:bg-gradient-to-r hover:from-[#00ffff]/30 hover:to-[#9900ff]/30 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,255,0.06)] hover:-translate-y-0.5">
                <div className="relative backdrop-blur-xl bg-[#060713]/90 rounded-[15px] p-5 sm:p-6 flex flex-col h-full justify-between">
                  
                  <div>
                    {/* Header: Title + Badge */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-lg bg-white/5 border border-white/10 text-white ${
                          item.active 
                            ? "group-hover:border-[#00ffff]/30 group-hover:bg-[#00ffff]/5 transition-all text-[#00ffff]" 
                            : "group-hover:border-[#9900ff]/30 group-hover:bg-[#9900ff]/5 transition-all text-[#9900ff]"
                        }`}>
                          <FaGraduationCap size={18} />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-300">
                          {item.degree}
                        </h3>
                      </div>
                      
                      {/* Neon Status Badge */}
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide border uppercase whitespace-nowrap ${
                        item.status === "Currently Pursuing" 
                          ? "bg-[#00ffff]/10 border-[#00ffff]/30 text-[#00ffff] shadow-[0_0_8px_rgba(0,255,255,0.1)]" 
                          : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    {/* Institution */}
                    <div className="text-neutral-400 text-sm font-medium mb-4 pl-0.5">
                      {item.institution}
                    </div>
                  </div>

                  {/* Footer duration metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono mt-auto pt-3 border-t border-white/5">
                    <FaCalendarAlt size={12} className="text-neutral-600" />
                    <span>{item.duration}</span>
                  </div>

                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationSection;
