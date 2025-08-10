import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Workflow from "./components/Workflow";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Achievements from "./components/Achievements";
import { Helmet } from 'react-helmet';
import SEO from "./components/SEO";

const App = () => {
  return (
    <>
    <div>
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
      {/* Page content */}
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Workflow />
        <SkillsSection />
        <ProjectSection />
        <EducationSection />
        <Achievements />
        <ContactSection />
        <Footer />
        <SEO />
      </div>
      {/* <Analytics /> */}
      </div>
    </>
  );
};

export default App;
