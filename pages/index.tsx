import { useTheme } from 'next-themes';
import Main from '../components/layouts/Main';

export default function Index() {
  const { theme, setTheme } = useTheme();

  return (
    <Main>
      <div className=''>
        <p>Current theme : {theme}</p>
        <button
          className='px-3 py-2 bg-red-500'
          onClick={() => setTheme('dark')}
        >
          Dark
        </button>
        <button
          className='px-3 py-2 bg-blue-500'
          onClick={() => setTheme('light')}
        >
          Light
        </button>
      </div>
    </Main>
  );
}
