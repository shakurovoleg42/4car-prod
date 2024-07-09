'use client';

import { useState, useEffect } from 'react';
import './FixedBox.css';

import Image from 'next/image';

const FixedBox = () => {
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const whatsappVis = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', whatsappVis);

    return () => {
      window.removeEventListener('scroll', whatsappVis);
    };
  }, []);

  return (
    <div className='callBack'>
    {showButton && (
      <a
        href='https://api.whatsapp.com/send?phone=77017448007'
        className='callBack__whatsApp'
        target='_blank'
      >
        <Image className='hidden md:block' src='/whatsapp.svg' alt='whatsApp' width={52} height={52} />
        <Image className='block md:hidden' src='/whatsapp.svg' alt='whatsApp' width={35} height={35} />
      </a>
    )}
    </div>
  );
};

export default FixedBox;