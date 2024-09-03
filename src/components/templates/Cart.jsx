import Link from 'next/link';

import Card from './Cards';

const Cart = ({ data }) => {
  const shina = data.items;

  if (!shina || !Array.isArray(shina) || shina.length === 0) {
    return <p className='mt-5'>No products available</p>;
  }

  return (
    <>
      <div className='flex gap-4 flex-col w-full justify-center items-center'>
        <div className='flex gap-2 flex-wrap mb-10 mt-4 justify-center'>
          {shina.map((e) => (
            <Card key={e.id} isProfileCart {...e} />
          ))}
        </div>
        <Link
          href='/checkout-order'
          className='bg-primary mt-5 py-1 px-3 text-white rounded active:bg-blue-700'
        >
          Заказать все
        </Link>
      </div>
    </>
  );
};

export default Cart;
