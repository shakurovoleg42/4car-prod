import { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import { PiShoppingCart } from 'react-icons/pi';
import useSWR from 'swr';
import Link from 'next/link';

import { formattedPrice } from '@/utils/price';
import { checkAuthentication } from '@/utils/getSession';
import cartService from '@/services/cart';

const CartStatus = ({ additionalClass = '' }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { totalItems, cartTotal } = useCart();

  const { data } = useSWR(
    isAuthenticated ? '/api/cart' : null,
    cartService.getCart
  );

  const totalCount =
    isAuthenticated && data
      ? data.items.reduce((total, item) => total + item.quantity, 0)
      : totalItems;
  const totalPrice = isAuthenticated && data ? data.total_price : cartTotal;

  useEffect(() => {
    checkAuthentication().then((res) => setIsAuthenticated(res));
  }, []);

  return (
    <div
      className={`${additionalClass} flex flex-col items-center w-24 text-center`}
    >
      <Link
        href='/cart'
        className='media__link flex flex-col items-center cursor-pointer'
      >
        <span className='bg-primary nav__icon relative h-9 w-9 flex items-center justify-center rounded-full'>
          <PiShoppingCart size={16} />
          <span className=' text-xs px-1 absolute -top-1 -right-2 counter rounded-full bg-primary'>
            {totalCount}
          </span>
        </span>
        <span>{formattedPrice(totalPrice)} тг</span>
      </Link>
    </div>
  );
};

export default CartStatus;
