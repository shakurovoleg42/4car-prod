'use client';
import './Product.css';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import IosShareIcon from '@mui/icons-material/IosShare';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import toast from 'react-hot-toast';
import InnerImageZoom from 'react-inner-image-zoom';

import { formattedPrice } from '@/utils/price';
import { KaspiButton, ForteButton } from '../Installments';
import fetchService from '@/services/fetchs';
import NavBar from '../NavBar/NavBar';
import Tabs from '../templates/Tabs';
import Footer from './../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import AddItemButton from '../AddItemButton/AddItemButton';
import MultiImage from '../MultiImage';

const Product = ({ product, user_cookie }) => {
  const [data, setData] = useState({ avg_rating: 0, reviews: [] });
  const [countProduct, setCountProduct] = useState(1);
  const [productImage, setProductImage] = useState(
    product.images[0] || product.image
  );
  const router = useRouter();
  const pathname = usePathname();

  const model = product.model.replace(/ /g, '+');
  const whatIs =
    product.category[0] === 'Шины'
      ? 'tires'
      : product.category[0] === 'Диски'
      ? 'rims'
      : null;

      const whatType =
    product.category[0] === 'Шины'
      ? 'шины'
      : product.category[0] === 'Диски'
      ? 'диска'
      : null;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchService.getProductReview(product.id);

        if (reviewsData && Array.isArray(reviewsData.reviews)) {
          setData(reviewsData);
        } else {
          console.error(
            'Expected data to be an object with a reviews array, but received:'
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

  const ProductPrice = product.price * countProduct;

  const buyOneClick = () => {
    const params = new URLSearchParams(window.location.search);
    params.set('product', product.id + ',' + countProduct);

    const newUrl = `/checkout-order?${params.toString()}`;

    router.push(newUrl);
  };

  const copyLink = () => {
    const shareLink = process.env.NEXT_PUBLIC_URL + pathname;

    if (navigator.share) {
      navigator.share({ title: '4car', url: shareLink });
    } else {
      navigator.clipboard.writeText(shareLink).then(() => {
        toast('Ссылка скопирована');
      });
    }
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
            <section className='mt-14 font-forms px-4'>
              <div className='flex flex-row font-forms mb-5'>
                <Link href='/' className='mr-1 underline cursor-pointer'>
                  Главная
                </Link>
                /<p className='ml-1 underline cursor-pointer'>{product.name}</p>
              </div>
              <div
                className='flex gap-5 flex-col ranking'
                data-aos='fade-right'
              >
                <h1 className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-md font-forms font-bold'>
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
                  <div>
                    <InnerImageZoom
                      src={productImage}
                      zoomSrc={productImage}
                      zoomType='hover'
                      hideHint
                      className='!flex items-center justify-center productLeft__img'
                    />
                    <MultiImage
                      images={product.images}
                      setImage={setProductImage}
                    />
                  </div>
                  <div className='flex flex-col gap-4'>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Модель {whatType}
                      <Link href={`/${whatIs}?modeli=${model}`}>
                        <span className='text-primary'>{product.model}</span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Ширина {whatType}
                      <Link href={`/${whatIs}?width=${product.width}`}>
                        <span className='text-primary'>{product.width}</span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Высота {whatType}
                      <Link href={`/${whatIs}?height=${product.height}`}>
                        <span className='text-primary'>{product.height}</span>
                      </Link>
                    </p>
                    <p className='flex gap-3 text-xl text-gray-500'>
                      Диаметр {whatType}
                      <Link href={`/${whatIs}?diameter=${product.diameter}`}>
                        <span className='text-primary'>{product.diameter}</span>
                      </Link>
                    </p>
                    {whatType === 'шины' && (
                      <>
                        <p className='flex gap-3 text-xl text-gray-500'>
                          Сезонность
                          <Link href={`/${whatIs}?season=${product.season}`}>
                            <span className='text-primary'>{product.season}</span>
                          </Link>
                        </p>
                        <p className='flex gap-3 text-xl text-gray-500'>
                          Шипы
                          <Link href={`/${whatIs}?spikes=${product.spikes}`}>
                            <span className='text-primary'>{product.spikes}</span>
                          </Link>
                        </p>
                        <p className='flex gap-3 text-xl text-gray-500'>
                          Индекс нагрузки
                          <Link
                            href={`/${whatIs}?nagruzki=${product.indeks_nagruzki}`}
                          >
                            <span className='text-primary'>
                              {product.indeks_nagruzki}
                            </span>
                          </Link>
                        </p>
                        <p className='flex gap-3 text-xl text-gray-500'>
                          Индекс скорости
                          <Link
                            href={`/${whatIs}?skorosti=${product.indeks_skorosti}`}
                          >
                            <span className='text-primary'>
                              {product.indeks_skorosti}
                            </span>
                          </Link>
                        </p>
                        <p className='flex gap-3 text-xl text-gray-500'>
                          RunFlat
                          <Link href={`/${whatIs}?runflat=${product.run_flat}`}>
                            <span className='text-primary'>{product.run_flat}</span>
                          </Link>
                        </p>
                      </>
                    )}
                    {whatType === 'диска' && (
                      <>
                        <p className='flex gap-3 text-xl text-gray-500'>
                          Отверстий
                          <Link href={`/${whatIs}?otverstiya=${product.otverstiya}`}>
                            <span className='text-primary'>{product.otverstiya}</span>
                          </Link>
                        </p>
                        <p className='flex gap-3 text-xl text-gray-500'>
                          Расстояние
                          <Link href={`/${whatIs}?rasstoyaniya=${product.rasstoyaniya}`}>
                            <span className='text-primary'>{product.rasstoyaniya}</span>
                          </Link>
                        </p>
                        <p className='flex gap-3 text-xl text-gray-500'>
                          Количество болтов
                          <Link href={`/${whatIs}?kolichestvo_boltov=${product.kolichestvo_boltov}`}>
                            <span className='text-primary'>{product.kolichestvo_boltov}</span>
                          </Link>
                        </p>
                      </>
                    )}
                    
                  </div>
                </div>
                <div data-aos='fade-left'>
                  <div className='flex items-center gap-7 flex-wrap max-w-[620px] w-full productRight'>
                    <h2
                      className='text-darkMain 2xl:text-3xl
                                    xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl font-forms font-bold max-w-[180px] w-full'
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
                        type='button'
                        className='py-2 bg-transparent border border-primary max-w-[300px] w-full 2xl:text-2xl
                                        xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm text-blue-700 rounded active:bg-blue-700 hover:bg-primary hover:text-white'
                        onClick={buyOneClick}
                      >
                        Купить в один клик
                      </button>
                    </div>
                    <div className='flex max-w-[620px] w-full btnKredit gap-4'>
                      <KaspiButton sku={product.sku} />
                      <ForteButton sku={product.sku} />
                    </div>
                    <div className='w-full flex items-center gap-3 max-sm:flex-col'>
                      <button
                        className='py-2 bg-primary max-w-[300px] w-full text-sm text-white rounded active:bg-blue-700 flex items-center justify-center gap-2'
                        onClick={copyLink}
                      >
                        <IosShareIcon />
                        Поделиться
                      </button>
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
              <Tabs
                similar_products={product.similar_products}
                product_id={product.id}
                user_cookie={user_cookie}
                product_fullDescription={product.full_description}
                product_shortDescription={product.short_description}

              />
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
