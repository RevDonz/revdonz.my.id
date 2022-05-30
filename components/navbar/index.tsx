import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='w-full sticky top-0 bg-red-50 z-50'>
      <div className='flex max-w-5xl mx-auto items-center'>
        <Link href={'/'}>
          <a href='' className='py-2 px-3 bg-blue-100'>
            tes
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
