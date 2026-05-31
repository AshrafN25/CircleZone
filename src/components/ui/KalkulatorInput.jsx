import React from 'react';
import clsx from 'clsx';

const KalkulatorInput = ({ 
  label, 
  value, 
  onChange, 
  result, 
  formula, 
  unit = '',
  type = 'number',
  min,
  max,
  step = '0.01',
  placeholder = '0'
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-body-md font-semibold text-on-surface dark:text-gray-100 mb-2">
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          className={clsx(
            'w-full px-4 py-3 rounded-lg',
            'border-2 border-gray-300 dark:border-gray-600',
            'bg-surface dark:bg-gray-800',
            'text-on-surface dark:text-gray-100',
            'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
            'transition-colors'
          )}
        />
      </div>
      
      {formula && (
        <div className="p-3 bg-primary/5 dark:bg-primary/10 rounded-lg">
          <p className="text-body-sm text-on-surface-variant dark:text-gray-400 font-mono">
            {formula}
          </p>
        </div>
      )}
      
      {result !== null && result !== undefined && !isNaN(result) && (
        <div className="p-4 bg-tertiary/10 dark:bg-tertiary/20 rounded-lg border-2 border-tertiary/30">
          <p className="text-body-sm text-on-surface-variant dark:text-gray-400 mb-1">
            Hasil:
          </p>
          <p className="text-headline-md text-tertiary font-bold">
            {result} {unit}
          </p>
        </div>
      )}
    </div>
  );
};

export default KalkulatorInput;
