const Header = () => {
  return (
    <header className="fixed top-6 left-0 right-0 mx-auto  z-50 backdrop-blur-lg bg-white/10 border border-white/30 rounded-full px-6 md:px-10 py-3 shadow-lg w-[90%] max-w-4xl">
      <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-white font-semibold ">
        {/* Always visible */}
        <a href="/" className="hover:text-[#00ffff] transition-colors duration-300">Home</a>
        <a href="#about" className="hover:text-[#00ffff] transition-colors duration-300">About</a>
        <a href="#skills" className="hover:text-[#00ffff] transition-colors duration-300">Skills</a>
        <a href="#projects" className="hover:text-[#00ffff] transition-colors duration-300">Projects</a>

        {/* Desktop-only links */}
        <a href="#education" className="hidden md:inline hover:text-[#00ffff] transition-colors duration-300">Education</a>
        <a href="#achievements" className="hidden md:inline hover:text-[#00ffff] transition-colors duration-300">Achievements</a>
        <a href="#contact" className="hidden md:inline hover:text-[#00ffff] transition-colors duration-300">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
