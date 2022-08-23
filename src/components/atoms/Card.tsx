import clsx from 'clsx';
import React from 'react';
interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className='relative block group active:scale-[98%] transition-transform transform'>
      <span
        className={clsx(
          'absolute inset-0',
          'border-2 border-black border-dashed dark:border-dark-300'
        )}
      />

      <div
        className={clsx(
          'p-0.5 relative h-full',
          'transition transform ease-linear',
          'group-hover:-translate-x-2 group-hover:-translate-y-2',
          'bg-black dark:bg-dark-500 dark:hover:bg-gradient-to-r',
          'from-primary-500 via-ternary-500 to-secondary-500'
        )}
      >
        <div className='p-3 transition-opacity dark:bg-dark-900 bg-gray-50 h-full'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
