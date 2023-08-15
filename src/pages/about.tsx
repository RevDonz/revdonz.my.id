import Head from '@/components/atoms/Head';
import UnstyledLink from '@/components/atoms/UnstyledLink';
import Hero from '@/components/mollecules/Hero';
import HeroWithPhoto from '@/components/mollecules/HeroWithPhoto';
import Main from '@/components/template';
import { Timelines } from '@/data/timeline';
import clsx from 'clsx';
import React from 'react';
import { HiChevronDown, HiDesktopComputer } from 'react-icons/hi';
import { IoIosSchool } from 'react-icons/io';

const about = () => {
  return (
    <Main className='mt-10'>
      <Head title='About Me' />
      <HeroWithPhoto
        title={'About Me'}
        subtitle='Reva Doni Aprilio'
        description={
          "Hello, my name is Reva Doni Aprilio, you can call me Doni for short. I live in Bandung, Indonesia. I'm 20 years old. I'm a Frontend Developer and Software Engineering Student at Telkom University."
        }
      >
        <p>
          My major helps me in studying and deepening the process of software
          development, maintenance, and quality management because it is
          supported by courses in Software Requirements Engineering, Software
          Modeling, Software Architecture and Design, Software Construction etc.
        </p>
      </HeroWithPhoto>
      <Hero
        title='Timeline'
        description='Take a look at my timeline below, it consists of my career path, formal education and more.'
      >
        <ol className='relative border-l border-gray-200 dark:border-primary-500 mt-5 ml-3'>
          {Timelines.map((timeline, index) => {
            return (
              <li className='mb-5 ml-4' key={index}>
                <div
                  className={clsx(
                    'absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border',
                    'bg-dark-300 dark:bg-primary-600',
                    // 'bg-dark-300 dark:bg-gradient-to-r from-primary-500 via-ternary-500 to-secondary-500',
                    'border-white dark:border-gray-900'
                  )}
                />
                <details className='group'>
                  <summary className='flex justify-between items-center md:cursor-pointer'>
                    <div>
                      <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                        {timeline.title}
                      </h3>
                      <div className='flex items-center my-2'>
                        {timeline.type === 'edu' ? (
                          <IoIosSchool />
                        ) : (
                          <HiDesktopComputer />
                        )}
                        <span className='text-sm font-normal ml-1'>
                          - {timeline.place}
                        </span>
                      </div>
                    </div>
                    <div className='group-open:-rotate-180 transition'>
                      <HiChevronDown className='text-xl' />
                    </div>
                  </summary>
                  <div className='transition duration-300'>
                    <p className='text-sm text-dark-100 mb-1'>
                      {timeline.date}
                    </p>
                    <p className='text-base font-normal'>
                      {timeline.description}
                    </p>
                  </div>
                </details>
              </li>
            );
          })}
        </ol>
        <p>
          Also you can read{' '}
          <span>
            <UnstyledLink
              href='https://drive.google.com/file/d/1F3Et3MR2klJIvF24hXLLGLAOabHEqPaC/view?usp=drive_link'
              className='font-semibold'
            >
              my resume here
            </UnstyledLink>
          </span>
        </p>
      </Hero>
    </Main>
  );
};

export default about;
