import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">trip_origin</span>
              <span className="font-display text-headline-md text-primary">CircleZone</span>
            </div>
            <p className="text-body-md text-on-surface-variant dark:text-gray-400 max-w-md">
              Belajar lingkaran jadi lebih mudah dan menyenangkan. Dari unsur dasar hingga persamaan lingkaran, semua tersedia lengkap di sini.
            </p>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:-ml-8">
            {/* Links */}
            <div>
              <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-4">Navigasi</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#pengertian" className="text-body-md text-on-surface-variant dark:text-gray-400 hover:text-primary transition-colors">
                    Materi
                  </a>
                </li>
                <li>
                  <a href="#unsur-unsur" className="text-body-md text-on-surface-variant dark:text-gray-400 hover:text-primary transition-colors">
                    Unsur-Unsur
                  </a>
                </li>
                <li>
                  <a href="#keliling-luas" className="text-body-md text-on-surface-variant dark:text-gray-400 hover:text-primary transition-colors">
                    Rumus
                  </a>
                </li>
                <li>
                  <a href="#materi-smk" className="text-body-md text-on-surface-variant dark:text-gray-400 hover:text-primary transition-colors">
                    Materi SMK
                  </a>
                </li>
                <li>
                  <a href="#rumus" className="text-body-md text-on-surface-variant dark:text-gray-400 hover:text-primary transition-colors">
                    Kalkulator
                  </a>
                </li>
                <li>
                  <a href="#latihan-soal" className="text-body-md text-on-surface-variant dark:text-gray-400 hover:text-primary transition-colors">
                    Latihan Soal
                  </a>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-headline-sm text-on-surface dark:text-gray-100 mb-4">Informasi</h4>
              <p className="text-body-sm text-on-surface-variant dark:text-gray-400 mb-4">
                © 2026 CircleZone
              </p>
              <p className="text-body-sm text-on-surface-variant dark:text-gray-400">
                Temukan rumus, contoh soal, dan latihan interaktif seputar materi Lingkaran — kapan saja dan di mana saja.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-body-sm text-on-surface-variant dark:text-gray-400">
            Proyek Semester Matematika • Ashraf Nauval Raasya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
