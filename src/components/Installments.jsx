import { useEffect } from 'react';
import Script from 'next/script';

export const KaspiButton = ({ sku, isCard = false }) => {
  useEffect(() => {
    if (window.ksWidgetInitializer) {
      window.ksWidgetInitializer.reinit();
    }
  }, []);

  return (
    <div
      className='ks-widget'
      data-template={isCard ? 'flatButton' : 'button'}
      data-merchant-sku={sku}
      data-merchant-code='4carkz'
      data-city='750000000'
      data-style='small'
    ></div>
  );
};

export const ForteButton = ({ sku }) => {
  return (
    <>
      <Script
        type='text/javascript'
        src='https://cdn-1.forte.kz/assets/forte-market-scripts/buy-credit.js'
      />
      <div
        className='forte-btn'
        data-merchant-id='A08oeKE1SgqVbfF3a4'
        data-articul={sku}
        data-city-id='KZ-ALA'
        data-theme='dark'
      ></div>
    </>
  );
};
