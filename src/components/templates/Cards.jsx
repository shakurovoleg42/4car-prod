import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { formattedPrice } from '@/utils/price';
import AddItemButton from '../AddItemButton/AddItemButton';

import QuantityBox from '../QuantityBox';
// import responsiveImage from '@/utils/responsiveImage';

function CardShini(props) {
  const product = props;

  const [quantity, setQuantity] = useState(1);

  const { push: navigate } = useRouter();
  const handleDivClick = () => {
    navigate(`/${product.slug}`);
  };

  const increment = (event) => {
    event.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const decrement = (event) => {
    event.stopPropagation();

    if (quantity === 1) return;

    setQuantity((prev) => prev - 1);
  };

  return (
    <>
      <div
        onClick={handleDivClick}
        className='card__item cursor-pointer 2xl:max-w-[210px] xl:max-w-[205px] lg:max-w-[200px] md:max-w-[185px] sm:max-w-[200px] max-w-[170px] font-body w-full text-center text-white rounded'
      >
        <div className='blockImg'>
          <img
            className='2xl:max-w-[110px] xl:max-w-[100px] lg:max-w-[85px] max-w-[75px] 
                2xl:max-h-[140px] xl:max-h-[130px] lg:max-h-[120px] md:max-h-[110px] sm:max-h-[100px] max-h-[100px] mx-auto mb-3 object-contain'
            src={product.image}
            alt={product.name}
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div className='bg-primary py-2 px-4 flex flex-col gap-1 cardContent'>
          <h2 className='text-xs'>{product.name}</h2>
          <p className='text-xs'>{product.text}</p>
          <span className='font-bold 2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-sm'>
            {formattedPrice(product.price)} тг
          </span>
          {!props.isProfileCart && (
            <div className='flex items-center 2xl:justify-between xl:justify-between justify-center gap-2 2xl:flex-nowrap xl:flex-nowrap'>
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
                <QuantityBox
                  quantity={quantity}
                  inc={increment}
                  dec={decrement}
                />
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
                <AddItemButton item={product} quantity={quantity} />
              )}
            </div>
          )}
          {product.none ? (
            <p className='hidden'>{product.none}</p>
          ) : product.checkout ? (
            <Link
              href='/checkout-order'
              type='submit'
              className='py-1 text-xs px-3 bg-red-600 rounded active:bg-red-700'
            >
              {product.checkout}
            </Link>
          ) : (
            <Link
              href={product.slug}
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
