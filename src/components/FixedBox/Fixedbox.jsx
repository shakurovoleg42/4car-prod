import './FixedBox.css';

import Image from 'next/image';

const FixedBox = () => {

  return (
    <div className='callBack'>
      <a
        href='https://api.whatsapp.com/send?phone=77017448007'
        className='callBack__whatsApp'
        target='_blank'
      >
        <Image className='hidden md:block' src='/whatsapp.svg' alt='whatsApp' width={64} height={64} />
        <Image className='block md:hidden' src='/whatsapp.svg' alt='whatsApp' width={42} height={42} />
      </a>
    </div>
  );
};

export default FixedBox;