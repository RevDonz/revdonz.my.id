import Image from 'next/image';
import Link from 'next/link';
import Main from '../template';

const Construct = () => {
  return (
    <Main className='flex flex-col items-center h-full justify-center leading-6 -mt-10'>
      <Image
        alt='doodle'
        src='/construction.svg'
        priority
        width={300}
        height={300}
      />
      <h1 className='mb-3'>Page is Under Construction</h1>
      <Link href='/'>
        <a href=''>Back To Home</a>
      </Link>
    </Main>
  );
};

export default Construct;
