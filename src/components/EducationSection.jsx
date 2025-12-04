import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const educationData = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Marwadi University, Rajkot",
    duration: "2024 - 2026",
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Saurashtra University, Rajkot",
    duration: "2022 - 2024",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Virani High School, Rajkot",
    duration: "2020 - 2022",
  },
];

const EducationSection = () => {
  return (
    <div id="education" className="mt-20 px-4 max-w-6xl mx-auto scroll-mt-24"><Helmet>
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
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text">
          Education
        </span>
      </h2>

      <div className="relative">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00ffff] to-[#9900ff]" />

        {educationData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative w-full md:w-1/2 my-10 px-4 ${isLeft ? "md:pr-10 ml-0 md:ml-0 text-left" : "md:pl-10 ml-auto text-left"
                }`}
            >
              {/* Dot on center line */}
              <div
                className={`absolute top-1/2 w-4 h-4 bg-gradient-to-r from-[#00ffff] to-[#9900ff] rounded-full transform -translate-y-1/2 ${isLeft ? "right-[13px]" : "left-[15px]"
                  }`}
              ></div>

              {/* Connector line from dot to card */}
              <div
                className={`absolute top-1/2 h-1 bg-gradient-to-r from-[#00ffff] to-[#9900ff] transform -translate-y-1/2 ${isLeft ? "right-[1px] w-[20px]" : "left-[1px] w-[20px]"
                  }`}
              ></div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#00ffff40] transition-all duration-300">
                <div className="flex items-center gap-2 text-lg font-semibold text-white mb-1">
                  <FaGraduationCap className="text-[#00ffff]" />
                  {item.degree}
                </div>
                <div className="text-neutral-300 mb-2">{item.institution}</div>
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <FaCalendarAlt />
                  {item.duration}
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
