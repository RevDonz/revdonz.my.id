import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Main from '../components/layouts/Main';

export default function Index() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Main>
      <div className=''>
        <p>Current theme : {theme}</p>
        <button
          className='mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md'
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          Change Theme
        </button>
      </div>
    </Main>
  );
}
