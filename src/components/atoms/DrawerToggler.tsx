import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiMenuAlt2, HiOutlineX } from 'react-icons/hi';
import { Routes } from '../mollecules/Navbar';
import Button from './Button';

const DrawerToggler = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className={clsx(
          'h-10 w-10 -ml-3.5',
          'text-lg rounded-lg',
          'md:hidden block'
        )}
        onClick={() => setOpen(!open)}
      >
        {!open ? <HiMenuAlt2 /> : <HiOutlineX />}
      </Button>
      {open && <Drawer />}
    </>
  );
};

const Drawer = () => {
  const { pathname } = useRouter();

  return (
    <aside
      className={clsx(
        'fixed md:hidden w-screen h-screen',
        'dark:bg-dark-900 bg-gray-50',
        'left-0 top-20 z-50'
      )}
    >
      <div className='layout flex flex-col'>
        {Routes.map((route) => {
          return (
            <Link href={route.link} key={route.link}>
              <a
                className={clsx(
                  'py-4 border-b-[1.6px] font-medium',
                  pathname === route.link
                    ? 'border-primary-600 dark:border-primary-500'
                    : 'text-gray-700 dark:text-gray-300 border-dark-100 dark:border-dark-500'
                )}
              >
                {route.name}
              </a>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default DrawerToggler;
