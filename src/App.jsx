import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="app-container">
      {/* Background Glows */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      <div className="bg-glow glow-3"></div>

      {/* Header Navigation */}
      <Navbar isLightMode={isLightMode} onToggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Certifications />
        <Projects />
        <Experience />
        <Education />
        <GitHub />
        <Contact />
      </main>

      {/* Footer & Floating Widgets */}
      <Footer />
      <ScrollTop />
    </div>
  );
}
