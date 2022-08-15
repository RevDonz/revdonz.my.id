import Hero from '@/components/mollecules/Hero';
import Main from '@/components/template';
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
      
    </Main>
  );
};

export default portfolio;
