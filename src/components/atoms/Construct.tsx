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
      <p className='mb-3 text-xl font-bold md:text-2xl'>
        Page is Under Construction
      </p>
      <Link href='/'>
        <a href=''>Back To Home</a>
      </Link>
    </Main>
  );
};

export default Construct;
