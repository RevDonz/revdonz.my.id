import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
} from 'framer-motion';
import clsx from 'clsx';
import Navbar from '@/components/organism/Header';
import Footer from '@/components/mollecules/Footer';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import '@/styles/nprogress.css';
import { DefaultSeo } from 'next-seo';
import { variants } from '@/animations/variants';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <DefaultSeo
        description={'Personal Website Porfolio of Reva Doni Aprilio'}
        defaultTitle='Reva Doni Aprilio - Student and Junior Frontend Developer'
        titleTemplate={`%s · Revdonz.my.id`}
        openGraph={{
          title: 'Reva Doni Aprilio - Student and Junior Frontend Developer',
          description: 'Personal Website Porfolio of Reva Doni Aprilio',
          images: [
            {
              url: `https://www.revdonz.my.id/og-default.jpg`,
            },
          ],
        }}
        twitter={{
          handle: '@revdonz',
          cardType: 'summary_large_image',
        }}
      />
      <LazyMotion features={domAnimation}>
        <div className='min-h-screen flex flex-col h-full'>
          <Navbar />
          <AnimatePresence
            mode='wait'
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <m.div
              key={router.asPath}
              variants={variants}
              initial='hidden'
              animate='enter'
              exit='exit'
              transition={{ ease: 'easeInOut', duration: 0.5 }}
              className={clsx('flex flex-col h-full flex-grow')}
            >
              <Component {...pageProps} />
            </m.div>
          </AnimatePresence>
          <Footer />
        </div>
      </LazyMotion>
    </ThemeProvider>
  );
}

export default MyApp;
