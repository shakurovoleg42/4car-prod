import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './CheckoutOrder.css';
import Image from 'next/image';
import select from '../../assets/select.png'

const CheckoutOrder = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <header className='bg-black bg-no-repeat bg-right w-full pb-20 bg-checkout'>
          <div className='container '>
            <NavBar />
            <div className='mt-28 px-4' data-aos='fade-right'>
              <h1
                className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'
              >
                Оформление заказа
              </h1>
            </div>
          </div>
        </header>
        <ScrollToTop />
        <main className='mt-30'>
          <div className='container'>
            <section className='checkout__order mt-14 flex justify-center gap-6 mb-30'>
              <div
                data-aos='fade-right'
                data-aos-anchor-placement='center-bottom'
                className='max-w-[1528px] w-full px-4'
              >
                <div className='main_info'>
                  <div className='flex flex-row font-body text-xs xl:text-sm lg:text-sm'>
                    <div className='main_inputs flex flex-col'>
                      <p>Телефон</p>
                      <input type='text' />
                    </div>
                    <div className='main_inputs flex flex-col ml-10'>
                      <p>Ф.И.О</p>
                      <input ctype='text' />
                    </div>
                  </div>
                  <div className='flex flex-rowtext-xs xl:text-sm lg:text-sm mt-10'>
                    <div className='flex flex-col'>
                      <p>Область</p>
                      <select
                        className='select_country_select'
                        id='country_select'
                        defaultValue=''
                      >
                        <option value='' disabled hidden>
                          Выберите
                        </option>
                        <option value='UK'>Великобритания</option>
                        <option value='USA'>США</option>
                        <option value='Georgia'>Грузия</option>
                        <option value='Kazakhstan'>Казахстан</option>
                        <option value='Uzbekistan'>Узбекистан</option>
                      </select>
                    </div>
                    <div className='flex flex-col ml-10'>
                      <p>Город</p>
                      <select
                        className='select_country_select'
                        id='country_select'
                        defaultValue=''
                      >
                        <option value='' disabled hidden>
                          Выберите
                        </option>
                        <option value='UK'>Великобритания</option>
                        <option value='USA'>США</option>
                        <option value='Georgia'>Грузия</option>
                        <option value='Kazakhstan'>Казахстан</option>
                        <option value='Uzbekistan'>Узбекистан</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* другая секция */}
                <div className='pay_method mt-20'>
                  <div>
                    Способ получения
                    <div className='flex flex-row'>
                      <div>
                      Доставка до двери 
                      <div className='flex flex-row'>
                            <Image src={select} width={31.62} height={20.82} alt='test' />
                            <p>Стоимость доставки</p>
                            <p>0 Т</p>
                      </div>
                      </div>
                      <div className='ml-10'>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default CheckoutOrder;
