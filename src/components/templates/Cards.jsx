import styles from '@/styles/Card.module.sass';

import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

import { formattedPrice } from '@/utils/price';
import AddItemButton from '../AddItemButton/AddItemButton';
import QuantityBox from '../QuantityBox';
import InstallmentDropdown from '../InstallmentDropdown';
import ProductPreviewModal from '../product-preview/Modal';

function CardShini(props) {
  const product = props;

  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const { push: navigate } = useRouter();
  // const handleDivClick = () => {
  //   navigate(`/${product.slug}`);
  // };

  const increment = (event) => {
    event.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const decrement = (event) => {
    event.stopPropagation();

    if (quantity === 1) return;

    setQuantity((prev) => prev - 1);
  };

  const handleOpen = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <div
        className='card__item 2xl:max-w-[210px] xl:max-w-[205px] lg:max-w-[200px] md:max-w-[185px] sm:max-w-[200px] max-w-[170px] font-forms w-full text-center text-white rounded'
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className='blockImg relative'>
          {isVisible && (
            <>
              <div className={styles.overlay}>
                <button onClick={handleOpen}>
                  <FaMagnifyingGlassPlus />
                </button>
              </div>
              <ProductPreviewModal
                isOpen={isOpen}
                handleClose={handleClose}
                productSlug={product.slug}
              />
            </>
          )}
          <Image
            alt=''
            src={product.image}
            className='2xl:max-w-[110px] xl:max-w-[100px] lg:max-w-[85px] max-w-[75px] 2xl:max-h-[140px] xl:max-h-[130px] lg:max-h-[120px] md:max-h-[110px] sm:max-h-[100px] max-h-[100px] mx-auto mb-3 object-contain'
            width={200}
            height={200}
          />
        </div>
        <div
          className='bg-primary py-2 px-4 flex flex-col gap-1 cardContent cursor-pointer'
          // onClick={handleDivClick}
        >
          <a href={`/${product.slug}`}>
            <h2 className='text-xs line-clamp-2'>{product.name}</h2>
            <p className='text-xs'>{product.text}</p>
            <span className='font-bold 2xl:text-lg xl:text-lg lg:text-md md:text-sm sm:text-sm text-sm'>
              {formattedPrice(product.price)} тг
            </span>
            <span><br></br>{product.quantity} в наличии</span>
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
            <InstallmentDropdown sku={product.sku} />
          </a>
        </div>
      </div>
    </>
  );
}

export default CardShini;
