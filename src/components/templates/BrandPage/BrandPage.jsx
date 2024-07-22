'use client';

import styles from './styles.module.css';

import Link from 'next/link';
import Image from 'next/image';

import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
// import Avtocomplete from '../Avtocomplete';
import ProductModal2 from '../ProductModal2';

const BrandPage = ({ brands, brand }) => {
  if (!brand) {
    return <div>Бренд не найден</div>;
  }

  const { name, image } = brand;
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
              {/* <Avtocomplete /> */}
              <div
                className={`flex flex-col gap-3 border max-w-[350px] w-full mt-10 ${styles.box}`}
              >
                <p className='w-full py-2 px-4 bg-gray-100 font-body font-semibold'>
                  Производители
                </p>
                <div className='flex flex-col gap-3 px-4 pb-5'>
                  {brands.map((e) => (
                    <Link
                      key={e.id}
                      href={`/partners/${e.name.toLowerCase()}`}
                      onClick={scrollToTop}
                      className='hover:text-primary transition-all'
                    >
                      {e.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Image src={image} alt={name} width={175} height={365} />
              <div
                className='text-sm text-justify mb-4 text-md md:text-lg mt-5'
                dangerouslySetInnerHTML={{ __html: brand.description }}
              ></div>
            </div>
          </section>
          <ProductModal2 data={brand.products} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BrandPage;
