import './globals.css';

import NextTopLoader from 'nextjs-toploader';

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
            <ClientComponent>{children}</ClientComponent>
            <FixedBox />
          </Providers>
        </div>
      </body>
    </html>
  );
}
