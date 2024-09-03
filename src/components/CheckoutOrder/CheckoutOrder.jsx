'use client';

import './CheckoutOrder.css';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mutate } from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const CheckoutOrder = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loadingToastId = toast.loading('Загрузка...');

    const formData = new FormData(event.currentTarget);
    const fields = Object.fromEntries(formData);

    try {
      await axios.post('/api/orders/checkout', {
        ...fields,
        number: fields.pn,
        phone: fields.pn,
        delivery_method: deliveryMethod,
        payment_method: paymentMethod,
      });

      mutate('/api/cart');
      toast.success('Заказ успешно оформлен');
      router.push('/customer');
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  const dmSx = (method) => {
    const isActive = deliveryMethod === method;

    return {
      borderColor: isActive ? '#1a6ec1' : 'black',
    };
  };
  const pmSx = (method) => {
    const isActive = paymentMethod === method;

    return {
      borderColor: isActive ? '#1a6ec1' : 'black',
    };
  };

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
              /<p className='ml-1'>Оформление заказа</p>
            </div>
            <section className='checkout__order mt-14 flex justify-center gap-6 mb-30'>
              <form
                // data-aos='fade-right'
                data-aos-anchor-placement='center-bottom'
                className='max-w-[1528px] w-full px-4'
                onSubmit={handleSubmit}
              >
                <div className='main_info'>
                  <div className='flex flex-wrap gap-6 inputs font-body text-xs xl:text-sm lg:text-sm'>
                    <div className='main_inputs flex flex-col'>
                      <p>Телефон</p>
                      <input
                        className='personal-info p-5 min-w-[300px]'
                        type='tel'
                        name='pn'
                        required
                      />
                    </div>
                    <div className='main_inputs flex flex-col'>
                      <p>Ф.И.О</p>
                      <input
                        className='personal-info p-5 min-w-[300px]'
                        type='text'
                        name='name'
                        required
                      />
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-6 inputs text-xs xl:text-sm lg:text-sm mt-10'>
                    <div className='selects flex flex-col'>
                      <p>Область</p>
                      <select
                        className='select_country_select'
                        id='country_select'
                        defaultValue=''
                        name='district'
                        required
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
                        name='city'
                        required
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
                      <div
                        className='cont-pay-method cursor-pointer'
                        style={dmSx('delivery')}
                        onClick={() => setDeliveryMethod('delivery')}
                      >
                        <p style={{ marginTop: '16px' }}>Доставка до двери</p>
                        <div className='flex flex-row items-center mt-9'>
                          <Image
                            src={'/oki.png'}
                            width={30}
                            height={15}
                            alt='selects'
                          />
                          <p className='price' style={{ marginLeft: '6px' }}>
                            Стоимость доставки
                          </p>
                          <p className='price' style={{ marginLeft: '43px' }}>
                            10 000 ₸
                          </p>
                        </div>
                      </div>
                      <div
                        className='cont-pay-method second flex items-center ml-10 cursor-pointer'
                        style={dmSx('pickup')}
                        onClick={() => setDeliveryMethod('pickup')}
                      >
                        Забрать из точки
                      </div>
                    </div>
                  </div>
                </div>
                {/* другая секция */}
                <div className='address flex flex-col font-body'>
                  <div className='flex flex-col mt-10'>
                    Населённый пункт
                    <select
                      className='small mt-3'
                      name='town'
                      id=''
                      defaultValue=''
                      required
                    >
                      <option value='' disabled hidden>
                        Выберите
                      </option>
                      <option value='city'>Город</option>
                      <option value='village'>Деревня</option>
                      <option value='township'>Посёлок</option>
                    </select>
                  </div>
                  <div className='flex flex-col mt-10'>
                    Адрес
                    <input
                      className='small mt-3 p-5'
                      type='text'
                      name='adres'
                      required
                    />
                  </div>
                  <div className='flex flex-col mt-10'>
                    Ориентир
                    <input
                      className='small mt-3 p-5'
                      type='text'
                      name='orient'
                      required
                    />
                  </div>
                  <div className='flex flex-col mt-10'>
                    Ваш рабочий адрес
                    <textarea
                      className='area mt-3 p-5'
                      type='text'
                      name='work_adres'
                      required
                    ></textarea>
                  </div>
                  <div className='flex flex-col mt-10'>
                    Комментарии к заказу
                    <textarea
                      className='area mt-3 p-5'
                      type='text'
                      name='comment'
                      required
                    ></textarea>
                  </div>
                  <div className='flex flex-col mt-10'>
                    Есть промокод
                    <input
                      className='small mt-3 p-5'
                      type='text'
                      name='coupon'
                    />
                  </div>
                </div>
                {/* другая секция */}
                <div className='walletcard-container flex flex-col mt-20 mb-20'>
                  <p className='pay-method'>Способ оплаты</p>
                  <div className='container items-center mt-10'>
                    <div
                      className='walletcard flex flex-col max-w-[389px] w-full max-h-[198px] h-full items-center cursor-pointer'
                      style={pmSx('card')}
                      onClick={() => toast.error('Неполадки с сервисом')}
                    >
                      <Image
                        src={'/card.png'}
                        width={100}
                        height={100}
                        alt='wallet'
                      />
                      <p>Оплата картой</p>
                    </div>
                    <div
                      className='walletcard flex flex-col max-w-[389px] w-full max-h-[198px] h-full items-center cursor-pointer'
                      style={pmSx('cash')}
                      onClick={() => setPaymentMethod('cash')}
                    >
                      <Image
                        src={'/card-holder.png'}
                        width={80}
                        height={80}
                        alt='card'
                      />
                      <p>Наличными при получении</p>
                    </div>
                  </div>
                </div>
                <button type='submit' className='checkout-btn'>
                  Оформить заказ
                </button>
              </form>
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
