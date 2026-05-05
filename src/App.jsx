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
import ScrollToTop from './components/effects/ScrollToTop';
import SocialFAB from './components/effects/SocialFAB';
import './styles/globals.css';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [prefilledMessage, setPrefilledMessage] = useState('');

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
      <ScrollToTop />
      <SocialFAB />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Services setPrefilledMessage={setPrefilledMessage} />
        <Testimonials />
        <Contact prefilledMessage={prefilledMessage} setPrefilledMessage={setPrefilledMessage} />
      </main>
      <Footer />
    </div>
  );
}
