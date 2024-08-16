// // 'use client';

// import NavBar from '@/components/NavBar/NavBar';
// import Footer from '@/components/Footer/Footer';
// import './Stock.css';
// import ScrollToTop from './../ScrollToTop/ScrollToTop';
// import Link from 'next/link';
// import fetchService from '@/services/fetchs';

// const Stocks = async () => {
//   const data = await fetchService.getAllNews();

//   // console.log(data);

//   // const scrollToTop = () => {
//   //   window.scrollTo({
//   //     top: 200,
//   //   });
//   // };
//   return (
//     <>
//       <div className='overflow-hidden'>
//         <header className=' bg-no-repeat bg-cover bg-center w-full pb-20 bg-stock'>
//           <div className='container '>
//             <NavBar />
//             <div className='mt-28 px-4' data-aos='fade-right'>
//               <h1
//                 className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
//                         2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'
//               >
//                 Новости
//               </h1>
//             </div>
//           </div>
//         </header>
//         <ScrollToTop />
//         <main>
//           <div className='container'>
//             <div className='flex flex-row font-body mb-5 mt-10'>
//               <Link href='/' className='mr-1 underline cursor-pointer'>
//                 Главная
//               </Link>
//               /<p className='ml-1'>Новости</p>
//             </div>
//             <section className='mt-14 mb-16 px-4 flex flex-wrap justify-center gap-4 news__content'>
//               {data.data.map((el) => (
//                 <div
//                   key={el.id}
//                   data-aos='fade-up-right'
//                   data-aos-anchor-placement='top-bottom'
//                   className='news__item max-w-[550px] w-full p-4 border flex flex-col justify-between'
//                 >
//                   <div>
//                     <span className='text-sm text-blue-400 font-bold flex flex-col justify-between'>
//                       {el.date}
//                     </span>
//                     <h2 className='2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-sm mb-3'>
//                       {el.title}
//                     </h2>
//                     <p className='text-justify mb-4'>{el.description}</p>
//                   </div>
//                   <Link
//                     href={process.env.NEXT_URL + `/news/${el.id}`}
//                     // onClick={scrollToTop}
//                     className='py-2  max-w-[150px] w-full flex justify-center bg-primary font-medium text-white rounded'
//                   >
//                     Подробнее
//                   </Link>
//                 </div>
//               ))}
//             </section>
//           </div>
//         </main>
//         <footer>
//           <Footer />
//         </footer>
//       </div>
//     </>
//   );
// };

// export default Stocks;
