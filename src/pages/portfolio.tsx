import Hero from '@/components/mollecules/Hero';
import Main from '@/components/template';
import clsx from 'clsx';
import React from 'react';

const portfolio = () => {
  return (
    <Main className='mt-10'>
      <Hero
        title={'Portfolio'}
        description={
          'Projek yang saya buat dengan semua pengetahuan dan pengalaman saya.'
        }
      />

      <div className='relative block group mt-10 active:scale-95'>
        <span
          className={clsx(
            'absolute inset-0',
            'border-2 border-black border-dashed dark:border-dark-300'
          )}
        />

        <div className='p-0.5 relative h-full transition-transform transform group-hover:-translate-x-2 group-hover:-translate-y-2 bg-black dark:bg-gradient-to-r from-primary-500 via-ternary-500 to-secondary-500'>
          <div className='p-3 transition-opacity dark:bg-dark-900 bg-gray-50'>
            <h2 className='mt-4 text-2xl font-medium'>Go around the world</h2>

            <p className='mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, praesentium voluptatem omnis atque culpa repellendus.
            </p>

            <p className='mt-8 font-bold'>Read more</p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default portfolio;
