'use client';
import './Product.css';

import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
// import Image from 'next/image';
import fetchService from '@/services/fetchs';

import { formattedPrice } from '@/utils/price';
import NavBar from '../NavBar/NavBar';
import Tabs from '../templates/Tabs';
import Footer from './../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import responsiveImage from '@/utils/responsiveImage';
import AddItemButton from '../AddItemButton/AddItemButton';

const Product = ({ product }) => {
  const [data, setData] = useState({ avg_rating: 0, reviews: [] });
  const [countProduct, setCountProduct] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState('1 мес');
  const model = product.model.replace(/ /g, '+');


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchService.getProductReview(product.id);

        if (reviewsData && Array.isArray(reviewsData.reviews)) {
          setData(reviewsData);
        } else {
          console.error(
            'Expected data to be an object with a reviews array, but received:',
            reviewsData
          );
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [product.id]);

  const Increment = () => {
    setCountProduct(countProduct + 1);
  };

  const Decrement = () => {
    countProduct > 1 ? setCountProduct(countProduct - 1) : 1;
  };

  const months = [
    '1 мес',
    '2 мес',
    '3 мес',
    '4 мес',
    '5 мес',
    '6 мес',
    '7 мес',
    '8 мес',
    '9 мес',
    '10 мес',
    '11 мес',
    '12 мес',
  ];

  const ProductPrice = product.price * countProduct;

  const calculateInstallment = (selectedMonth) => {
    const monthsCount = parseInt(selectedMonth.split(' ')[0], 10);
    const installment = ProductPrice / monthsCount;
    const roundedInstallment = Math.ceil(installment);
    return roundedInstallment.toFixed(0);
  };

  return (
    <>
      <div className='overflow-hidden'>
        <header className='bg-no-repeat bg-cover bg-center w-full pb-20 bg-map'>
          <div className='container'>
            <NavBar />
          </div>
        </header>
        <ScrollToTop />
        <main>
          <div className='container'>
            <section className='mt-14 font-body px-4'>
              <div className='flex flex-row font-body mb-5'>
                <Link href='/' className='mr-1 underline cursor-pointer'>
                  Главная
                </Link>
                /<p className='ml-1 underline cursor-pointer'>{product.name}</p>
              </div>
              <div
                className='flex gap-5 flex-col ranking'
                data-aos='fade-right'
              >
                <h1 className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md font-body font-bold'>
                  {product.name}
                </h1>
                <div className='flex gap-6'>
                  <Stack className='max-w-[120px]' spacing={1}>
                    <Rating
                      name='half-rating'
                      value={data.avg_rating || 0}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                  <p>
                    <span>{data.reviews?.length || 0}</span> отзыв
                  </p>
                </div>
              </div>
              <div className='mt-10 flex max-w-[1400px] w-full justify-between gap-4 mx-auto mb-24 productHero'>
                <div
                  data-aos='fade-right'
                  className='flex items-center gap-4 max-w-[700px] w-full justify-between productLeft'
                >
                  <img src={product.image} alt='' {...responsiveImage} />
                  <div className='flex flex-col gap-4'>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Модель шины
                      <Link href={`/tires?modeli=${model}`}>
                        <span className='text-primary'>{product.model}</span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Ширина шины
                      <Link href={`/tires?width=${product.width}`}>
                        <span className='text-primary'>{product.width}</span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Высота
                      <Link href={`/tires?height=${product.height}`}>
                        <span className='text-primary'>{product.height}</span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Диаметр шины
                      <Link href={`/tires?diameter=${product.diameter}`}>
                        <span className='text-primary'>{product.diameter}</span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Сезонность
                      <Link href={`/tires?season=${product.season}`}>
                        <span className='text-primary'>{product.season}</span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Шипы
                      <Link href={`/tires?spikes=${product.spikes}`}>
                        <span className='text-primary'>{product.spikes}</span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Индекс нагрузки
                      <Link href={`/tires?nagruzki=${product.indeks_nagruzki}`}>
                        <span className='text-primary'>
                          {product.indeks_nagruzki}
                        </span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Индекс скорости
                      <Link href={`/tires?skorosti=${product.indeks_skorosti}`}>
                        <span className='text-primary'>
                          {product.indeks_skorosti}
                        </span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      RunFlat
                      <Link href={`/tires?runflat=${product.run_flat}`}>
                        <span className='text-primary'>{product.run_flat}</span>
                      </Link>
                    </p>
                  </div>
                </div>
                <div data-aos='fade-left'>
                  <div className='flex items-center gap-7 flex-wrap max-w-[620px] w-full productRight'>
                    <h2
                      className='text-darkMain 2xl:text-3xl
                                    xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl font-body font-bold max-w-[180px] w-full'
                    >
                      {formattedPrice(ProductPrice)} тг
                    </h2>
                    <div className='flex items-center gap-5 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-xl'>
                      <button
                        onClick={Decrement}
                        className='2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl text-2xl text-gray-500'
                      >
                        -
                      </button>
                      <p className='2xl:w-14 xl:w-12 lg:w-10 md:w-8 sm:w-6 w-6 text-center'>
                        {countProduct}
                      </p>
                      <button
                        className='2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-gray-500'
                        onClick={Increment}
                      >
                        +
                      </button>
                    </div>
                    <div className='flex flex-wrap items-center gap-5 w-full btnsBuyProduct'>
                      <AddItemButton
                        item={product}
                        quantity={countProduct}
                        isProduct
                      />
                      <button
                        type='submit'
                        className='py-2 bg-primary max-w-[300px] w-full 2xl:text-2xl
                                        xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm text-white rounded active:bg-blue-700'
                      >
                        Купить в один клик
                      </button>
                    </div>
                    <div className='flex max-w-[620px] w-full btnKredit'>
                      <div className='bg-red-600 max-w-[200px] w-full rounded-s-lg text-white'>
                        {selectedMonth && (
                          <div className='px-3 pt-1'>
                            <p className='text-sm text-center'>рассрочка</p>
                            <div className='flex items-end gap-4 justify-center'>
                              <p className='font-bold 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-lg text-md tracking-widest'>
                                {calculateInstallment(selectedMonth)}
                              </p>
                              <span>тг/мес</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <Autocomplete
                        value={selectedMonth}
                        onChange={(event, newValue) =>
                          setSelectedMonth(newValue)
                        }
                        options={months}
                        renderInput={(params) => <TextField {...params} />}
                        className='max-w-[170px] hover:outline-none border-red-600 border 2xl:rounded-e-lg xl:rounded-e-lg md:rounded-e-lg lg:rounded-e-lg sm:rounded-e-lg rounded-none w-full text-center cursor-pointer'
                      />
                    </div>
                    <div className='w-full hotLine'>
                      <p className='flex flex-col text-xl gap-4'>
                        Звоните и заказывайте на номер:{' '}
                        <a
                          className='underline text-primary'
                          href='tel:+7(701)744-80-07'
                        >
                          +7 (701) 744-80-07
                        </a>
                        <span>
                          <strong>Бесплатная</strong> горячая линия по
                          Казахстану
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='w-full' data-aos='fade-down'>
              <Tabs similar_products={product.similar_products} />
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

export default Product;
