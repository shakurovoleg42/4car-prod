import Link from 'next/link';

const Partners = ({ data }) => {
  return (
    <>
      <section className='mb-10'>
        <div className='flex w-full justify-center flex-wrap gap-5 mb-10'>
          {data.map((el) => (
            <Link
              key={el.id}
              href={`/partners/${el.name.toLowerCase()}`}
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              className='max-w-44 w-full h-44 bg-white flex items-center justify-center'
            >
              <img src={el.image} alt='' />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Partners;
