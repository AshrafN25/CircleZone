import React from 'react';
import clsx from 'clsx';

const SectionBadge = ({ children, icon, className }) => {
  return (
    <div className={clsx(
      'inline-flex items-center gap-2 px-4 py-2 rounded-full',
      'bg-primary/10 text-primary text-body-sm font-semibold',
      className
    )}>
      {icon && <span className="material-symbols-outlined text-lg">{icon}</span>}
      {children}
    </div>
  );
};

export default SectionBadge;
