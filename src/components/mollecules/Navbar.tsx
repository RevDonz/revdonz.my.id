import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Routes = [
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
  {
    link: '/contact',
    name: 'Contact',
  },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={clsx('items-center -ml-3.5 hidden md:flex')}>
      {Routes.map((route) => {
        return (
          <Link key={route.name} href={route.link}>
            <a
              className={clsx(
                'py-2 px-4 rounded-md transition-all font-semibold relative inline-flex',
                'hover:bg-primary-100 dark:hover:bg-dark-500/50',
                route.link === pathname
                  ? 'text-primary-700 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300'
              )}
            >
              {route.name}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
