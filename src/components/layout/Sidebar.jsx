import React from 'react';
import clsx from 'clsx';

const Sidebar = ({ activeSection, onChatOpen }) => {
  const sections = [
    { id: 'hero', label: 'Beranda', icon: 'home' },
    { id: 'pengertian', label: 'Pengertian', icon: 'info' },
    { id: 'unsur-unsur', label: 'Unsur-Unsur', icon: 'category' },
    { id: 'nilai-phi', label: 'Nilai Phi (π)', icon: 'functions' },
    { id: 'keliling-luas', label: 'Keliling & Luas', icon: 'calculate' },
    { id: 'materi-smk', label: 'Materi SMK', icon: 'school' },
    { id: 'panjang-busur', label: 'Panjang Busur', icon: 'gesture' },
    { id: 'luas-juring', label: 'Luas Juring', icon: 'pie_chart' },
    { id: 'sudut-pusat-keliling', label: 'Sudut Pusat & Keliling', icon: 'angle' },
    { id: 'garis-singgung', label: 'Garis Singgung', icon: 'timeline' },
    { id: 'rumus', label: 'Kalkulator', icon: 'dialpad' },
    { id: 'penerapan', label: 'Penerapan', icon: 'lightbulb' },
    { id: 'latihan-soal', label: 'Latihan Soal', icon: 'quiz' }
  ];

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:block sticky top-16 self-start h-[calc(100vh-4rem)] w-64 flex-shrink-0 z-30">
      <div className="px-3 py-4 h-full flex flex-col bg-surface dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
        <h3 className="text-sm font-semibold text-on-surface-variant dark:text-gray-400 uppercase tracking-wide px-3 mb-4">
          Daftar Materi
        </h3>

        {/* Menu list dengan scroll tapi scrollbar hidden */}
        <div className="flex-1 space-y-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={clsx(
                'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[15px] transition-all',
                activeSection === section.id
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-on-surface-variant dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-on-surface dark:hover:text-gray-200'
              )}
            >
              <span className="material-symbols-outlined text-[22px]">{section.icon}</span>
              <span className="flex-1 text-left">{section.label}</span>
            </button>
          ))}
        </div>

        <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
          <button
            onClick={onChatOpen}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-tertiary text-on-tertiary text-[15px] font-semibold hover:bg-tertiary-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">smart_toy</span>
            <span>Tanya AI</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
