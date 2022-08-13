import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import Button from '@/components/atoms/Button';

const Navbar = () => {
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
    <nav
      className={clsx('fixed inset-0 z-50 h-16', 'bg-zinc-50 dark:bg-dark-900')}
    >
      <div
        className={clsx(
          'layout gap-2 h-full',
          'flex items-center justify-between'
        )}
      >
        <div className='flex'>
          {Routes.map((route) => {
            return (
              <Link key={route.name} href={route.link}>
                <a
                  className={clsx(
                    'py-2 px-4 rounded-md transition-all font-semibold',
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
        <Button
          className={clsx(
            'text-lg rounded-md h-10 w-10',
            'bg-indigo-50 dark:bg-dark-500/50'
          )}
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          {theme === 'light' ? (
            <HiMoon className={clsx('text-indigo-700')} />
          ) : (
            <HiSun className={clsx('text-yellow-400')} />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
