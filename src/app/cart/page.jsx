'use client';

import styles from './styles.module.css';

import { useCart } from 'react-use-cart';
import Image from 'next/image';
import Link from 'next/link';

import NavBar from '../../components/NavBar/NavBar';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Footer from '../../components/Footer/Footer';

export default function Cart() {
  const { items, updateItemQuantity } = useCart();

  const toNumericPrice = (priceString) =>
    parseFloat(priceString.replace(/\s|тг/g, ''));

  const cartTotal = items.reduce(
    (acc, cur) => acc + toNumericPrice(cur.price) * cur.quantity,
    0
  );

  return (
    <div className='overflow-hidden'>
      <header className=' bg-no-repeat bg-cover bg-center w-full pb-20 bg-cart'>
        <div className='container '>
          <NavBar />
          <div className='mt-28 px-4' data-aos='fade-right'>
            <h1
              className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                  2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'
            >
              Корзина
            </h1>
          </div>
        </div>
      </header>
      <ScrollToTop />
      <main className='mt-10 mb-16'>
        <div className='container'>
        <div className='flex flex-row font-body mb-10'>
                <Link href='/' className='mr-1 underline cursor-pointer'>
                  Главная
                </Link>
                /
                <p
                  className='ml-1'
                >
                  Корзина
                </p>
              </div>
          <section
            data-aos='fade-right'
            data-aos-anchor-placement='top'
            className='px-4'
          >
            {items.length ? (
              <div className={styles.wrapper}>
                <div className={styles.left}>
                  <ul>
                    {items.map((item) => (
                      <li key={item.id}>
                        <div className={styles.image}>
                          <Image
                            src={item.img.src}
                            alt=''
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className={styles.details}>
                          <div className={styles.column}>
                            <b>Наименование</b>
                            <p>{item.type}</p>
                          </div>
                          <div className={styles.column}>
                            <b>Бренд</b>
                            <strong>{item.brand}</strong>
                          </div>
                          <div className={styles.column}>
                            <b>Цена</b>
                            <span>{item.price}</span>
                          </div>
                          <div className={styles.column}>
                            <b>Количество</b>
                            <div className={styles.quantity}>
                              <button
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity - 1)
                                }
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity + 1)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className={styles.column}>
                            <b>Стоимость</b>
                            <span>
                              {(
                                toNumericPrice(item.price) * item.quantity
                              ).toLocaleString()}{' '}
                              тг
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.right}>
                  <ul>
                    <li>
                      <strong>Стоимость:</strong>
                      <span>{cartTotal.toLocaleString()} тг</span>
                    </li>
                    <li>
                      <strong>Доставка:</strong>
                      <span>4 000 тг</span>
                    </li>
                    <li>
                      <strong>Итого:</strong>
                      <span>{(cartTotal + 4000).toLocaleString()} тг</span>
                    </li>
                  </ul>
                  <Link href='/checkout-order'>Оформить заказ</Link>
                </div>
              </div>
            ) : (
              <p>В корзине пока пусто</p>
            )}
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
