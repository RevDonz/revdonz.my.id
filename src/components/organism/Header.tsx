import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DarkMode from '../mollecules/DarkMode';

const Navbar = () => {
  const { pathname } = useRouter();

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
    <header
      className={clsx(
        'sticky inset-0 z-50 h-16',
        'bg-zinc-50 dark:bg-dark-900'
      )}
    >
      <div
        className={clsx(
          'layout gap-2 h-full',
          'flex items-center justify-between'
        )}
      >
        <div className={clsx('flex items-center -ml-3.5')}>
          {Routes.map((route) => {
            return (
              <Link key={route.name} href={route.link}>
                <a
                  className={clsx(
                    'py-2 px-4 rounded-md transition-all font-semibold relative inline-flex',
                    'hover:bg-indigo-100 dark:hover:bg-dark-500/50',
                    route.link === pathname
                      ? 'text-indigo-700 dark:text-indigo-400'
                      : 'text-gray-700 dark:text-gray-300'
                  )}
                >
                  {route.name}
                </a>
              </Link>
            );
          })}
        </div>
        <DarkMode />
      </div>
    </header>
  );
};

export default Navbar;
