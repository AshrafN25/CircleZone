import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../ui/SectionBadge';

const Pengertian = () => {
  return (
    <section id="pengertian" className="py-20 bg-surface dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-display-md">1</span>
            </div>
            <h2 className="text-headline-lg text-primary">Pengertian Lingkaran</h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 rounded-2xl">
            <p className="text-body-lg text-on-surface dark:text-gray-200 leading-relaxed mb-6">
              Lingkaran adalah kumpulan titik-titik yang memiliki jarak sama terhadap satu titik tertentu yang disebut <strong className="text-primary">titik pusat</strong>. Jarak tersebut disebut <strong className="text-primary">jari-jari (r)</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-3">Definisi Formal</h4>
                <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                  Himpunan semua titik pada bidang yang berjarak sama dari suatu titik tetap yang disebut pusat lingkaran.
                </p>
              </div>
              
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-3">Sifat Utama</h4>
                <ul className="space-y-2 text-body-md text-on-surface-variant dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                    <span>Semua jari-jari memiliki panjang sama</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                    <span>Tidak memiliki sudut atau sisi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-tertiary text-sm mt-1">check_circle</span>
                    <span>Bentuk simetris sempurna</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pengertian;
