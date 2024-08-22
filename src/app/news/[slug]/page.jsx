// 'use client';

import Link from 'next/link';
import NavBar from '@/components/NavBar/NavBar';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { FaAngleLeft } from 'react-icons/fa6';
import fetchService from '@/services/fetchs';
import Footer from '@/components/Footer/Footer';

const NewsPage = async ({ params }) => {
  const data = await fetchService.getNewsById(params.slug);

  return (
    <>
      <div className='overflow-hidden'>
        <header className=' bg-no-repeat bg-cover bg-center w-full pb-20 bg-diski'>
          <div className='container '>
            <NavBar />
          </div>
        </header>
        <ScrollToTop />
        <main className='my-10 container'>
          <section className='flex flex-col items-center gap-4 px-4'>
            <Link href='/news' className='flex items-center gap-2 mb-4'>
              <FaAngleLeft /> назад
            </Link>
            <div className='px-4' data-aos='fade-right'>
              <h1
                className='font-body font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl 
                        text-center'
              >
                {data.title}
              </h1>
            </div>
            <h3 className='md:text-xl lg:text-2xl font-bold text-primary'>
              {data.date}
            </h3>
            <p className='text-justify lg:text-lg text-md max-w-[900px]'>
              {data.description}
            </p>
            <img src={data.image} alt={data.title} />
            <p className='text-sm text-justify mb-2 text-md md:text-lg max-w-[900px]'>
              {data.text}
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewsPage;
