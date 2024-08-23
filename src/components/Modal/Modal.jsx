import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import OrderCall from '../templates/OrderCall';

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
    };

    if (isOpen) {
      document.body.classList.add('modal-open');
      document.addEventListener('wheel', handleScroll, { passive: false });
    } else {
      document.body.classList.remove('modal-open');
      document.removeEventListener('wheel', handleScroll);
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('wheel', handleScroll);
    };
  }, [isOpen]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className='modal-overlay' onClick={onClose}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            <span className='close-btn' onClick={onClose}>
              &times;
            </span>
            <OrderCall />
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
