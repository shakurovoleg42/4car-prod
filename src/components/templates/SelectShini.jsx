'use client';
import { useState } from 'react';
import SetFilter from './SetFilter';
import SearchByCar from './SearchByCar';
import Shina from '../../assets/Shina.png';

const SelectShini = ({cars}) => {
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
            Шины по размеру
          </button>
          <button
            onClick={() => openModal('modal2')}
            className={`${activeModal === 'modal2' ? 'border-white' : 'border-transparent bg-white text-black'} py-4 w-1/2`}
          >
            Шины по автомобилю
          </button>
        </div>
        <div className='w-full flex-col flex justify-center items-center bg-primary text-white px-4 rounded-b-[14px]'>
          {activeModal === 'modal1' && <SetFilter img={Shina} id={'shina'} />}
          {activeModal === 'modal2' && <SearchByCar avtomobile={cars}/>}
        </div>
      </section>
    </>
  );
};

export default SelectShini;
