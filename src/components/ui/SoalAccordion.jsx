import React, { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const SoalAccordion = ({ soal, badge }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-surface dark:bg-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-primary">calculate</span>
            <h4 className="text-headline-sm text-on-surface dark:text-gray-100">{soal.judul}</h4>
            {badge && (
              <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-body-sm font-semibold rounded">
                {badge}
              </span>
            )}
          </div>
          <p className="text-body-md text-on-surface-variant dark:text-gray-400">{soal.soal}</p>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="material-symbols-outlined text-primary text-2xl flex-shrink-0"
        >
          expand_more
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <h5 className="text-body-md font-semibold text-on-surface dark:text-gray-100 mb-3">
                Penyelesaian:
              </h5>
              <div className="space-y-2">
                {soal.langkah.map((langkah, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-on-primary text-body-sm flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-body-md text-on-surface dark:text-gray-300 font-mono pt-0.5">
                      {langkah}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-tertiary/10 dark:bg-tertiary/20 rounded-lg">
                <p className="text-body-md">
                  <span className="font-semibold text-tertiary">Jawaban: </span>
                  <span className="text-on-surface dark:text-gray-100 font-semibold">{soal.jawaban}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SoalAccordion;
