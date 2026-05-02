import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/effects/FloatingElements';
import CursorGlow from './components/effects/CursorGlow';
import './styles/globals.css';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (!isDark) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-dark-primary overflow-x-hidden">
      <CursorGlow />
      <FloatingElements />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
