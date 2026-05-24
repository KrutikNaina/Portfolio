import { motion } from "framer-motion";
import { FaMedal, FaCalendarAlt } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const achievements = [
  {
    title: "Gen AI Study Completion",
    date: "Sep 2024 - Oct 2024",
    description: "Completed Google’s Generative AI Study Jam program focused on prompt engineering, model usage, and AI ethics.",
  },
  {
    title: "Hack The Mountains 5.0",
    date: "Issued Sep 2024",
    description: "Took part in Hack The Mountains 5.0, a 36-hour non-stop hackathon held at Marwadi University, where I worked on building a full-stack web application from scratch alongside my team.",
  },
];

const AchievementSection = () => {
  return (
    <div className="relative mt-20 px-4 max-w-5xl mx-auto">
      <Helmet>
        <title>Krutik Naina | Full-Stack Developer</title>
        <meta name="description" content="Krutik Naina's achievements and hackathon participations." />
        <meta name="keywords" content="Krutik Naina, Achievements, Hack The Mountains, Generative AI" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Background Ambient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#9900ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <h2 id="achievements" className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-12 scroll-mt-24 relative z-10">
        My{" "}
        <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text font-bold">
          Achievements
        </span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 relative z-10">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl p-[1px] bg-white/5 hover:bg-gradient-to-br hover:from-[#00ffff]/30 hover:to-[#9900ff]/30 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,255,0.06)] hover:-translate-y-1"
          >
            <div className="relative backdrop-blur-xl bg-[#060713]/90 rounded-[15px] p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 text-lg font-semibold text-white mb-2">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00ffff] group-hover:border-[#00ffff]/20 group-hover:bg-[#00ffff]/5 transition-all duration-300">
                    <FaMedal size={18} />
                  </div>
                  <span className="font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-300 transition-colors">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono mb-4 pl-0.5">
                  <FaCalendarAlt className="text-neutral-600" />
                  <span>{item.date}</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed pl-0.5">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
