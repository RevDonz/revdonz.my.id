import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from 'framer-motion';
import clsx from 'clsx';
import Navbar from '@/components/organism/Header';
import Footer from '@/components/mollecules/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <LazyMotion features={domAnimation}>
        <div className='min-h-screen flex flex-col h-full'>
          <Navbar />
          <AnimatePresence
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
            exitBeforeEnter
          >
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={clsx('layout flex flex-col flex-grow')}
            >
              <Component {...pageProps} />
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default MyApp;
