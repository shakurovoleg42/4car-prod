'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductModal2 from './ProductModal2';
import ProductModal3 from './ProductModal3';
import ProductModal4 from './ProductModal4';
import DescriptionModal from './DescriptionModal';
import Reviews from './Reviews'
import Link from 'next/link';

const Tabs = ({ similar_products = [], product_id, user_cookie, product_fullDescription, product_shortDescription }) => {
  const [activeModal, setActiveModal] = useState('');

  const productId = product_id
  
  useEffect(() => {
    if (product_shortDescription !== undefined) {
      setActiveModal('modal6');
    } else {
      setActiveModal('modal3');
    }
  }, [product_shortDescription]);

  const openModal = (modalType) => {
    setActiveModal(modalType);
    
  };

  return (
    <>
      <div className=''>
        <section className='mt-20 mb-20 font-forms justify-between accountContent'>
          <div
            className='max-w-[900px] w-full flex gap-4 px-8 justify-between items-center flex-wrap 2xl:text-md
                    xl:text-md lg:text-sm md:border-b border py-2 mx-auto'
          >
            <button
              onClick={() => openModal('modal6')}
              className={`border-b-4 ${
                activeModal === 'modal6'
                  ? 'border-primary'
                  : 'border-transparent'
              }`}
              type='submit'
            >
              Описание
            </button>
            <button
              onClick={() => openModal('modal3')}
              className={`border-b-4 ${
                activeModal === 'modal3'
                  ? 'border-primary'
                  : 'border-transparent'
              }`}
              type='submit'
            >
              Оплата и доставка
            </button>
            <button
              onClick={() => openModal('modal4')}
              className={`border-b-4 ${
                activeModal === 'modal4'
                  ? 'border-primary'
                  : 'border-transparent'
              }`}
              type='submit'
            >
              Возврат и гарантия
            </button>
            <Link href='/credit'>Условия кредитования</Link>
            <button
              onClick={() => openModal('modal5')}
              className={`border-b-4 ${
                activeModal === 'modal5'
                  ? 'border-primary'
                  : 'border-transparent'
              }`}
              type='submit'
            >
              Отзывы
            </button>

          </div>

          <div className='mt-6 w-full flex-col flex justify-center items-center  px-4'>
            {activeModal === 'modal3' && <ProductModal3 />}
            {activeModal === 'modal4' && <ProductModal4 />}
            {activeModal === 'modal5' && <Reviews product_id={productId} user_cookie={user_cookie}/>}
            {activeModal === 'modal6' && <DescriptionModal product_fullDescription={product_fullDescription} product_shortDescription={product_shortDescription}/>}

          </div>
          <div className='flex flex-col items-center mt-20'>
            <p className='font-forms font-bold 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md'>
              Другие варианты
            </p>
            <ProductModal2 shina={similar_products}/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tabs;
