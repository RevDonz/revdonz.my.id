import Head from '@/components/atoms/Head';
import Hero from '@/components/mollecules/Hero';
import HeroWithPhoto from '@/components/mollecules/HeroWithPhoto';
import Main from '@/components/template';
import clsx from 'clsx';
import React from 'react';

const about = () => {
  return (
    <Main className='mt-10'>
      <Head title='About' />
      <HeroWithPhoto
        title={'About Me'}
        subtitle='Reva Doni Aprilio'
        description='Hello, my name is Reva Doni Aprilio, you can call me Doni for short.'
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          repellat dolore, repudiandae necessitatibus accusantium ut, explicabo
          quam dignissimos laborum temporibus nostrum sapiente dolorem aliquam
          distinctio ea quas animi quis ab.
        </p>
      </HeroWithPhoto>
      <Hero title='Contact' description='Contact me' />
    </Main>
  );
};

export default about;
