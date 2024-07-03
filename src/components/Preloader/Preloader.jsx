import Img from '../../assets/Shina.png';

const Preloader = () => (
  <div className='preloader w-full h-screen flex justify-center items-center bg-primary'>
    <img
      className='animate-spin 2xl:max-w-[250px] xl:max-w-[200px] lg:max-w-[180px] md:max-w-[160px] sm:max-w-[140px] max-w-[120px]'
      src={Img.src}
      alt='Loading...'
    />
  </div>
);

export default Preloader;
