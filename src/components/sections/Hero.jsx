import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../ui/SectionBadge';
import { CONTOH_BENDA_LINGKARAN } from '../../data/materiData';

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 dark:from-primary/10 dark:via-secondary/10 dark:to-tertiary/10 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge icon="school" className="mb-6">
              Proyek Matematika · Semester Genap 2026
            </SectionBadge>
            
            <h1 className="text-display-lg text-primary mb-6 font-display">
              CircleZone
            </h1>
            
            <motion.p 
              className="text-headline-md text-primary mb-4 font-semibold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Jelajahi Dunia Lingkaran
            </motion.p>
            
            <p className="text-body-lg text-on-surface-variant dark:text-gray-400 mb-8 max-w-xl">
              Website pembelajaran materi Lingkaran — dari unsur dasar, keliling, luas, hingga persamaan lingkaran. Semua yang perlu kamu tahu tentang lingkaran ada di sini.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo('pengertian')}
                className="px-8 py-3 rounded-full bg-tertiary text-on-tertiary font-semibold hover:bg-tertiary-variant transition-colors shadow-lg hover:shadow-xl"
              >
                Mulai Belajar
              </button>
              <button
                onClick={() => handleScrollTo('latihan-soal')}
                className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-on-primary transition-colors"
              >
                Lihat Latihan Soal
              </button>
            </div>

            {/* Contoh Benda */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {CONTOH_BENDA_LINGKARAN.map((benda, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-surface/50 dark:bg-gray-800/50 backdrop-blur-sm"
                >
                  <span className="material-symbols-outlined text-primary text-4xl">{benda.ikon}</span>
                  <span className="text-body-sm text-on-surface dark:text-gray-300 text-center">{benda.nama}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0]
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.2 },
              scale: { duration: 0.6, delay: 0.2 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="flex items-center justify-center max-w-full overflow-hidden"
          >
            <svg viewBox="0 0 400 400" className="w-full max-w-md">
              {/* Background Circle with animation */}
              <motion.circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="#1976D2"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Center Point with pulse */}
              <motion.circle 
                cx="200" 
                cy="200" 
                r="5" 
                fill="#F44336"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <text x="200" y="190" textAnchor="middle" fill="#F44336" fontSize="14" fontWeight="bold">O</text>
              
              {/* Radius with draw animation */}
              <motion.line 
                x1="200" 
                y1="200" 
                x2="350" 
                y2="200" 
                stroke="#1976D2" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <text x="275" y="190" textAnchor="middle" fill="#1976D2" fontSize="14" fontWeight="bold">r</text>
              
              {/* Diameter with draw animation */}
              <motion.line 
                x1="50" 
                y1="200" 
                x2="350" 
                y2="200" 
                stroke="#4CAF50" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              <text x="200" y="220" textAnchor="middle" fill="#4CAF50" fontSize="14" fontWeight="bold">d</text>
              
              {/* Arc with glow effect */}
              <motion.path
                d="M 350 200 A 150 150 0 0 1 200 350"
                fill="none"
                stroke="#FFC107"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(255, 193, 7, 0.6))' }}
              />
              
              {/* Sector Lines */}
              <motion.line 
                x1="200" 
                y1="200" 
                x2="200" 
                y2="350" 
                stroke="#FF5722" 
                strokeWidth="2" 
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              
              {/* Points on circle with scale animation */}
              <motion.circle 
                cx="350" 
                cy="200" 
                r="4" 
                fill="#1976D2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.5 }}
              />
              <motion.circle 
                cx="200" 
                cy="350" 
                r="4" 
                fill="#1976D2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.6 }}
              />
              <motion.circle 
                cx="50" 
                cy="200" 
                r="4" 
                fill="#4CAF50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.7 }}
              />
              
              {/* Labels */}
              <text x="360" y="205" fill="#1976D2" fontSize="14" fontWeight="bold">A</text>
              <text x="200" y="370" textAnchor="middle" fill="#1976D2" fontSize="14" fontWeight="bold">B</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
