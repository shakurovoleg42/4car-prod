'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import { FaAngleRight } from 'react-icons/fa6';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import AOS from 'aos';

import SelectShini from '@/components/templates/SelectShini';
import SelectDiski from '@/components/templates/SelectDiski';
import AboutImg from '@/assets/AboutImg.jpg';
import AddItemButton from '@/components/AddItemButton/AddItemButton';
import QuantityBox from '../QuantityBox';

const GlobalMain = ({ partners, news, bestSeller }) => {
  const [quantities, setQuantities] = useState({});

  const incrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

const GlobalMain = ({ partners, news, bestSeller }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className='overflow-hidden'>
        <div className='container mt-16 relative'>
          <section className='flex items-center justify-center mb-12 gap-5 flex-wrap px-4'>
            <div className='' data-aos='fade-right'>
              <h2 className='text-2xl font-bold font-body mb-4'>Подбор шин</h2>
              <SelectShini />
            </div>
            <div data-aos='fade-left'>
              <h2 className='text-2xl font-bold font-body mb-4'>
                Подбор дисков
              </h2>
              <SelectDiski />
            </div>
          </section>
          <section className='mb-10'>
            <h2 className='font-body text-center text-xl md:text-2xl xl:text-3xl mb-7 font-bold'>
              Наши партнёры
            </h2>
            <Slider
              dots={false}
              autoplay={true}
              infinite={true}
              slidesToShow={6}
              slidesToScroll={1}
              responsive={[
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                  },
                },
                {
                  breakpoint: 470,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                  },
                },
                {
                  breakpoint: 350,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                  },
                },
              ]}
            >
              {partners.map((el) => (
                <div
                  key={el.id}
                  className='flex w-full text-center items-center justify-center px-2 gap-5'
                >
                  <Link
                    href={`/${el.slug}`}
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    className='max-w-44 w-full h-full bg-white text-center flex flex-col items-center '
                  >
                    <img src={el.image} alt='product' className='h-44 object-contain' />
                    <span>{el.name}</span>
                  </Link>
                </div>
              ))}
            </Slider>
            <div className='flex justify-center '>
              <Link
                href='/manufacturers'
                className='2xl:text-2xl xl:text-2x lg:text-xl sm:text-md text-sm rounded text-white py-2 px-4 bg-primary mt-8'
              >
                Подробнее
              </Link>
            </div>
          </section>
          <section className='mb-20'>
            <h2 className='font-body text-center text-4xl mb-7 font-bold'>
              Новости
            </h2>
            <div className='mt-14 mb-12 px-4 flex flex-wrap justify-center gap-4 news__content'>
              {news.data.map((el) => (
                <a
                  key={el.id}
                  href={`/news/${el.slug}`}
                  data-aos='fade-up-right'
                  data-aos-anchor-placement='top-bottom'
                  className='news__item max-w-[550px] w-full p-4 border flex flex-col justify-between rounded-[25px]'
                >
                  <div>
                    <div>
                      <span className='text-sm text-blue-400 font-bold flex flex-col justify-between'>
                        {el.date}
                      </span>
                      <h2 className='2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm mb-3'>
                        {el.title}
                      </h2>
                      <p className='text-justify mb-4'>{el.description}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                      <Link
                        href={`/news/${el.slug}`}
                        // onClick={scrollToTop}
                        className='py-2  max-w-[150px] w-full flex justify-center bg-primary font-medium text-white rounded'
                      >
                        Подробнее
                      </Link>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className='flex justify-center'>
              <Link
                href='/news'
                className='flex flex-row items-center text-center border-b-2 border-b-gray-200'
              >
                <b className='items-center text-center text-[22px]font-regular'>
                  посмотреть все новости
                </b>
                <FaAngleRight />
              </Link>
            </div>
          </section>
          <section className='mb-10'>
            <h2 className=' font-body text-center text-4xl mb-10 font-bold'>
              О нас
            </h2>
            <div className='flex 2xl:flex-nowrap flex-wrap w-full  font-body justify-center px-5 gap-4'>
              <img
                data-aos='fade-down-right'
                data-aos-anchor-placement='center-bottom'
                className='2xl:max-w-[650px] xl:max-w-[550px] lg:max-w-[590px] w-full 2xl:h-[500px] xl:h-[500px] lg:h-[500px]'
                src={AboutImg.src}
                alt=''
              />
              <div
                data-aos='fade-down-left'
                data-aos-anchor-placement='center-bottom'
                className='2xl:max-w-[650px] xl:max-w-[520px] lg:max-w-[590px] flex flex-col 2xl:justify-between justify-center mx-auto'
              >
                <h2 className='font-medium mb-2 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl'>
                  4CAR Интернет-магазин шин и дисков
                </h2>
                <p
                  className='2xl:text-2xl
                            xl:text-2xl lg:text-xl md:text-lg sm:text-lg text-md leading-10 text-justify mb-5 '
                >
                  В нашем магазине представлен широкий ассортимент популярных
                  брендов. У нас вы сможете купить зимние и летние шины, литые и
                  flow forming автомобильные диски. Есть удобный инструмент для
                  подбора шин и дисков по размерам либо модели Вашего
                  автомобиля. Так, же для зарегистрированных клиентов мы
                  предоставляем скидки. Большинство товаров в нашем магазине.
                </p>
                <Link
                  className='bg-primary max-w-[200px] text-white 2xl:text-xl xl:text-xl lg:text-lg  text-center py-2 '
                  href='/about'
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </section>
          <section className='text-center mb-14'>
            <h3 className='font-body text-center text-3xl mb-7 font-bold'>
              Хиты продаж
            </h3>
            <Slider
              dots={false}
              autoplay={true}
              infinite={true}
              slidesToShow={3}
              slidesToScroll={1}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ]}
            >
              {bestSeller.map((e) => (
                <div
                  key={e.id}
                  data-aos='fade-up'
                  data-aos-anchor-placement='center-bottom '
                  className=' cursor-pointer rounded 2xl:max-w-[320px] xl:max-w-[300px] lg:max-w-[260px] md:max-w-[260px] sm:max-w-[220px] max-w-[220px] w-full border pt-2'
                >
                  <Link href={`/${e.slug}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className='2xl:max-w-[140px] min-h-[200px] xl:max-w-[110px] lg:max-w-[80px] md:max-w-38 sm:max-w-[80px] max-w-[80px] w-full m-auto 2xl:pt-6 xl:pt-5 lg:pt-4 md:pt-2 sm:pt-1 pt-0 mb-3 object-contain'
                      src={e.image}
                      alt={e.name}
                    />
                  </Link>
                  <div className='bg-primary py-2 rounded'>
                    <h3
                      className='px-6 2xl:mt-8 xl:mt-6 lg:mt-5 md:mt-5 sm:mt-4 mt-4 md:text-center sm:text-center text-center font-semibold 
                                            2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-sm text-white min-h-[60px] xl:min-h-[84px]'
                    >
                      {e.name}
                    </h3>
                    <div className='w-full flex flex-col mt-8 px-4'>

                      <div className='flex justify-center mb-3 flex-wrap gap-5'>
                        <QuantityBox
                          quantity={quantities[e.id] || 1}
                          inc={() => incrementQuantity(e.id)}
                          dec={() => decrementQuantity(e.id)}
                        />
                        <AddItemButton
                          item={e}
                          quantity={quantities[e.id] || 1}
                        />
                      </div>
                      <div className='px-4'>
                        <Link
                          href={e.slug}
                          type='submit'
                          className='py-1 w-full 2xl:text-lg xl:text-lg lg:text-md md:text-sm  text-xs px-3 text-white bg-red-600 rounded active:bg-red-700'
                        >
                          Купить в рассрочку
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
        </div>
      </div>
    </>
  );
};

export default GlobalMain;
