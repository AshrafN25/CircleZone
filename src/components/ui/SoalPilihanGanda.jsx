import React, { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const SoalPilihanGanda = ({ soal }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelectAnswer = (pilihanId) => {
    if (!showResult) {
      setSelectedAnswer(pilihanId);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = selectedAnswer === soal.jawaban;

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-surface dark:bg-gray-800">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
            {soal.nomor}
          </div>
        </div>
        <p className="text-body-lg text-on-surface dark:text-gray-100 leading-relaxed">
          {soal.soal}
        </p>
      </div>

      {/* Pilihan Jawaban */}
      <div className="p-6 space-y-3">
        {soal.pilihan.map((pilihan) => {
          const isSelected = selectedAnswer === pilihan.id;
          const isCorrectAnswer = pilihan.id === soal.jawaban;
          const showCorrect = showResult && isCorrectAnswer;
          const showWrong = showResult && isSelected && !isCorrect;

          return (
            <button
              key={pilihan.id}
              onClick={() => handleSelectAnswer(pilihan.id)}
              disabled={showResult}
              className={clsx(
                'w-full p-4 rounded-lg text-left transition-all border-2',
                'flex items-center gap-3',
                {
                  // Default state
                  'border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/5': 
                    !isSelected && !showResult,
                  
                  // Selected but not submitted
                  'border-primary bg-primary/10': 
                    isSelected && !showResult,
                  
                  // Correct answer (after submit)
                  'border-tertiary bg-tertiary/10': 
                    showCorrect,
                  
                  // Wrong answer (after submit)
                  'border-error bg-error/10': 
                    showWrong,
                  
                  // Not selected (after submit)
                  'border-gray-200 dark:border-gray-700 opacity-50': 
                    showResult && !isSelected && !isCorrectAnswer,
                  
                  // Disabled
                  'cursor-not-allowed': showResult,
                  'cursor-pointer': !showResult
                }
              )}
            >
              {/* Radio/Check Icon */}
              <div className={clsx(
                'w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                {
                  'border-gray-300 dark:border-gray-600': !isSelected && !showResult,
                  'border-primary bg-primary': isSelected && !showResult,
                  'border-tertiary bg-tertiary': showCorrect,
                  'border-error bg-error': showWrong,
                }
              )}>
                {isSelected && !showResult && (
                  <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                )}
                {showCorrect && (
                  <span className="material-symbols-outlined text-on-tertiary text-sm">check</span>
                )}
                {showWrong && (
                  <span className="material-symbols-outlined text-on-error text-sm">close</span>
                )}
              </div>

              {/* Pilihan Text */}
              <div className="flex-1">
                <span className={clsx(
                  'font-semibold mr-2',
                  {
                    'text-on-surface dark:text-gray-300': !showResult,
                    'text-tertiary': showCorrect,
                    'text-error': showWrong,
                  }
                )}>
                  {pilihan.id.toUpperCase()}.
                </span>
                <span className={clsx(
                  'text-body-md',
                  {
                    'text-on-surface dark:text-gray-300': !showResult,
                    'text-tertiary font-semibold': showCorrect,
                    'text-error': showWrong,
                  }
                )}>
                  {pilihan.text}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6">
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className={clsx(
              'w-full py-3 rounded-lg font-semibold transition-colors',
              selectedAnswer
                ? 'bg-primary text-on-primary hover:bg-primary-variant'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
            )}
          >
            Cek Jawaban
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="w-full py-3 rounded-lg font-semibold bg-gray-200 dark:bg-gray-700 text-on-surface dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Coba Lagi
          </button>
        )}
      </div>

      {/* Result & Pembahasan */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={clsx(
              'p-6 border-t-2',
              isCorrect 
                ? 'bg-tertiary/5 dark:bg-tertiary/10 border-tertiary' 
                : 'bg-error/5 dark:bg-error/10 border-error'
            )}>
              {/* Result Message */}
              <div className="flex items-center gap-3 mb-4">
                <div className={clsx(
                  'w-10 h-10 rounded-full flex items-center justify-center',
                  isCorrect ? 'bg-tertiary' : 'bg-error'
                )}>
                  <span className="material-symbols-outlined text-white text-2xl">
                    {isCorrect ? 'check_circle' : 'cancel'}
                  </span>
                </div>
                <div>
                  <h4 className={clsx(
                    'text-headline-sm font-bold',
                    isCorrect ? 'text-tertiary' : 'text-error'
                  )}>
                    {isCorrect ? 'Jawaban Benar! 🎉' : 'Jawaban Salah'}
                  </h4>
                  <p className="text-body-sm text-on-surface-variant dark:text-gray-400">
                    {isCorrect 
                      ? 'Selamat! Jawabanmu tepat.' 
                      : `Jawaban yang benar adalah: ${soal.jawaban.toUpperCase()}`
                    }
                  </p>
                </div>
              </div>

              {/* Pembahasan */}
              <div className="bg-surface dark:bg-gray-900 p-4 rounded-lg">
                <h5 className="text-body-md font-semibold text-on-surface dark:text-gray-100 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">lightbulb</span>
                  Pembahasan:
                </h5>
                <div className="space-y-2">
                  {soal.pembahasan.map((langkah, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-body-sm flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-body-md text-on-surface dark:text-gray-300 font-mono pt-0.5">
                        {langkah}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SoalPilihanGanda;
