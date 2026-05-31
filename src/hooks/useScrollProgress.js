import { useState, useEffect } from 'react';

/**
 * Hook untuk menghitung progress scroll halaman (0-100)
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    calculateProgress(); // Initial calculation
    window.addEventListener('scroll', calculateProgress);

    return () => {
      window.removeEventListener('scroll', calculateProgress);
    };
  }, []);

  return progress;
};
