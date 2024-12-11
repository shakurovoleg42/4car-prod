import NavBar from './NavBar/NavBar';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className='overflow-hidden'>
      <header className=' bg-no-repeat bg-cover bg-center w-full pb-20 bg-map'>
        <div className='container '>
          <NavBar />
          <div className='mt-28 px-4' data-aos='fade-right'>
            <h1
              className='font-forms font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                    2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'
            >
              Личный кабинет
            </h1>
          </div>
        </div>
      </header>
      <ScrollToTop />
      <main>
        <div className='container'>{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
