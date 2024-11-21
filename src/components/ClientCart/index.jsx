'use client';

import styles from './styles.module.sass';

import { useCart } from 'react-use-cart';
import useSWR from 'swr';
import Link from 'next/link';

import { formattedPrice } from '@/utils/price';
import cartService from '@/services/cart';
import NavBar from '../NavBar/NavBar';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';
import CartItem from '../CartItem/CartItem';
import Preloader from '../Preloader/Preloader';

const ClientCart = ({ isAuthenticated }) => {
  const { items } = useCart();
  const { data, isLoading } = useSWR(
    isAuthenticated ? '/api/cart' : null,
    cartService.getCart
  );

  if (isLoading) {
    return <Preloader />;
  }

  const cartItems = isAuthenticated ? data.items : items;
  const cartTotal = isAuthenticated
    ? data.total_price
    : items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

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
            /<p className='ml-1'>Корзина</p>
          </div>
          <section data-aos='fade-right' data-aos-anchor-placement='top'>
            {cartItems.length ? (
              <div className={styles.wrapper}>
                <div className={styles.left}>
                  <div className={styles.items}>
                    {cartItems.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                <div className={styles.right}>
                  <ul>
                    <li>
                      <strong>Стоимость:</strong>
                      <span>{formattedPrice(cartTotal)} тг</span>
                    </li>
                    <li>
                      <strong>Доставка:</strong>
                      <span>10 000 тг</span>
                    </li>
                    <li>
                      <strong>Итого:</strong>
                      <span>{formattedPrice(cartTotal + 4000)} тг</span>
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
};

export default ClientCart;
