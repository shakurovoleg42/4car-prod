import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './CheckoutOrder.css';
// import Image from 'next/image';
import select from '../../assets/select.svg';
import walletImg from '../../assets/wallet-image.svg';
import cardImg from '../../assets/card-image.svg';
import Link from 'next/link';

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
          <div className='flex flex-row font-body mb-5 mt-10 ml-20'>
                <Link href='/' className='mr-1 underline cursor-pointer'>
                  Главная
                </Link>
                /
                <p
                  className='ml-1'
                >
                  Оформление заказа
                </p>
              </div>
            <section className='checkout__order mt-14 flex justify-center gap-6 mb-30'>
            
              <div
                // data-aos='fade-right'
                data-aos-anchor-placement='center-bottom'
                className='max-w-[1528px] w-full px-4'
              >
                <div className='main_info'>
                  <div className='flex flex-wrap gap-6 inputs font-body text-xs xl:text-sm lg:text-sm'>
                    <div className='main_inputs flex flex-col'>
                      <p>Телефон</p>
                      <input className='personal-info p-5 min-w-[300px]' type='text' />
                    </div>
                    <div className='main_inputs flex flex-col'>
                      <p>Ф.И.О</p>
                      <input className='personal-info p-5 min-w-[300px]' type='text' />
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-6 inputs text-xs xl:text-sm lg:text-sm mt-10'>
                    <div className='selects flex flex-col'>
                      <p>Область</p>
                      <select
                        className='select_country_select'
                        id='country_select'
                        defaultValue=''
                      >
                        <option value='' disabled hidden>
                          Выберите
                        </option>
                        <option value='Jibek Joli'>Жыбек Жолы</option>
                      </select>
                    </div>
                    <div className='selects flex flex-col'>
                      <p>Город</p>
                      <select
                        className='select_country_select'
                        id='country_select'
                        defaultValue=''
                      >
                        <option value='' disabled hidden>
                          Выберите
                        </option>
                        <option value='Almaty'>Алматы</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* другая секция */}
                <div className='pay_method mt-20 font-body'>
                  <div>
                    <p
                      style={{
                        fontSize: '35.15px',
                        lineHeight: '42.85px',
                        marginBottom: '69.78px',
                      }}
                    >
                      Способ получения
                    </p>
                    <div className='main-container-pay-method flex flex-row'>
                      <div className='cont-pay-method'>
                        <p style={{ marginTop: '16px' }}>Доставка до двери</p>
                        <div className='flex flex-row items-center mt-9'>
                          <img
                            src={select}
                            style={{ width: '31px', height: '12px' }}
                            // width={31}
                            // height={12}
                            alt='selects'
                          />
                          <p className='price' style={{ marginLeft: '6px' }}>
                            Стоимость доставки
                          </p>
                          <p className='price' style={{ marginLeft: '43px' }}>
                            0 Т
                          </p>
                        </div>
                      </div>
                      <div className='cont-pay-method second flex items-center ml-10'>
                      Забрать из точки
                      </div>
                    </div>
                  </div>
                </div>
                {/* другая секция */}
                <div className='address flex flex-col font-body'>
                  <div className='flex flex-col mt-10'>
                    Населённый пункт
                    <select className='small mt-3' name='' id=''></select>
                  </div>
                  <div className='flex flex-col mt-10'>
                    Адрес
                    <input className='small mt-3 p-5' type='text' />
                  </div>
                  <div className='flex flex-col mt-10'>
                    Ориентир
                    <input className='small mt-3 p-5' type='text' />
                  </div>
                  <div className='flex flex-col mt-10'>
                    Ваш рабочий адрес
                    <input className='area mt-3 p-5' type='text' />
                  </div>
                  <div className='flex flex-col mt-10'>
                    Комментарии к заказу
                    <input className='area mt-3 p-5' type='text' />
                  </div>
                  <div className='flex flex-col mt-10'>
                    Есть промокод
                    <input className='small mt-3 p-5' type='text' />
                  </div>
                </div>
                {/* другая секция */}
                <div className='walletcard-container flex flex-col mt-20 mb-20'>
                  <p className='pay-method'>Способ оплаты</p>
                  <div className='container items-center mt-10'>
                    <div className='walletcard flex flex-col max-w-[389px] w-full max-h-[198px] h-full items-center'>
                      <img
                        src={cardImg}
                        style={{ width: '130.67px', height: '93.33px' }}
                        // width={130.67}
                        // height={93.33}
                        alt='wallet'
                      />
                      <p>Оплата картой</p>
                    </div>
                    <div className='walletcard flex flex-col max-w-[389px] w-full max-h-[198px] h-full items-center'>
                      <img
                        src={walletImg}
                        style={{ width: '107.19px', height: '94.06px' }}
                        // width={107.19}
                        // height={94.06}
                        alt='card'
                      />
                      <p>Наличными при получении</p>
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
