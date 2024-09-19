import './globals.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';
import Script from 'next/script';

import Providers from './Providers';
import ClientComponent from '../components/ClientComponent';
import FixedBox from '../components/FixedBox/Fixedbox';

export const metadata = {
  title: '4car.kz - интернет-магазин шин и дисков',
  description:
    '★ Интернет-магазин шин и дисков в Алматы. ✔ Большой ассортимент, ✔ низкие цены, ✔ бесплатная доставка! ☎+7 (701) 744-80-07',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <NextTopLoader color='#FFFFFF' height={2} showSpinner={false} />
          <Providers>
            <ClientComponent>
              <Toaster />
              {children}
            </ClientComponent>
            <FixedBox />
          </Providers>
        </div>
        <Script
          id='KS-Widget'
          src='https://kaspi.kz/kaspibutton/widget/ks-wi_ext.js'
        />
      </body>
    </html>
  );
}
