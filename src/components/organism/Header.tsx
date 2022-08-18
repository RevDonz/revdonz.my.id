import clsx from 'clsx';
import DrawerToggler from '../atoms/DrawerToggler';
import DarkMode from '../mollecules/DarkMode';
import Navbar from '../mollecules/Navbar';

const Header = () => {
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
        <DrawerToggler />
        <Navbar />
        <DarkMode />
      </div>
    </header>
  );
};

export default Header;
