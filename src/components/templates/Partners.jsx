import { PartnersInfo } from '../../data/home';
import Link from 'next/link';

const Partners = () => {
  return (
    <>
      <section className='mb-10'>
        <div className='flex w-full justify-center flex-wrap gap-5 mb-10'>
          {PartnersInfo.map((el) => (
            <Link
              key={el.id}
              href={`/partners/${el.id}`}
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              className='max-w-44 w-full h-44 bg-white flex items-center justify-center'
            >
              <img src={el.img.src} alt='' />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Partners;
