import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import profilePhoto from '../assets/profile.jpg';

const AboutMe = ({ isDark, toggleDarkMode, onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} onNavigateToAbout={() => {}} onNavigateToHome={onNavigateHome} />
      
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6"
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-tertiary p-1">
                  <div className="w-full h-full rounded-full bg-surface dark:bg-gray-900 flex items-center justify-center overflow-hidden">
                    <img src={profilePhoto} alt="Ashraf Nauval Rasya" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-display-lg text-primary mb-2"
              >
                Ashraf Nauval Rasya
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-headline-sm text-on-surface-variant dark:text-gray-400 mb-4"
              >
                XI SIJA 1 / 7 • SMKN 7 Semarang
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="inline-block bg-gradient-to-r from-primary/10 to-tertiary/10 dark:from-primary/20 dark:to-tertiary/20 px-6 py-3 rounded-full"
              >
                <p className="text-body-lg text-on-surface dark:text-gray-300 italic">
                  "Kebahagiaan bukanlah tujuan, tapi perjalanan"
                </p>
              </motion.div>
            </div>

            {/* Content Cards */}
            <div className="space-y-6">
              {/* About Project Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 p-8 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-3xl text-primary">school</span>
                  <h2 className="text-headline-md text-on-surface dark:text-gray-100">Tentang Proyek</h2>
                </div>
                <p className="text-body-lg text-on-surface-variant dark:text-gray-400 leading-relaxed">
                  Website <strong className="text-primary">CircleZone</strong> adalah proyek semester genap mata pelajaran Matematika. 
                  Website pembelajaran materi Lingkaran — dari unsur dasar, keliling, luas, hingga persamaan lingkaran. 
                  Semua yang perlu kamu tahu tentang lingkaran ada di sini.
                </p>
              </motion.div>

              {/* Info Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="bg-surface dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-2xl text-secondary">account_balance</span>
                    <h3 className="text-headline-sm text-on-surface dark:text-gray-100">Sekolah</h3>
                  </div>
                  <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                    SMK Negeri 7 Semarang
                  </p>
                  <p className="text-body-sm text-on-surface-variant dark:text-gray-500 mt-1">
                    Jurusan: Sistem Informatika, Jaringan, dan Aplikasi
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="bg-surface dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-2xl text-tertiary">groups</span>
                    <h3 className="text-headline-sm text-on-surface dark:text-gray-100">Kelas</h3>
                  </div>
                  <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                    XI SIJA 1 / 7
                  </p>
                  <p className="text-body-sm text-on-surface-variant dark:text-gray-500 mt-1">
                    Semester Genap 2026
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="bg-surface dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-2xl text-primary">calculate</span>
                    <h3 className="text-headline-sm text-on-surface dark:text-gray-100">Mata Pelajaran</h3>
                  </div>
                  <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                    Matematika
                  </p>
                  <p className="text-body-sm text-on-surface-variant dark:text-gray-500 mt-1">
                    Materi: Lingkaran
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="bg-surface dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-2xl text-tertiary">calendar_month</span>
                    <h3 className="text-headline-sm text-on-surface dark:text-gray-100">Waktu Pengerjaan</h3>
                  </div>
                  <p className="text-body-md text-on-surface-variant dark:text-gray-400">
                    Mei - Juni 2026
                  </p>
                  <p className="text-body-sm text-on-surface-variant dark:text-gray-500 mt-1">
                    Proyek Semester Genap
                  </p>
                </motion.div>
              </div>

              {/* Tech Stack Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="bg-gradient-to-br from-tertiary/5 to-primary/5 dark:from-tertiary/10 dark:to-primary/10 p-8 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-3xl text-tertiary">code</span>
                  <h2 className="text-headline-md text-on-surface dark:text-gray-100">Teknologi yang Digunakan</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'JavaScript'].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-surface dark:bg-gray-900 rounded-full text-body-sm text-on-surface dark:text-gray-300 border border-gray-200 dark:border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-center pt-6"
              >
                <button
                  onClick={onNavigateHome}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-full font-semibold hover:bg-primary-variant transition-colors"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                  Kembali ke Beranda
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutMe;
