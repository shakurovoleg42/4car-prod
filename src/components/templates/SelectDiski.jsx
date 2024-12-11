import { useState } from 'react';
import SetFilterDiski from './SetFilterDiski';
import SearchByCarDiski from './searchByCarDiski';
import Diska from '../../assets/Diska.png';

const SelectDiski = ({ cars }) => {
  const [activeModal, setActiveModal] = useState('modal1');
  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  return (
    <section className="selectProduct overflow-hidden">
      <div className="bg-darkPrimary flex justify-between text-white rounded-t-[14px]">
        <button
          onClick={() => openModal('modal1')}
          className={`${
            activeModal === 'modal1'
              ? 'border-white'
              : 'border-transparent bg-white text-black'
          } py-4 w-1/2`}
        >
          Диски по размеру
        </button>
        <button
          onClick={() => openModal('modal2')}
          className={`${
            activeModal === 'modal2'
              ? 'border-white'
              : 'border-transparent bg-white text-black'
          } py-4 w-1/2`}
        >
          Диски по автомобилю
        </button>
      </div>
      <div
        className={`transition-[max-height] duration-500 ease-in-out bg-primary text-white px-4 rounded-b-[14px] overflow-hidden ${
          activeModal === 'modal1' ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        {activeModal === 'modal1' && <SetFilterDiski img={Diska} id={'diska'} />}
      </div>
      <div
        className={`transition-[max-height] duration-500 ease-in-out bg-primary text-white px-4 rounded-b-[14px] overflow-hidden ${
          activeModal === 'modal2' ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        {activeModal === 'modal2' && <SearchByCarDiski avtomobile={cars} />}
      </div>
    </section>
  );
};

export default SelectDiski;
