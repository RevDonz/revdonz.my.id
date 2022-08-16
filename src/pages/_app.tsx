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
import { Router } from 'next/router';
import NProgress from 'nprogress';
import '@/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
              className={clsx('flex flex-col flex-grow h-full')}
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
