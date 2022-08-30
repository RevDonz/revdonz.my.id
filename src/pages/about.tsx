import Head from '@/components/atoms/Head';
import UnstyledLink from '@/components/atoms/UnstyledLink';
import Hero from '@/components/mollecules/Hero';
import HeroWithPhoto from '@/components/mollecules/HeroWithPhoto';
import Main from '@/components/template';
import { Contacts } from '@/data/contacts';
import React from 'react';

export type TimelineProps = {
  title: string;
  description: string;
  place: string;
  startDate: Date;
  endDate: Date | null;
  type: 'edu' | 'work';
};

const about = () => {
  const Timelines: TimelineProps[] = [
    {
      title: 'High School',
      description: 'string',
      place: 'SMKN 7 Baleendah',
      startDate: new Date(),
      endDate: new Date(),
      type: 'edu',
    },
    {
      title: 'Frontend Developer',
      description: 'string',
      place: 'Kerjago.id',
      startDate: new Date(),
      endDate: new Date(),
      type: 'work',
    },
  ];
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
      <Hero title='Timeline' description='Timeline'>
        <ol className='relative border-l-2 border-primary-200 dark:border-gray-700 mt-5 ml-4'>
          {Timelines.map((timeline, index) => {
            return (
              <li className='mb-10 ml-6' key={index}>
                <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                  <svg
                    aria-hidden='true'
                    className='w-3 h-3 text-blue-600 dark:text-blue-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </span>
                <h3 className='flex items-center mb-1'>{timeline.title}</h3>
                <time className='block mb-2 text-sm font-normal leading-none'>
                  {timeline.place}
                </time>
                <div className=''>
                  <p>May 2022 - Present</p>
                  <p className='mb-4 text-base font-normal'>
                    Get access to over 20+ pages including a dashboard layout,
                    charts, kanban board, calendar, and pre-order E-commerce
                    &amp; Marketing pages.
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Hero>
      <Hero
        title='Contact'
        description="I'm excited to connect with everyone so please don’t hesitate to get in touch with me by following my social media bellow:"
      >
        <div className='prose dark:prose-invert py-1'>
          <ul>
            {Contacts.map((contact, index) => {
              return (
                <li key={index}>
                  <p className='truncate my-2'>
                    {contact.type} -{' '}
                    <UnstyledLink href={contact.link}>
                      {contact.link.replace('mailto:', '')}
                    </UnstyledLink>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <p>
          Also you can read{' '}
          <span>
            <UnstyledLink
              href='https://drive.google.com/file/d/11V6QHaLhCcFbBokDUE7r_vBwYGiNixZC/view?usp=sharing'
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
