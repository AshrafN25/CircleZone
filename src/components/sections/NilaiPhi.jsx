import React from 'react';
import { motion } from 'framer-motion';

const NilaiPhi = () => {
  return (
    <section id="nilai-phi" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background dark:from-primary/10 dark:via-secondary/10 dark:to-gray-950 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-6xl text-primary">functions</span>
              <h2 className="text-display-md text-primary">π</h2>
            </div>
            <h3 className="text-headline-lg text-on-surface dark:text-gray-100 mb-4">
              Nilai Phi (π)
            </h3>
            <p className="text-body-lg text-on-surface-variant dark:text-gray-400 max-w-2xl mx-auto">
              Phi (π) adalah konstanta yang mewakili perbandingan keliling lingkaran dengan diameternya. Nilainya selalu tetap untuk lingkaran apapun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-surface dark:bg-gray-900 p-8 rounded-2xl text-center border-2 border-primary/20">
              <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-4">Pecahan Biasa</h4>
              <p className="text-display-lg text-primary font-mono">22/7</p>
              <p className="text-body-md text-on-surface-variant dark:text-gray-400 mt-4">
                ≈ 3.142857...
              </p>
            </div>
            
            <div className="bg-surface dark:bg-gray-900 p-8 rounded-2xl text-center border-2 border-secondary/20">
              <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-4">Desimal</h4>
              <p className="text-display-lg text-secondary font-mono">3,14</p>
              <p className="text-body-md text-on-surface-variant dark:text-gray-400 mt-4">
                Lebih presisi: 3.14159...
              </p>
            </div>
          </div>

          <div className="bg-tertiary/10 dark:bg-tertiary/20 p-6 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-tertiary text-2xl">info</span>
              <div>
                <h5 className="text-body-md font-semibold text-on-surface dark:text-gray-100 mb-2">
                  Kapan Menggunakan?
                </h5>
                <ul className="space-y-2 text-body-md text-on-surface-variant dark:text-gray-400">
                  <li>• Gunakan π = <strong>22/7</strong> jika r/d merupakan kelipatan 7</li>
                  <li>• Gunakan π = <strong>3,14</strong> untuk nilai lainnya</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NilaiPhi;
