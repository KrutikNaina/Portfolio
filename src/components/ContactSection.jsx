import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const contacts = [
    {
      icon: <FaEnvelope size={20} />,
      title: "Email",
      value: "krutiknaina29@gmail.com",
      link: "mailto:krutiknaina29@gmail.com",
    },
    {
      icon: <FaLinkedin size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/krutiknaina",
      link: "https://www.linkedin.com/in/krutiknaina",
    },
    {
      icon: <FaGithub size={20} />,
      title: "Github",
      value: "github.com/krutiknaina",
      link: "https://github.com/krutiknaina",
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: "Location",
      value: "Rajkot, India",
      link: "https://maps.app.goo.gl/fgRYxkBWHAE76dnFA",
    },
  ];

  return (
    <div id="contact" className="relative mt-20 px-4 max-w-5xl mx-auto scroll-mt-24">
      <Helmet>
        <title>Contact | Krutik Naina</title>
      </Helmet>

      {/* Background Ambient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-84 h-84 bg-[#00ffff]/5 rounded-full blur-[100px] pointer-events-none" />

      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-14 relative z-10">
        Contact{" "}
        <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text font-bold">
          Me
        </span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {contacts.map((item, index) => (
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl p-[1px] bg-white/5 hover:bg-gradient-to-br hover:from-[#00ffff]/30 hover:to-[#9900ff]/30 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(0,255,255,0.06)] hover:-translate-y-1 block"
          >
            <div className="relative backdrop-blur-xl bg-[#060713]/90 rounded-[15px] p-6 flex flex-col items-center justify-center h-full text-center">
              <div className="text-[#00ffff] group-hover:scale-110 transition-transform duration-300 mb-3 bg-white/5 p-3 rounded-xl border border-white/10 group-hover:border-[#00ffff]/20 group-hover:bg-[#00ffff]/5">
                {item.icon}
              </div>
              <div className="text-white font-bold tracking-wide group-hover:text-[#00ffff] transition-colors">{item.title}</div>
              <div className="text-neutral-400 text-sm mt-2 font-medium break-all">{item.value}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
