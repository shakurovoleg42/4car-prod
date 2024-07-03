import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import './MapSite.css';
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import Link from 'next/link';

const MapSite = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <header className=' bg-no-repeat bg-cover bg-center w-full pb-10 bg-map'>
          <div className='container '>
            <NavBar />
            <div className='mt-28 px-4' data-aos='fade-right'>
              <h1
                className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'
              >
                Карта сайта
              </h1>
            </div>
          </div>
        </header>
        <ScrollToTop />
        <main>
          <div className='container'>
            <section
              data-aos='fade-up'
              className='mt-20  mb-14 flex flex-wrap gap-6 justify-between px-5'
            >
              <div className='site__mapItem'>
                <h2 className='font-body font-bold text-3xl text-primary mb-4'>
                  Навигация
                </h2>
                <ul className='flex flex-col gap-4 text-lg list-disc text-primary'>
                  <li>
                    <Link href='/'>Главная</Link>
                  </li>
                  <li>
                    <Link href='/tires'>Шины</Link>
                  </li>
                  <li>
                    <Link href='/rims'>Диски</Link>
                  </li>
                  <li>
                    <Link href='/delivery'>Оплата и доставка</Link>
                  </li>
                  <li>
                    <Link href='/contacts'>Контакты</Link>
                  </li>
                  <li>
                    <Link href='/shinomontazh'>Шиномонтаж</Link>
                  </li>
                  <li>
                    <Link href='/product'>Рассрочка товара</Link>
                  </li>
                  <li>
                    <Link href='/garantii'>Возврат и обмен</Link>
                  </li>
                  <li>
                    <Link href='/about'>О компании</Link>
                  </li>
                </ul>
              </div>
              <div className='site__mapItem'>
                <h2 className='font-body font-bold text-3xl text-primary mb-4'>
                  Полезное
                </h2>
                <ul className='flex flex-col gap-4 text-lg list-disc text-primary'>
                  <li>
                    <Link href='/news'>Новости</Link>
                  </li>
                  <li>
                    <Link href='/news'>Другие Новости</Link>
                  </li>
                  <li>
                    <Link href='/news'>Другие Новости</Link>
                  </li>
                  <li>
                    <Link href='/news'>Другие Новости</Link>
                  </li>
                  <li>
                    <Link href='/news'>Другие Новости</Link>
                  </li>
                  <li>
                    <Link href='/news'>Другие Новости</Link>
                  </li>
                  <li>
                    <Link href='/news'>Другие Новости</Link>
                  </li>
                </ul>
              </div>
              <div className='site__mapItem'>
                <h2 className='font-body font-bold text-3xl text-primary mb-4'>
                  Партнеры
                </h2>
                <ul className='flex flex-col gap-4 text-lg list-disc text-primary'>
                  <li>
                    <Link href='#!'>Ford Mustang</Link>
                  </li>
                  <li>
                    <Link href='#!'>Lamborgini</Link>
                  </li>
                  <li>
                    <Link href='#!'>BMW</Link>
                  </li>
                  <li>
                    <Link href='#!'>Mersedes-Benz</Link>
                  </li>
                  <li>
                    <Link href='#!'>Chevrolet</Link>
                  </li>
                  <li>
                    <Link href='#!'>Hundai</Link>
                  </li>
                </ul>
              </div>
              <div className='site__mapItem'>
                <h2 className='font-body font-bold text-3xl text-primary mb-4'>
                  Новое
                </h2>
                <ul className='flex flex-col gap-4 text-lg list-disc text-primary'>
                  <li>
                    <Link href='#!'>Купи сейчас – забери весной</Link>
                  </li>
                  <li>
                    <Link href='#!'>Распродажа ламинированной фанеры</Link>
                  </li>
                  <li>
                    <Link href='#!'>Фасадные панели TECOS со скидкой 25%</Link>
                  </li>
                  <li>
                    <Link href='#!'>
                      Представляем акцию на террасную доску{' '}
                    </Link>
                  </li>
                </ul>
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

export default MapSite;
