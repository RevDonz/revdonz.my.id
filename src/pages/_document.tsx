import Favicon from '@/components/atoms/Favicon';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <Favicon />
        <script
          async
          defer
          data-website-id='976630f0-ea76-4d3b-852a-b6ba32310687'
          src='https://umami-pied.vercel.app/umami.js'
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
