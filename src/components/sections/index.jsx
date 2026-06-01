// Export all section components
export { default as Hero } from './Hero';
export { default as Pengertian } from './Pengertian';
export { default as UnsurUnsur } from './UnsurUnsur';
export { default as NilaiPhi } from './NilaiPhi';
export { default as KelilingLuas } from './KelilingLuas';
export { default as MateriSMK } from './MateriSMK';
export { default as LatihanSoal } from './LatihanSoal';

// Simplified sections for remaining components
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FormulaCard from '../ui/FormulaCard';
import KalkulatorInput from '../ui/KalkulatorInput';
import SectionBadge from '../ui/SectionBadge';
import { hitungPanjangBusur, hitungLuasJuring, hitungGarisSinggung, hitungGSPL, hitungGSPD } from '../../utils/circleFormulas';
import { APLIKASI_SEHARI_HARI } from '../../data/materiData';

// Rumus Section Header
export const RumusHeader = () => {
  return (
    <section id="rumus" className="py-12 bg-gradient-to-b from-background to-surface dark:from-gray-950 dark:to-gray-900 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionBadge icon="calculate" className="mb-6">
            Kalkulator Interaktif
          </SectionBadge>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-display-md">5</span>
            </div>
            <h2 className="text-headline-lg text-primary">Kalkulator</h2>
          </div>
          <p className="text-body-lg text-on-surface-variant dark:text-gray-400 max-w-3xl mx-auto">
            Gunakan kalkulator interaktif untuk menghitung panjang busur, luas juring, 
            sudut pusat & keliling, dan garis singgung lingkaran dengan mudah.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export const SudutPusatKeliling = () => {
  const [sudutPusat, setSudutPusat] = useState('');
  const [sudutKeliling, setSudutKeliling] = useState('');
  
  const hasilKeliling = sudutPusat ? (parseFloat(sudutPusat) / 2).toFixed(2) : null;
  const hasilPusat = sudutKeliling ? (parseFloat(sudutKeliling) * 2).toFixed(2) : null;

  return (
    <section id="sudut-pusat-keliling-teori" className="py-20 bg-background dark:bg-gray-950 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-headline-lg text-primary mb-8">Sudut Pusat dan Sudut Keliling</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <FormulaCard
              title="Hubungan Sudut"
              icon="angle"
              formula="∠Pusat = 2 × ∠Keliling"
              description="Sudut pusat adalah dua kali sudut keliling jika menghadap busur yang sama"
            />
            
            {/* Kalkulator */}
            <div className="bg-surface dark:bg-gray-900 p-6 rounded-xl space-y-4">
              <h4 className="text-headline-sm">Kalkulator</h4>
              
              {/* Hitung Sudut Keliling */}
              <div className="space-y-2">
                <label className="text-body-sm text-on-surface-variant dark:text-gray-400">
                  Sudut Pusat (°)
                </label>
                <input
                  type="number"
                  value={sudutPusat}
                  onChange={(e) => setSudutPusat(e.target.value)}
                  placeholder="Contoh: 80"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-background dark:bg-gray-950 text-on-surface dark:text-gray-100"
                />
                {hasilKeliling && (
                  <div className="bg-tertiary/10 dark:bg-tertiary/20 p-3 rounded-lg">
                    <p className="text-body-sm text-on-surface-variant dark:text-gray-400">Sudut Keliling:</p>
                    <p className="text-headline-md text-tertiary font-bold">{hasilKeliling}°</p>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700"></div>

              {/* Hitung Sudut Pusat */}
              <div className="space-y-2">
                <label className="text-body-sm text-on-surface-variant dark:text-gray-400">
                  Sudut Keliling (°)
                </label>
                <input
                  type="number"
                  value={sudutKeliling}
                  onChange={(e) => setSudutKeliling(e.target.value)}
                  placeholder="Contoh: 40"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-background dark:bg-gray-950 text-on-surface dark:text-gray-100"
                />
                {hasilPusat && (
                  <div className="bg-secondary/10 dark:bg-secondary/20 p-3 rounded-lg">
                    <p className="text-body-sm text-on-surface-variant dark:text-gray-400">Sudut Pusat:</p>
                    <p className="text-headline-md text-secondary font-bold">{hasilPusat}°</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const PanjangBusur = () => {
  const [radius, setRadius] = useState('');
  const [sudut, setSudut] = useState('90');
  const panjang = radius && sudut ? hitungPanjangBusur(parseFloat(radius), parseFloat(sudut)).toFixed(2) : null;

  return (
    <section id="panjang-busur-kalkulator" className="py-20 bg-surface dark:bg-gray-900 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-headline-lg text-primary mb-8">Panjang Busur</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <FormulaCard
              title="Rumus Panjang Busur"
              icon="gesture"
              formula="AB = (α/360°) × 2πr"
              description="α = sudut pusat yang menghadap busur AB"
            />
            <div className="bg-background dark:bg-gray-950 p-6 rounded-xl space-y-4">
              <h4 className="text-headline-sm">Kalkulator</h4>
              <KalkulatorInput
                label="Jari-jari (cm)"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                unit="cm"
              />
              <div>
                <label className="block text-body-md font-semibold mb-2">Sudut Pusat (°)</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={sudut}
                  onChange={(e) => setSudut(e.target.value)}
                  className="w-full"
                />
                <p className="text-center text-headline-md text-primary mt-2">{sudut}°</p>
              </div>
              {panjang && (
                <div className="p-4 bg-tertiary/10 rounded-lg">
                  <p className="text-body-sm text-on-surface-variant dark:text-gray-400">Panjang Busur:</p>
                  <p className="text-headline-md text-tertiary font-bold">{panjang} cm</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const LuasJuring = () => {
  const [radius, setRadius] = useState('');
  const [sudut, setSudut] = useState('90');
  const luas = radius && sudut ? hitungLuasJuring(parseFloat(radius), parseFloat(sudut)).toFixed(2) : null;

  return (
    <section id="luas-juring-kalkulator" className="py-20 bg-background dark:bg-gray-950 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-headline-lg text-primary mb-8">Luas Juring</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <FormulaCard
              title="Rumus Luas Juring"
              icon="pie_chart"
              formula="L = (α/360°) × πr²"
              description="Luas juring seperti potongan pizza"
            />
            <div className="bg-surface dark:bg-gray-900 p-6 rounded-xl space-y-4">
              <h4 className="text-headline-sm">Kalkulator</h4>
              <KalkulatorInput
                label="Jari-jari (cm)"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                unit="cm"
              />
              <div>
                <label className="block text-body-md font-semibold mb-2">Sudut Pusat (°)</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={sudut}
                  onChange={(e) => setSudut(e.target.value)}
                  className="w-full"
                />
                <p className="text-center text-headline-md text-primary mt-2">{sudut}°</p>
              </div>
              {luas && (
                <div className="p-4 bg-tertiary/10 rounded-lg">
                  <p className="text-body-sm text-on-surface-variant dark:text-gray-400">Luas Juring:</p>
                  <p className="text-headline-md text-tertiary font-bold">{luas} cm²</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const GarisSinggung = () => {
  const [op, setOp] = useState('');
  const [r, setR] = useState('');
  const panjang = op && r ? hitungGarisSinggung(parseFloat(op), parseFloat(r)).toFixed(2) : null;

  return (
    <section id="garis-singgung-kalkulator" className="py-20 bg-surface dark:bg-gray-900 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-headline-lg text-primary mb-8">Garis Singgung Lingkaran</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <FormulaCard
              title="Panjang Garis Singgung"
              icon="timeline"
              formula="PT = √(PO² − r²)"
              description="Garis yang menyentuh lingkaran di satu titik"
            />
            <div className="bg-background dark:bg-gray-950 p-6 rounded-xl space-y-4">
              <h4 className="text-headline-sm">Kalkulator</h4>
              <KalkulatorInput
                label="Jarak PO (cm)"
                value={op}
                onChange={(e) => setOp(e.target.value)}
                unit="cm"
              />
              <KalkulatorInput
                label="Jari-jari r (cm)"
                value={r}
                onChange={(e) => setR(e.target.value)}
                unit="cm"
              />
              {panjang && panjang > 0 && (
                <div className="p-4 bg-tertiary/10 rounded-lg">
                  <p className="text-body-sm text-on-surface-variant dark:text-gray-400">Panjang Garis Singgung:</p>
                  <p className="text-headline-md text-tertiary font-bold">{panjang} cm</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Penerapan = () => {
  return (
    <section id="penerapan" className="py-20 bg-background dark:bg-gray-950 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-display-md">6</span>
            </div>
            <h2 className="text-headline-lg text-primary">Penerapan dalam Kehidupan</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APLIKASI_SEHARI_HARI.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface dark:bg-gray-900 p-6 rounded-xl"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block">{app.ikon}</span>
                <h3 className="text-headline-sm text-on-surface dark:text-gray-100 mb-3">{app.kategori}</h3>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400">{app.deskripsi}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
