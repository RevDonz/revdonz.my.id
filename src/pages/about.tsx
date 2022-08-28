import Head from '@/components/atoms/Head';
import UnstyledLink from '@/components/atoms/UnstyledLink';
import Hero from '@/components/mollecules/Hero';
import HeroWithPhoto from '@/components/mollecules/HeroWithPhoto';
import Main from '@/components/template';
import { Contacts } from '@/data/contacts';
import React from 'react';

const about = () => {
  return (
    <Main className='mt-10'>
      <Head title='About' />
      <HeroWithPhoto title={'About Me'} subtitle='Reva Doni Aprilio'>
        <p className='mb-3'>
          {
            "I'm a Frontend Developer and Software Engineering Student at Telkom University."
          }
        </p>
        <p></p>
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
