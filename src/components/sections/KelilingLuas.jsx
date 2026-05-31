import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FormulaCard from '../ui/FormulaCard';
import KalkulatorInput from '../ui/KalkulatorInput';
import { hitungKeliling, hitungLuas } from '../../utils/circleFormulas';

const KelilingLuas = () => {
  const [radiusK, setRadiusK] = useState('');
  const [radiusL, setRadiusL] = useState('');

  const keliling = radiusK ? hitungKeliling(parseFloat(radiusK)).toFixed(2) : null;
  const luas = radiusL ? hitungLuas(parseFloat(radiusL)).toFixed(2) : null;

  return (
    <section id="keliling-luas" className="py-20 bg-surface dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-display-md">3</span>
            </div>
            <h2 className="text-headline-lg text-primary">Keliling & Luas Lingkaran</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Keliling */}
            <div className="space-y-6">
              <FormulaCard
                title="Keliling Lingkaran"
                icon="restart_alt"
                formula="K = 2πr atau K = πd"
                description="Keliling adalah panjang seluruh tepi lingkaran"
              />
              
              <div className="bg-background dark:bg-gray-950 p-6 rounded-xl">
                <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-4">
                  Kalkulator Keliling
                </h4>
                <KalkulatorInput
                  label="Jari-jari (r) dalam cm"
                  value={radiusK}
                  onChange={(e) => setRadiusK(e.target.value)}
                  result={keliling}
                  formula="K = 2 × π × r"
                  unit="cm"
                />
              </div>

              <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl">
                <h5 className="text-body-md font-semibold text-on-surface dark:text-gray-100 mb-3">
                  Contoh Soal
                </h5>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-2">
                  Jari-jari lingkaran 14 cm. Hitung kelilingnya!
                </p>
                <div className="space-y-1 text-body-sm font-mono text-on-surface dark:text-gray-300">
                  <p>K = 2 × 22/7 × 14</p>
                  <p>K = 2 × 22 × 2</p>
                  <p className="text-tertiary font-bold">K = 88 cm</p>
                </div>
              </div>
            </div>

            {/* Luas */}
            <div className="space-y-6">
              <FormulaCard
                title="Luas Lingkaran"
                icon="pie_chart"
                formula="L = πr²"
                description="Luas adalah daerah yang berada di dalam lingkaran"
              />
              
              <div className="bg-background dark:bg-gray-950 p-6 rounded-xl">
                <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-4">
                  Kalkulator Luas
                </h4>
                <KalkulatorInput
                  label="Jari-jari (r) dalam cm"
                  value={radiusL}
                  onChange={(e) => setRadiusL(e.target.value)}
                  result={luas}
                  formula="L = π × r²"
                  unit="cm²"
                />
              </div>

              <div className="bg-secondary/10 dark:bg-secondary/20 p-6 rounded-xl">
                <h5 className="text-body-md font-semibold text-on-surface dark:text-gray-100 mb-3">
                  Contoh Soal
                </h5>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400 mb-2">
                  Jari-jari lingkaran 7 cm. Hitung luasnya!
                </p>
                <div className="space-y-1 text-body-sm font-mono text-on-surface dark:text-gray-300">
                  <p>L = 22/7 × 7²</p>
                  <p>L = 22/7 × 49</p>
                  <p className="text-tertiary font-bold">L = 154 cm²</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabel Hubungan */}
          <div className="bg-gradient-to-br from-primary/5 to-tertiary/5 dark:from-primary/10 dark:to-tertiary/10 p-8 rounded-2xl mb-12">
            <h3 className="text-headline-md text-on-surface dark:text-gray-100 mb-6 text-center">
              Tabel Hubungan Keliling dan Luas
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-body-md">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left p-4 text-on-surface dark:text-gray-100">Komponen</th>
                    <th className="text-left p-4 text-on-surface dark:text-gray-100">Diketahui r (Jari-jari)</th>
                    <th className="text-left p-4 text-on-surface dark:text-gray-100">Diketahui d (Diameter)</th>
                  </tr>
                </thead>
                <tbody className="text-on-surface-variant dark:text-gray-400">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-semibold">Keliling (K)</td>
                    <td className="p-4 font-mono">K = 2πr</td>
                    <td className="p-4 font-mono">K = πd</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-semibold">Luas (L)</td>
                    <td className="p-4 font-mono">L = πr²</td>
                    <td className="p-4 font-mono">L = ¼πd²</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Jari-jari (r)</td>
                    <td className="p-4 font-mono">–</td>
                    <td className="p-4 font-mono">r = d/2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KelilingLuas;
