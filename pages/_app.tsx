import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
