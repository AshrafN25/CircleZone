import { useState, useEffect } from 'react';

/**
 * Hook untuk mengelola dark mode dengan localStorage persistence
 */
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    // Cek localStorage terlebih dahulu
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Fallback ke system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Simpan ke localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return [isDark, toggleDarkMode];
};
