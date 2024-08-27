'use client';

import styles from './styles.module.css';

import Link from 'next/link';
// import Image from 'next/image';

import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import ProductModal2 from '../ProductModal2';

const BrandPage = ({ partners, brand }) => {
  if (!brand) {
    return <div>Бренд не найден</div>;
  }

  const { image, name, description, products } = brand;
  const scrollToTop = () => {
    window.scrollTo({
      top: 200,
    });
  };

  return (
    <>
      <div className='overflow-hidden'>
        <header className=' bg-no-repeat bg-cover bg-center w-full pb-20 bg-diski'>
          <div className='container '>
            <NavBar />
            <div className='mt-28 px-4' data-aos='fade-right'>
              <h1
                className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'
              >
                {name}
              </h1>
            </div>
          </div>
        </header>
        <ScrollToTop />
        <main className='my-10 container'>
          <section className={`flex gap-10 ${styles.wrapper}`}>
            <div className='flex-shrink-0'>
              <div
                className={`flex flex-col gap-3 border max-w-[350px] w-full mt-10 ${styles.box}`}
              >
                <p className='w-full py-2 px-4 bg-gray-100 font-body font-semibold'>
                  Производители
                </p>
                <div className='flex flex-col gap-3 px-4 pb-5'>
                  <ul className={styles.list}>
                    {partners.map((e) => (
                      <li key={e.id}>
                        <Link
                          href={`/${e.slug}`}
                          onClick={scrollToTop}
                          className='hover:text-primary transition-all'
                        >
                          {e.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href='/manufacturers'
                    className='2xl:text-2xl xl:text-2x lg:text-xl sm:text-md text-sm rounded text-white py-2 px-4 bg-primary mt-8'
                  >
                    Показать все
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img src={image} alt={name} width={175} height={365} />
              <div
                className='mt-3'
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            </div>
          </section>
          <ProductModal2 shina={products} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BrandPage;
