import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { SOAL_LATIHAN } from '../../data/materiData';

const LatihanSoal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [scores, setScores] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  const currentSoal = SOAL_LATIHAN[currentIndex];
  const totalSoal = SOAL_LATIHAN.length;
  const answeredCount = Object.keys(scores).length;
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const percentage = answeredCount > 0 ? Math.round((totalScore / answeredCount) * 100) : 0;

  const handleSelectAnswer = (pilihanId) => {
    if (!showResult) {
      setSelectedAnswer(pilihanId);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowResult(true);
      const isCorrect = selectedAnswer === currentSoal.jawaban;
      setScores({
        ...scores,
        [currentSoal.id]: isCorrect ? 1 : 0
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < totalSoal - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScores({});
    setQuizFinished(false);
  };

  const isCorrect = selectedAnswer === currentSoal.jawaban;

  // Quiz Finished Screen
  if (quizFinished) {
    const finalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const finalPercentage = Math.round((finalScore / totalSoal) * 100);
    
    let gradeColor = 'text-error';
    let gradeMessage = 'Tetap Semangat!';
    let gradeIcon = 'sentiment_dissatisfied';
    
    if (finalPercentage >= 80) {
      gradeColor = 'text-tertiary';
      gradeMessage = 'Luar Biasa!';
      gradeIcon = 'emoji_events';
    } else if (finalPercentage >= 60) {
      gradeColor = 'text-secondary';
      gradeMessage = 'Bagus!';
      gradeIcon = 'sentiment_satisfied';
    }

    return (
      <section id="latihan-soal" className="py-20 bg-background dark:bg-gray-950 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/10 to-tertiary/10 dark:from-primary/20 dark:to-tertiary/20 p-8 rounded-2xl text-center">
              <span className={clsx('material-symbols-outlined text-8xl mb-4 block', gradeColor)}>
                {gradeIcon}
              </span>
              <h2 className={clsx('text-headline-lg mb-2', gradeColor)}>
                {gradeMessage}
              </h2>
              <p className="text-body-lg text-on-surface-variant dark:text-gray-400 mb-8">
                Kamu telah menyelesaikan semua soal!
              </p>

              {/* Score Card */}
              <div className="bg-surface dark:bg-gray-800 p-6 rounded-xl mb-8">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-body-sm text-on-surface-variant dark:text-gray-400 mb-1">Skor</p>
                    <p className="text-headline-lg text-primary font-bold">{finalScore}/{totalSoal}</p>
                  </div>
                  <div>
                    <p className="text-body-sm text-on-surface-variant dark:text-gray-400 mb-1">Benar</p>
                    <p className="text-headline-lg text-tertiary font-bold">{finalScore}</p>
                  </div>
                  <div>
                    <p className="text-body-sm text-on-surface-variant dark:text-gray-400 mb-1">Salah</p>
                    <p className="text-headline-lg text-error font-bold">{totalSoal - finalScore}</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${finalPercentage}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={clsx(
                      'h-full rounded-full',
                      finalPercentage >= 80 ? 'bg-tertiary' : finalPercentage >= 60 ? 'bg-secondary' : 'bg-error'
                    )}
                  />
                </div>
                <p className="text-body-sm text-on-surface-variant dark:text-gray-400 mt-2">
                  Persentase: {finalPercentage}%
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-on-primary font-semibold hover:bg-primary-variant transition-colors"
                >
                  <span className="material-symbols-outlined">refresh</span>
                  <span>Ulangi Quiz</span>
                </button>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gray-200 dark:bg-gray-700 text-on-surface dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <span>Kembali ke Materi</span>
                  <span className="material-symbols-outlined">arrow_upward</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Quiz Screen
  return (
    <section id="latihan-soal" className="py-20 bg-background dark:bg-gray-950 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-display-md">7</span>
            </div>
            <h2 className="text-headline-lg text-primary">Latihan Soal Pilihan Ganda</h2>
          </div>

          {/* Progress Info */}
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-body-lg text-on-surface dark:text-gray-300 font-semibold">
                Soal {currentIndex + 1} dari {totalSoal}
              </p>
              <p className="text-body-sm text-on-surface-variant dark:text-gray-400">
                Skor saat ini: {totalScore}/{answeredCount}
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full sm:w-64">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / totalSoal) * 100}%` }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
              <p className="text-body-sm text-on-surface-variant dark:text-gray-400 mt-1 text-right">
                {Math.round(((currentIndex + 1) / totalSoal) * 100)}% selesai
              </p>
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSoal.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-surface dark:bg-gray-800 shadow-lg">
                {/* Question Header */}
                <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                      {currentSoal.nomor}
                    </div>
                  </div>
                  <p className="text-body-lg text-on-surface dark:text-gray-100 leading-relaxed">
                    {currentSoal.soal}
                  </p>
                </div>

                {/* Answer Options */}
                <div className="p-6 space-y-3">
                  {currentSoal.pilihan.map((pilihan) => {
                    const isSelected = selectedAnswer === pilihan.id;
                    const isCorrectAnswer = pilihan.id === currentSoal.jawaban;
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
                            'border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-primary/5': 
                              !isSelected && !showResult,
                            'border-primary bg-primary/10': 
                              isSelected && !showResult,
                            'border-tertiary bg-tertiary/10': 
                              showCorrect,
                            'border-error bg-error/10': 
                              showWrong,
                            'border-gray-200 dark:border-gray-700 opacity-50': 
                              showResult && !isSelected && !isCorrectAnswer,
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

                        {/* Option Text */}
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

                {/* Action Button */}
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
                      onClick={handleNext}
                      className="w-full py-3 rounded-lg font-semibold bg-tertiary text-on-tertiary hover:bg-tertiary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>{currentIndex < totalSoal - 1 ? 'Selanjutnya' : 'Lihat Hasil'}</span>
                      <span className="material-symbols-outlined">
                        {currentIndex < totalSoal - 1 ? 'arrow_forward' : 'check_circle'}
                      </span>
                    </button>
                  )}
                </div>

                {/* Result & Explanation */}
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
                                ? '+1 Poin' 
                                : `Jawaban yang benar: ${currentSoal.jawaban.toUpperCase()} (+0 Poin)`
                              }
                            </p>
                          </div>
                        </div>

                        {/* Explanation */}
                        <div className="bg-surface dark:bg-gray-900 p-4 rounded-lg">
                          <h5 className="text-body-md font-semibold text-on-surface dark:text-gray-100 mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">lightbulb</span>
                            Pembahasan:
                          </h5>
                          <div className="space-y-2">
                            {currentSoal.pembahasan.map((langkah, index) => (
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
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default LatihanSoal;
