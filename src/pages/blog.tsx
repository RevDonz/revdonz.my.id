import Hero from '@/components/mollecules/Hero';
import Main from '@/components/template';
import clsx from 'clsx';
import React from 'react';

const blog = () => {
  const Card = ({ children }) => {
    return (
      <div
        className={clsx(
          'relative p-0.5 transition-transform',
          'active:scale-[0.98]',
          'bg-black dark:bg-transparent',
          'dark:bg-gradient-to-r dark:from-primary-500 dark:to-ternary-500',
          'before:absolute before:-z-[1] before:inset-0 before:transition-transform',
          'before:bg-black dark:before:bg-gradient-to-r before:from-primary-500 before:to-ternary-500',
          'hover:before:translate-x-2 hover:before:translate-y-2',
          'active:before:translate-x-1 active:before:translate-y-1',
        )}
      >
        {children}
      </div>
    );
  };

  const CardBlog = ({ children }) => {
    return <div className='p-3 bg-gray-50 dark:bg-dark-800'>{children}</div>;
  };
  return (
    <Main className='mt-10'>
      <Hero title={'Blog'} description={'Ini adalah blog'} />
      <section className={clsx('relative mt-6')}>
        <div className='flex flex-col space-y-3 group'>
          <Card>
            <CardBlog>
              <h3 className='mb-2 md:mb-4'>Setup Next JS and TailwinCSS</h3>
            </CardBlog>
          </Card>
          <Card>
            <CardBlog>asd</CardBlog>
          </Card>
        </div>
      </section>
    </Main>
  );
};

export default blog;
