import Hero from '@/components/mollecules/Hero';
import Main from '@/components/template'
import React from 'react'

const about = () => {
  return (
    <Main className='mt-10'>
      <Hero title={'About Me'} description={'Ini adalah halaman tentang saya'} />
    </Main>
  );
}

export default about