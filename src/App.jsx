import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import AIChatPanel from './components/ai/AIChatPanel';
import AIChatButton from './components/ai/AIChatButton';
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

  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Navbar */}
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          onChatOpen={() => setIsChatOpen(true)}
        />

        {/* Main Content */}
        <main className="flex-1">
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

      {/* Footer */}
      <Footer />

      {/* AI Chat */}
      <AIChatButton onClick={() => setIsChatOpen(true)} />
      <AIChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;
