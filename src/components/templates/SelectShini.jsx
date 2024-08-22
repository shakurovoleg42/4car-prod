import { useState } from 'react';
import SetFilter from './SetFilter';
import SearchByCar from './SearchByCar';
import Shina from '../../assets/Shina.png';

const SelectShini = () => {
  const [activeModal, setActiveModal] = useState('modal1');

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  return (
    <>
      <section className='selectProduct'>
        <div className='bg-light flex justify-between text-black rounded-2xl border-t-2 border-l-2 border-r-2 border-borderLight'>
          <button
            onClick={() => openModal('modal1')}
            className={`border-b-4 ${activeModal === 'modal1' ? 'border-white' : 'border-transparent'} py-4 w-1/2`}
            type='submit'
          >
            Шины по размеру
          </button>
          <button
            onClick={() => openModal('modal2')}
            className={`border-b-4 ${activeModal === 'modal2' ? 'border-white' : 'border-transparent'} w-1/2`}
            type='submit'
          >
            Шины по автомобилю
          </button>
        </div>
        <div className='w-full flex-col flex justify-center items-center bg-light  text-black px-4 rounded-2xl border-b-2 border-l-2 border-r-2 border-borderLight'>
          {activeModal === 'modal1' && <SetFilter img={Shina} id={'shina'} />}
          {activeModal === 'modal2' && <SearchByCar />}
        </div>
      </section>
    </>
  );
};

export default SelectShini;
