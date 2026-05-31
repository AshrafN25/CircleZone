import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UNSUR_LINGKARAN } from '../../data/materiData';
import clsx from 'clsx';

const UnsurUnsur = () => {
  const [selectedPart, setSelectedPart] = useState(null);

  const selectedUnsur = UNSUR_LINGKARAN.find(u => u.id === selectedPart);

  return (
    <section id="unsur-unsur" className="py-20 bg-background dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-display-md">2</span>
            </div>
            <h2 className="text-headline-lg text-primary">Unsur-Unsur Lingkaran</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Interactive Diagram */}
            <div className="bg-surface dark:bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-headline-sm text-on-surface dark:text-gray-100 mb-6 text-center">
                Klik untuk melihat detail
              </h3>
              <svg viewBox="0 0 400 400" className="w-full">
                {/* Main Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke={selectedPart === 'jari-jari' || selectedPart === 'diameter' ? '#1976D2' : '#E0E0E0'}
                  strokeWidth="3"
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedPart('jari-jari')}
                />
                
                {/* Center Point */}
                <circle
                  cx="200"
                  cy="200"
                  r="6"
                  fill={selectedPart === 'titik-pusat' ? '#F44336' : '#757575'}
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedPart('titik-pusat')}
                />
                <text x="200" y="185" textAnchor="middle" fill="#F44336" fontSize="12" fontWeight="bold">O</text>
                
                {/* Radius */}
                <line
                  x1="200"
                  y1="200"
                  x2="320"
                  y2="200"
                  stroke={selectedPart === 'jari-jari' ? '#1976D2' : '#BDBDBD'}
                  strokeWidth={selectedPart === 'jari-jari' ? '3' : '2'}
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedPart('jari-jari')}
                />
                <text x="260" y="190" textAnchor="middle" fill="#1976D2" fontSize="12" fontWeight="bold">r</text>
                
                {/* Diameter */}
                <line
                  x1="80"
                  y1="200"
                  x2="320"
                  y2="200"
                  stroke={selectedPart === 'diameter' ? '#4CAF50' : '#E0E0E0'}
                  strokeWidth={selectedPart === 'diameter' ? '3' : '2'}
                  strokeDasharray="5,5"
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedPart('diameter')}
                />
                <text x="200" y="225" textAnchor="middle" fill="#4CAF50" fontSize="12" fontWeight="bold">d</text>
                
                {/* Arc */}
                <path
                  d="M 320 200 A 120 120 0 0 1 200 320"
                  fill="none"
                  stroke={selectedPart === 'busur' ? '#FFC107' : '#E0E0E0'}
                  strokeWidth={selectedPart === 'busur' ? '4' : '2'}
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedPart('busur')}
                />
                
                {/* Chord */}
                <line
                  x1="320"
                  y1="200"
                  x2="200"
                  y2="320"
                  stroke={selectedPart === 'tali-busur' ? '#9C27B0' : '#E0E0E0'}
                  strokeWidth={selectedPart === 'tali-busur' ? '3' : '2'}
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedPart('tali-busur')}
                />
                
                {/* Sector */}
                <path
                  d="M 200 200 L 320 200 A 120 120 0 0 1 200 320 Z"
                  fill={selectedPart === 'juring' ? 'rgba(255, 87, 34, 0.2)' : 'rgba(0, 0, 0, 0.05)'}
                  stroke={selectedPart === 'juring' ? '#FF5722' : 'transparent'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedPart('juring')}
                />
                
                {/* Segment */}
                <path
                  d="M 320 200 A 120 120 0 0 1 200 320 L 320 200 Z"
                  fill={selectedPart === 'tembereng' ? 'rgba(0, 188, 212, 0.2)' : 'transparent'}
                  stroke={selectedPart === 'tembereng' ? '#00BCD4' : 'transparent'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all"
                  onClick={() => setSelectedPart('tembereng')}
                />
                
                {/* Points */}
                <circle cx="320" cy="200" r="4" fill="#1976D2" />
                <circle cx="200" cy="320" r="4" fill="#1976D2" />
                <circle cx="80" cy="200" r="4" fill="#4CAF50" />
              </svg>
            </div>

            {/* Info Panel */}
            <div className="space-y-4">
              {selectedUnsur ? (
                <motion.div
                  key={selectedUnsur.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-surface dark:bg-gray-900 p-6 rounded-2xl border-2"
                  style={{ borderColor: selectedUnsur.warna }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${selectedUnsur.warna}20` }}
                    >
                      <span className="material-symbols-outlined text-2xl" style={{ color: selectedUnsur.warna }}>
                        {selectedUnsur.ikon}
                      </span>
                    </div>
                    <h3 className="text-headline-md" style={{ color: selectedUnsur.warna }}>
                      {selectedUnsur.nama}
                    </h3>
                  </div>
                  <p className="text-body-lg text-on-surface dark:text-gray-200">
                    {selectedUnsur.definisi}
                  </p>
                </motion.div>
              ) : (
                <div className="bg-surface dark:bg-gray-900 p-8 rounded-2xl text-center">
                  <span className="material-symbols-outlined text-6xl text-on-surface-variant dark:text-gray-600 mb-4 block">
                    touch_app
                  </span>
                  <p className="text-body-lg text-on-surface-variant dark:text-gray-400">
                    Klik pada diagram untuk melihat penjelasan setiap unsur lingkaran
                  </p>
                </div>
              )}

              {/* All Elements List */}
              <div className="grid grid-cols-2 gap-3">
                {UNSUR_LINGKARAN.map((unsur) => (
                  <button
                    key={unsur.id}
                    onClick={() => setSelectedPart(unsur.id)}
                    className={clsx(
                      'p-4 rounded-xl text-left transition-all',
                      selectedPart === unsur.id
                        ? 'bg-primary/10 border-2 border-primary'
                        : 'bg-surface dark:bg-gray-900 border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined" style={{ color: unsur.warna }}>
                        {unsur.ikon}
                      </span>
                      <span className="text-body-sm font-semibold text-on-surface dark:text-gray-200">
                        {unsur.nama.split('(')[0].trim()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnsurUnsur;
