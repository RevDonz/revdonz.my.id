import Main from '@/components/template';
import Image from 'next/image';

export default function Index() {
  return (
    <Main className='flex flex-col-reverse items-center h-full justify-center leading-6 md:flex-row'>
      <div className=' w-full border-solid md:w-1/2'>
        <h2 className='m-0 text-xl font-semibold lg:text-3xl md:text-2xl'>
          {"Hi, I'm Reva Doni Aprilio"}
        </h2>
        <p className='pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          numquam unde debitis rerum ducimus ipsa perferendis porro quo nihil
          iste aliquid, culpa velit, accusamus totam expedita ad exercitationem
          dolor nobis.
        </p>
        <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
          <li className=' relative py-1 pl-0 text-left border-solid'>
            <span className='inline-flex items-center justify-center w-6 h-6 mr-2 bg-yellow-300 rounded-full'>
              <span className='text-sm font-bold'>✓</span>
            </span>{' '}
            Automated task management workflow
          </li>
          <li className=' relative py-1 pl-0 text-left border-solid'>
            <span className='inline-flex items-center justify-center w-6 h-6 mr-2 bg-yellow-300 rounded-full'>
              <span className='text-sm font-bold'>✓</span>
            </span>{' '}
            Detailed analytics for your data
          </li>
          <li className=' relative py-1 pl-0 text-left border-solid'>
            <span className='inline-flex items-center justify-center w-6 h-6 mr-2 bg-yellow-300 rounded-full'>
              <span className='text-sm font-bold'>✓</span>
            </span>{' '}
            Some awesome integrations
          </li>
          <li className=' relative py-1 pl-0 text-left border-solid'>
            <span className='inline-flex items-center justify-center w-6 h-6 mr-2 bg-yellow-300 rounded-full'>
              <span className='text-sm font-bold'>✓</span>
            </span>{' '}
            Some awesome integrations
          </li>
          <li className=' relative py-1 pl-0 text-left border-solid'>
            <span className='inline-flex items-center justify-center w-6 h-6 mr-2 bg-yellow-300 rounded-full'>
              <span className='text-sm font-bold'>✓</span>
            </span>{' '}
            Some awesome integrations
          </li>
        </ul>
      </div>

      <div className='relative w-full max-w-md mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2'>
        <Image alt='doodle' src='/me.svg' priority width={200} height={400} />
      </div>
    </Main>
  );
}
