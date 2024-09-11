import { useEffect } from 'react';

export const KaspiButton = ({ sku }) => {
  useEffect(() => {
    const buttonContainer = document.getElementById('dynamic');

    buttonContainer.innerHTML = `
      <div class="ks-widget" 
           data-template="button" 
           data-merchant-sku=${sku} 
           data-merchant-code="4carkz" 
           data-city="750000000">
      </div>
    `;

    if (window.ksWidgetInitializer) {
      window.ksWidgetInitializer.reinit();
    }
  }, [sku]);

  return <div id='dynamic'></div>;
};

export const ForteButton = ({ sku }) => {
  useEffect(() => {
    const scriptId = 'Forte-Widget';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src =
        'https://cdn-1.forte.kz/assets/forte-market-scripts/buy-credit.js';
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className='forte-btn'
      data-merchant-id='A08oeKE1SgqVbfF3a4'
      data-articul={sku}
      data-city-id='KZ-ALA'
      data-theme='dark'
    ></div>
  );
};
