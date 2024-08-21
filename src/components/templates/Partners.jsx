import Link from 'next/link';

const Partners = ({ partners }) => {
  return (
    <>
      <section className='mb-10'>
        <div className='flex w-full justify-center flex-wrap gap-5 mb-10'>
          {partners.map((el) => (
            <Link
              key={el.id}
              href={`/${el.slug}`}
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              className='max-w-44 w-full h-44 bg-white flex items-center justify-center'
              style={{ flexDirection: 'column' }}
            >
              <img src={el.image} alt='' />
              <span>{el.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Partners;
