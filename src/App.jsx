import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Opportunities from './components/Opportunities';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or default to dark mode for developer aesthetic
    const saved = localStorage.getItem('harshit_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default dark navy theme as requested
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('harshit_theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('harshit_theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      {/* Global Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Main Navigation */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Opportunities />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
