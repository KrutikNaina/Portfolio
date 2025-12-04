import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  const contacts = [
    {
      icon: <FaEnvelope size={22} />,
      title: "Email",
      value: "krutiknaina29@gmail.com",
      link: "mailto:krutiknaina29@gmail.com",
    },
    {
      icon: <FaLinkedin size={22} />,
      title: "LinkedIn",
      value: "linkedin.com/in/krutiknaina",
      link: "https://www.linkedin.com/in/krutiknaina",
    },
    {
      icon: <FaGithub size={22} />,
      title: "Github",
      value: "github.com/krutiknaina",
      link: "https://github.com/krutiknaina",
    },
    {
      icon: <FaMapMarkerAlt size={22} />,
      title: "Location",
      value: "Rajkot, India",
      link: "https://maps.app.goo.gl/fgRYxkBWHAE76dnFA",
    },
  ];

  return (
    <div id="contact" className="mt-20 px-4 max-w-5xl mx-auto scroll-mt-24">
      <Helmet>
        <title>Contact | Krutik Naina</title>
      </Helmet>

      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-14">
        Contact{" "}
        <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text">
          Me
        </span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((item, index) => (
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 25px #00ffff40",
            }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl 
            backdrop-blur-lg cursor-pointer text-center 
            hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-[#00ffff] mx-auto justify-items-center mb-3">{item.icon}</div>
            <div className="text-white font-semibold">{item.title}</div>
            <div className="text-neutral-300 text-sm mt-1">{item.value}</div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
