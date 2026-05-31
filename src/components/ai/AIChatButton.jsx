import React from 'react';
import { motion } from 'framer-motion';

const AIChatButton = ({ onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }} 
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-tertiary text-on-tertiary shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center lg:hidden"
      aria-label="Buka chat AI"
    >
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="material-symbols-outlined text-3xl"
      >
        smart_toy
      </motion.span>
    </motion.button>
  );
};

export default AIChatButton;
