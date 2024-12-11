'use client';
import { useState } from 'react';
import SetFilter from './SetFilter';
import SearchByCar from './SearchByCar';
import Shina from '../../assets/Shina.png';

const SelectShini = ({ cars }) => {
  const [activeModal, setActiveModal] = useState('modal1');

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  return (
    <>
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
            Шины по размеру
          </button>
          <button
            onClick={() => openModal('modal2')}
            className={`${
              activeModal === 'modal2'
                ? 'border-white'
                : 'border-transparent bg-white text-black'
            } py-4 w-1/2`}
          >
            Шины по автомобилю
          </button>
        </div>

        {/* Контейнер для первого модального окна */}
        <div
          className={`transition-[max-height] duration-500 ease-in-out bg-primary text-white px-4 rounded-b-[14px] overflow-hidden ${
            activeModal === 'modal1' ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          {activeModal === 'modal1' && <SetFilter img={Shina} id={'shina'} />}
        </div>

        {/* Контейнер для второго модального окна */}
        <div
          className={`transition-[max-height] duration-500 ease-in-out bg-primary text-white px-4 rounded-b-[14px] overflow-hidden ${
            activeModal === 'modal2' ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          {activeModal === 'modal2' && <SearchByCar avtomobile={cars} />}
        </div>
      </section>
    </>
  );
};

export default SelectShini;
