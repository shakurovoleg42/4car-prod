import { useState } from 'react';
import SetFilterDiski from './SetFilterDiski';
import SearchByCar from './SearchByCar';
import Diska from '../../assets/Diska.png';

const SelectDiski = () => {
  const [activeModal, setActiveModal] = useState('modal1');

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  return (
    <>
      <section className='selectProduct'>
        <div className='bg-darkPrimary flex justify-between text-white rounded-t-[14px]'>
          <button
            onClick={() => openModal('modal1')}
            className={`${activeModal === 'modal1' ? 'border-white' : 'border-transparent bg-white text-black'} py-4 w-1/2`}
          >
            Диски по размеру
          </button>
          <button
            onClick={() => openModal('modal2')}
            className={`${activeModal === 'modal2' ? 'border-white' : 'border-transparent bg-white text-black'} py-4 w-1/2`}
          >
            Диски по автомобилю
          </button>
        </div>
        <div className='w-full flex-col flex justify-center items-center bg-primary  text-white px-4 rounded-b-[14px]'>
          {activeModal === 'modal1' && <SetFilterDiski img={Diska} id={'diska'} />}
          {activeModal === 'modal2' && <SearchByCar />}
        </div>
      </section>
    </>
  );
};

export default SelectDiski;
