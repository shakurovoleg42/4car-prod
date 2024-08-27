import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { formattedPrice } from '@/utils/price';
import AddItemButton from '../AddItemButton/AddItemButton';
import responsiveImage from '@/utils/responsiveImage';

function CardShini(props) {
  const product = props;

  const { push: navigate } = useRouter();
  const handleDivClick = () => {
    navigate(`/${product.slug}`);
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
          <Image
            className='2xl:max-w-[110px] xl:max-w-[100px] lg:max-w-[85px] max-w-[75px] 
                2xl:max-h-[140px] xl:max-h-[130px] lg:max-h-[120px] md:max-h-[110px] sm:max-h-[100px] max-h-[100px] mx-auto mb-3'
            src={product.image}
            alt=''
            {...responsiveImage}
          />
        </div>
        <div className='bg-primary py-2 px-4 flex flex-col gap-1 cardContent'>
          <h2 className='text-xs'>{product.name}</h2>
          <p className='text-xs'>{product.text}</p>
          <span className='font-bold 2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-sm'>
            {formattedPrice(product.price)} тг
          </span>
          <div className='flex items-center 2xl:justify-between xl:justify-between justify-center gap-2 2xl:flex-nowrap xl:flex-nowrap flex-wrap'>
            {product.status ? (
              <p className='text-xs'>{product.status}</p>
            ) : product.paying ? (
              <Link
                href='/product'
                type='submit'
                className='active:bg-gray-100  text-xs px-2 outline-none bg-white text-primary rounded'
              >
                {product.paying}
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
            {product.data ? (
              <p className='text-sm'>{product.data}</p>
            ) : product.order ? (
              <Link
                href='/product'
                type='submit'
                className='active:bg-blue-700 
                                rounded px-2 text-xs outline-none border border-white'
              >
                {product.order}
              </Link>
            ) : (
              <AddItemButton item={product} />
            )}
          </div>
          {product.none ? (
            <p className='hidden'>{product.none}</p>
          ) : product.checkout ? (
            <Link
              href='/product'
              type='submit'
              className='py-1 text-xs px-3 bg-red-600 rounded active:bg-red-700'
            >
              {product.checkout}
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
