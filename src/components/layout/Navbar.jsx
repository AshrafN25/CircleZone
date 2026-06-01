import React, { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDark, toggleDarkMode, onNavigateToAbout, onNavigateToHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Materi', href: '#pengertian' },
    { label: 'Unsur-Unsur', href: '#unsur-unsur' },
    { label: 'Rumus', href: '#keliling-luas' },
    { label: 'Materi SMK', href: '#materi-smk' },
    { label: 'Kalkulator', href: '#rumus' },
    { label: 'Latihan Soal', href: '#latihan-soal' }
  ];

  const handleNavClick = (href) => {
    // Check if we're on about page
    if (window.location.pathname === '/about') {
      // Navigate to home first, then scroll
      if (onNavigateToHome) {
        onNavigateToHome();
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Normal scroll behavior
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (window.location.pathname === '/about') {
      if (onNavigateToHome) {
        onNavigateToHome();
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-surface/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={handleLogoClick} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">trip_origin</span>
              <span className="font-display text-headline-md text-primary">CircleZone</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-body-md text-on-surface-variant dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                <span className="material-symbols-outlined text-on-surface dark:text-gray-300">
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
              </button>

              {/* CTA Buttons Group */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => handleNavClick('#pengertian')}
                  className="px-6 py-2 rounded-full bg-tertiary text-on-tertiary font-semibold hover:bg-tertiary-variant transition-colors"
                >
                  Mulai Belajar
                </button>
                <button
                  onClick={onNavigateToAbout}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-on-surface-variant dark:text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">person</span>
                  <span className="text-body-sm">About Me</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-on-surface dark:text-gray-300">
                  {isMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-64 bg-surface dark:bg-gray-900 shadow-xl z-40 md:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-body-md text-on-surface dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    onNavigateToAbout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
                >
                  <span className="material-symbols-outlined">person</span>
                  <span className="font-semibold">About Me</span>
                </button>
                <button
                  onClick={() => handleNavClick('#pengertian')}
                  className="w-full px-6 py-3 rounded-full bg-tertiary text-on-tertiary font-semibold hover:bg-tertiary-variant transition-colors"
                >
                  Mulai Belajar
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
