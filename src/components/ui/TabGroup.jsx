import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const TabGroup = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={clsx(
            'relative px-4 py-2 rounded-md text-body-md font-semibold transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-primary/50',
            activeTab === tab.id
              ? 'text-on-primary'
              : 'text-on-surface-variant dark:text-gray-400 hover:text-on-surface dark:hover:text-gray-200'
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-md"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabGroup;
