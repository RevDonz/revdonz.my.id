import Main from '@/components/template';
import clsx from 'clsx';
import Image from 'next/image';

export default function Index() {
  return (
    <Main className='flex flex-col-reverse items-center h-full justify-center leading-6 md:flex-row'>
      <div className='w-full border-solid md:w-1/2 bg-secondary'>
        <h1>Reva Doni Aprilio</h1>
        <h3
          className={clsx(
            'bg-clip-text text-transparent bg-gradient-to-r pt-2',
            'from-primary-500 via-ternary-500 to-secondary-500'
          )}
        >
          Student & FrontEnd Developer
        </h3>
        <p className='pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
          {"Hello, I'm Reva Doni Aprilio. Welcome to my personal website."}
        </p>
      </div>

      <div className='relative w-full max-w-md mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2'>
        <Image alt='doodle' src='/me.svg' priority width={200} height={300} />
      </div>
    </Main>
  );
}
