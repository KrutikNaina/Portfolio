import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Workflow from "./components/Workflow";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import Achievements from "./components/Achievements";
import { Helmet } from "react-helmet";
import SEO from "./components/SEO";
import AIWidget from "./components/AIWidget";
import { CrimeSceneBackground, CaseProgressHUD } from "./components/common";

const App = () => {
  return (
    <>
      <Helmet>
        <title>CASE FILE #KN-2025: Krutik Naina | Full-Stack Architect</title>
        <meta
          name="description"
          content="Official case file and developer portfolio of Krutik Naina, showcasing full-stack infrastructure and web architecture."
        />
        <meta
          name="keywords"
          content="Krutik Naina, Full-Stack Developer, React, Node.js, Portfolio, Software Engineer, System Architect"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="CASE FILE #KN-2025: Krutik Naina | Full-Stack Architect" />
        <meta
          property="og:description"
          content="Explore the case files and technical architecture of Krutik Naina."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krutiknaina.com/" />
        <meta property="og:image" content="https://krutiknaina.com/og-image.jpg" />
      </Helmet>

      <CrimeSceneBackground>
        {/* Navigation Bar with Laser Scroll Progress */}
        <Navbar />

        {/* Floating Detective Case Progress HUD (Desktop Only) */}
        <CaseProgressHUD />

        {/* Protected Center Content Area */}
        <div className="max-w-6xl mx-auto pt-24 pb-16 px-4 sm:px-6 md:px-8 relative z-20">
          <HeroSection />
          <Workflow />
          <SkillsSection />
          <ProjectSection />
          <EducationSection />
          <Achievements />
          <ContactSection />
          {/* <AIWidget /> */}
          <Footer />
          <SEO />
        </div>
      </CrimeSceneBackground>
    </>
  );
};

export default App;

