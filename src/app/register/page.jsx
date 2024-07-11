import NavBar from '@/components/NavBar/NavBar';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import CardRegister from '@/components/templates/CardRegister/CardRegister';
import Footer from '@/components/Footer/Footer';

export default function RegisterPage() {
  return (
    <div className='overflow-hidden'>
      <header className=' bg-no-repeat bg-cover bg-center w-full pb-20 bg-map'>
        <div className='container '>
          <NavBar />
          <div className='mt-28 px-4' data-aos='fade-right'>
            <h1
              className='font-body font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                    2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'
            >
              Регистрация и Вход
            </h1>
          </div>
        </div>
      </header>
      <ScrollToTop />
      <main>
        <div className='container'>
          <section className='mb-20'>
            <div data-aos='zoom-out-up'>
              <CardRegister />
            </div>
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
