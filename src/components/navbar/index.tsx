import Link from 'next/link';

const Navbar = () => {
  const Routes = [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/portfolio',
      name: 'Portfolio',
    },
    {
      link: '/blog',
      name: 'Blog',
    },
    {
      link: '/about',
      name: 'About',
    },
  ];

  return (
    <nav className='w-full sticky top-0 z-50'>
      <div className='flex max-w-5xl mx-auto items-center gap-2 h-16'>
        {Routes.map((route) => {
          return (
            <Link key={route.name} href={route.link}>
              <a className='py-2 px-4 hover:bg-red-100 dark:hover:bg-dark-500/50 rounded-md'>
                {route.name}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
