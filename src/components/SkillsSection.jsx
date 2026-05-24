import { Helmet } from 'react-helmet';

const skillCategories = [
  {
    title: "Frontend & Languages",
    skills: [
      { name: "JavaScript", icon: "/icons/js.png" },
      { name: "ReactJS", icon: "/icons/react.png" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "NodeJS", icon: "/icons/node.png" },
      { name: "ExpressJS", icon: "/icons/express.png" },
      { name: "Python", icon: "/icons/python.svg" },
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB", icon: "/icons/MongoDB.png" },
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
    ]
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", icon: "/icons/docker-mark-blue.png" },
      { name: "AWS", icon: "/icons/AWS.png" },
      { name: "Azure", icon: "/icons/Azure.png" },
      { name: "DigitalOcean", icon: "/icons/DigitalOcean.png" },
      { name: "Git", icon: "/icons/git.png" },
      { name: "GitHub", icon: "/icons/github.png" },
    ]
  }
];

const SkillsSection = () => {
  return (
    <div className="relative mt-20 px-4">
      <Helmet>
        <title>Krutik Naina | Full-Stack Developer</title>
        <meta name="description" content="Explore Krutik Naina's technical skills across Frontend, Backend, Databases, and DevOps/Cloud platforms." />
        <meta name="keywords" content="Krutik Naina, Skills, React, NodeJS, AWS, DevOps, Full-Stack Developer" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-80 h-80 bg-[#00ffff]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-80 h-80 bg-[#9900ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <h2 id="skills" className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-16 scroll-mt-20 relative z-10">
        Skills &{" "}
        <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text font-bold">
          Abilities
        </span>
      </h2>

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="space-y-4">
            {/* Category Heading with subtle underline */}
            <div className="flex items-center gap-4">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide shrink-0">
                {category.title}
              </h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            {/* Grid of skill cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl p-[1px] bg-white/5 hover:bg-gradient-to-br hover:from-[#00ffff]/30 hover:to-[#9900ff]/30 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,255,0.06)] hover:-translate-y-0.5"
                >
                  <div className="relative backdrop-blur-xl bg-[#060713]/90 rounded-[15px] p-4 sm:p-5 flex flex-col items-center justify-center h-full">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-10 h-10 sm:w-12 sm:h-12 mb-3 object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" 
                    />
                    <p className="text-neutral-300 group-hover:text-white text-xs sm:text-sm font-semibold tracking-wide text-center transition-colors">
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
