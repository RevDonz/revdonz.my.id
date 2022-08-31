import Head from '@/components/atoms/Head';
import UnstyledLink from '@/components/atoms/UnstyledLink';
import Hero from '@/components/mollecules/Hero';
import Main from '@/components/template';
import { Contacts } from '@/data/contacts';

const Contact = () => {
  return (
    <Main className='mt-10'>
      <Head title='About Me' />
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
                    {contact.name} -{' '}
                    <UnstyledLink href={contact.link}>
                      {contact.label}
                    </UnstyledLink>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Hero>
    </Main>
  );
};

export default Contact;
