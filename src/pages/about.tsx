import Head from '@/components/atoms/Head';
import UnstyledLink from '@/components/atoms/UnstyledLink';
import Hero from '@/components/mollecules/Hero';
import HeroWithPhoto from '@/components/mollecules/HeroWithPhoto';
import Main from '@/components/template';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { HiChevronDown } from 'react-icons/hi';

const about = () => {
  const Contacts = [
    {
      type: 'Email',
      link: 'mailto:aprilio842@gmail.com',
    },
    {
      type: 'Github',
      link: 'https://github.com/RevDonz',
    },
    {
      type: 'LinkedIn',
      link: 'https://www.linkedin.com/in/revdonz/',
    },
    {
      type: 'Instagram',
      link: 'https://www.instagram.com/revdonz_/',
    },
  ];

  return (
    <Main className='mt-10'>
      <Head title='About' />
      <HeroWithPhoto
        title={'About Me'}
        subtitle='Reva Doni Aprilio'
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          repellat dolore, repudiandae necessitatibus accusantium ut, explicabo
          quam dignissimos laborum temporibus nostrum sapiente dolorem aliquam
          distinctio ea quas animi quis ab.
        </p>
      </HeroWithPhoto>
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
                    <Link href={contact.link}>{contact.link}</Link>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <p>
          Also you can{' '}
          <span>
            <UnstyledLink href='https://drive.google.com/file/d/1mipWnKUdiiVJjN1MCLE4wBr_7WVPKfvj/view?usp=sharing'>
              read my resume here
            </UnstyledLink>
          </span>
        </p>
      </Hero>
    </Main>
  );
};

export default about;
