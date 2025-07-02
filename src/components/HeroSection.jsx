import { Helmet } from 'react-helmet';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 overflow-hidden scroll-mt-[120px] text-white"
    >
      <Helmet>
        <title>Krutik Naina | Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Krutik Naina, showcasing front-end development projects and skills." />
        <meta name="keywords" content="Krutik Naina, Full-Stack Developer, React, Portfolio" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Krutik Naina | Full-Stack Developer" />
        <meta property="og:description" content="Explore the portfolio of Krutik Naina, a passionate full-stack developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krutiknaina.com/" />
        <meta property="og:image" content="https://krutiknaina.com/og-image.jpg" />
      </Helmet>

      {/* Floating Tech Icons */}
      <img src="/icons/react.png" alt="React" className="absolute w-10 sm:w-12 animate-float1 top-[10%] left-[5%] opacity-80" />
      <img src="/icons/node.png" alt="Node" className="absolute w-12 sm:w-14 animate-float2 top-[50%] right-[8%] opacity-80" />
      <img src="/icons/tailwind.png" alt="Tailwind" className="absolute w-8 sm:w-10 animate-float3 bottom-[30%] left-[15%] opacity-80" />
      <img src="/icons/git.png" alt="Git" className="absolute w-8 sm:w-10 animate-float2 top-[12%] right-[5%] opacity-80" />
      <img src="/icons/python.svg" alt="Python" className="absolute w-10 sm:w-12 animate-float1 top-[20%] left-[45%] opacity-80" />

      {/* Hero Content */}
      <h3 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-center leading-tight z-10">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-[#00ffff] to-[#9900ff] text-transparent bg-clip-text">
          Krutik Naina
        </span>
      </h3>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center text-white mt-4 z-10">
        Passionate{" "}
        <span className="text-[#00ffff]">
          <Typewriter
            words={['Full-Stack Developer 🚀', 'Web Developer', 'Problem Solver']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>


      <p className="mt-6 text-base sm:text-lg text-center text-white max-w-3xl z-10">
        I specialize in building modern, responsive websites using React, Node.js, Tailwind CSS & more. Let's bring ideas to life — from concept to clean, scalable code.
      </p>

      <div className="flex justify-center mt-6 z-10">
        <a
          href="#projects"
          className="backdrop-blur-md bg-white/5 text-white py-2 px-4 sm:py-3 sm:px-6 mx-2 rounded-md border border-white/10 hover:border-white/30 transition duration-300"
        >
          Show my work →
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
