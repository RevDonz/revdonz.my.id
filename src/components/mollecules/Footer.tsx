import clsx from 'clsx';
import { useRouter } from 'next/router';

const Footer = () => {
  const { pathname } = useRouter();
  const isError =
    pathname === '/_error' || pathname === '/_offline' || pathname === '/404';

  if (isError) {
    return null;
  }

  return (
    <div
      className={clsx(
        'py-3 text-center',
        'bg-zinc-50 dark:bg-dark-900 bottom-0'
      )}
    >
      <p
        className={clsx(
          'text-xs md:text-sm font-medium select-none',
          'text-gray-700 dark:text-gray-300'
        )}
      >
        Copyright &copy; 2002 - All Right Reserved by Reva Doni Aprilio.
      </p>
    </div>
  );
};

export default Footer;
