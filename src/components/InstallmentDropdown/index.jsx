import { useEffect, useState } from 'react';

import { KaspiButton, ForteButton } from '../Installments';
import reinitForteButtons from '@/utils/reinitForteButtons';

const InstallmentDropdown = ({ sku }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      reinitForteButtons();
    }
  }, [isOpen]);

  return (
    <div className='relative'>
      <button
        onClick={toggleDropdown}
        className='py-1 w-full text-xs px-3 text-white bg-red-600 rounded active:bg-red-700'
      >
        В рассрочку
      </button>
      {isOpen && (
        <div
          className='absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50'
          style={{ bottom: '120%' }}
        >
          <div className='px-4 py-2'>
            <KaspiButton sku={sku} isCard />
          </div>
          <div className='px-4 py-2'>
            <ForteButton sku={sku} />
          </div>
        </div>
      )}
    </div>
  );
};

export default InstallmentDropdown;
