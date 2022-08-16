import Main from '@/components/template';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <Main className='flex flex-col items-center h-full justify-center leading-6 -mt-10'>
      <Image alt='doodle' src='/404.svg' priority width={300} height={300} />
      <h1 className='mb-3'>Page Not Found</h1>
      <Link href='/'>
        <a href=''>Back To Home</a>
      </Link>
    </Main>
  );
};

export default NotFound;
