import React from 'react';
import clsx from 'clsx';

const FormulaCard = ({ title, formula, description, icon, className }) => {
  return (
    <div className={clsx(
      'p-6 rounded-xl bg-surface dark:bg-gray-800',
      'border border-gray-200 dark:border-gray-700',
      'shadow-sm hover:shadow-md transition-shadow',
      className
    )}>
      {icon && (
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
          <h3 className="text-headline-sm text-on-surface dark:text-gray-100">{title}</h3>
        </div>
      )}
      {!icon && title && (
        <h3 className="text-headline-sm text-on-surface dark:text-gray-100 mb-4">{title}</h3>
      )}
      <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg mb-3">
        <p className="text-headline-md text-primary font-mono text-center">{formula}</p>
      </div>
      {description && (
        <p className="text-body-md text-on-surface-variant dark:text-gray-400">{description}</p>
      )}
    </div>
  );
};

export default FormulaCard;
