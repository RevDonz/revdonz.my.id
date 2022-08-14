import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/mollecules/Header';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import clsx from 'clsx';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <LazyMotion features={domAnimation}>
        <Navbar />
        <AnimatePresence
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
          exitBeforeEnter
        >
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={clsx('layout')}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default MyApp;
