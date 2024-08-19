import { useRouter } from 'next/navigation';
import Link from 'next/link';

import AddItemButton from '../AddItemButton/AddItemButton';

function CardShini(props) {
  const products = props;

  const { push: navigate } = useRouter();
  const handleDivClick = () => {
    navigate(`/${products.slug}`);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <div
        onClick={handleDivClick}
        className='card__item cursor-pointer 2xl:max-w-[210px] xl:max-w-[205px] lg:max-w-[200px] md:max-w-[185px] sm:max-w-[200px] max-w-[170px]
            2xl:max-h-[305px] xl:max-h-[305px] lg:max-h-[275px] md:max-h-[305px] sm:max-h-[255px] max-h-[285px]
             font-body w-full text-center text-white rounded'
      >
        <div className='blockImg'>
          <img
            className='2xl:max-w-[110px] xl:max-w-[100px] lg:max-w-[85px] max-w-[75px] 
                2xl:max-h-[140px] xl:max-h-[130px] lg:max-h-[120px] md:max-h-[110px] sm:max-h-[100px] max-h-[100px] mx-auto mb-3'
            src={products.img}
            alt=''
          />
        </div>
        <div className='bg-primary py-2 px-4 flex flex-col gap-1 cardContent'>
          <h2 className='text-xs'>{products.type}</h2>
          <p className='text-xs'>{products.text}</p>
          <span className='font-bold 2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-sm'>
            {products.price}
          </span>
          <div className='flex items-center 2xl:justify-between xl:justify-between justify-center gap-2 2xl:flex-nowrap xl:flex-nowrap flex-wrap'>
            {products.status ? (
              <p className='text-xs'>{products.status}</p>
            ) : products.paying ? (
              <Link
                href='/product'
                type='submit'
                className='active:bg-gray-100  text-xs px-2 outline-none bg-white text-primary rounded'
              >
                {products.paying}
              </Link>
            ) : (
              <Link
                href='/product'
                type='submit'
                className='active:bg-gray-100 bg-white text-primary rounded px-2 py-1 text-lg text-xs outline-none border border-white'
              >
                Купить
              </Link>
            )}
            {products.data ? (
              <p className='text-sm'>{products.data}</p>
            ) : products.order ? (
              <Link
                href='/product'
                type='submit'
                className='active:bg-blue-700 
                                rounded px-2 text-xs outline-none border border-white'
              >
                {products.order}
              </Link>
            ) : (
              <AddItemButton item={products} />
            )}
          </div>
          {products.none ? (
            <p className='hidden'>{products.none}</p>
          ) : products.checkout ? (
            <Link
              href='/product'
              type='submit'
              className='py-1 text-xs px-3 bg-red-600 rounded active:bg-red-700'
            >
              {products.checkout}
            </Link>
          ) : (
            <Link
              href='/product'
              type='submit'
              className='py-1 text-xs px-3 bg-red-600 rounded active:bg-red-700'
            >
              Купить в рассрочку
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default CardShini;
