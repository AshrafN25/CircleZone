import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import AIChatPanel from './components/ai/AIChatPanel';
import AIChatButton from './components/ai/AIChatButton';
import AboutMe from './pages/AboutMe';
import {
  Hero,
  Pengertian,
  UnsurUnsur,
  NilaiPhi,
  KelilingLuas,
  MateriSMK,
  RumusHeader,
  SudutPusatKeliling,
  PanjangBusur,
  LuasJuring,
  GarisSinggung,
  Penerapan,
  LatihanSoal
} from './components/sections';
import { useDarkMode } from './hooks/useDarkMode';
import { useActiveSection } from './hooks/useActiveSection';
import { useScrollProgress } from './hooks/useScrollProgress';

function App() {
  const [isDark, toggleDarkMode] = useDarkMode();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  
  const sectionIds = [
    'hero',
    'pengertian',
    'unsur-unsur',
    'nilai-phi',
    'keliling-luas',
    'materi-smk',
    'rumus',
    'panjang-busur',
    'luas-juring',
    'sudut-pusat-keliling',
    'garis-singgung',
    'penerapan',
    'latihan-soal'
  ];
  
  const activeSection = useActiveSection(sectionIds);
  const scrollProgress = useScrollProgress();

  // Handle page navigation
  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(path === '/about' ? 'about' : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    
    // Check initial path
    const path = window.location.pathname;
    if (path === '/about') {
      setCurrentPage('about');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToAbout = () => {
    window.history.pushState({}, '', '/about');
    setCurrentPage('about');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  // Render About Me page
  if (currentPage === 'about') {
    return <AboutMe isDark={isDark} toggleDarkMode={toggleDarkMode} onNavigateHome={navigateToHome} />;
  }

  // Render Home page
  return (
    <div className="min-h-screen bg-background dark:bg-gray-950 pt-16">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Navbar */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} onNavigateToAbout={navigateToAbout} onNavigateToHome={navigateToHome} />

      {/* Main Layout - flex container, sticky sidebar butuh parent tanpa overflow hidden */}
      <div className="flex w-full">
        {/* Sidebar - sticky, berhenti di atas footer */}
        <Sidebar
          activeSection={activeSection}
          onChatOpen={() => setIsChatOpen(true)}
        />

        {/* Main Content - overflow-x-hidden hanya di sini */}
        <main className="flex-1 min-w-0 overflow-x-hidden w-full">
          <Hero />
          <Pengertian />
          <UnsurUnsur />
          <NilaiPhi />
          <KelilingLuas />
          <MateriSMK />
          <RumusHeader />
          <PanjangBusur />
          <LuasJuring />
          <SudutPusatKeliling />
          <GarisSinggung />
          <Penerapan />
          <LatihanSoal />
        </main>
      </div>

      {/* Footer - full width, di luar flex container */}
      <Footer />

      {/* AI Chat */}
      <AIChatButton onClick={() => setIsChatOpen(true)} />
      <AIChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;
