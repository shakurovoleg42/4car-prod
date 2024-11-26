import { mutate } from 'swr';

import useCart from '@/hooks/useCart';

const AddItemButton = ({ item, quantity = 1, isProduct = false }) => {
  const { addToCart } = useCart();

  const handleAdd = async (event) => {
    event.stopPropagation();
    await addToCart(item, quantity);
    mutate('/api/cart');
  };

  const classname = isProduct
    ? 'py-2 bg-primary max-w-[300px] w-full 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm text-white rounded active:bg-blue-700'
    : 'py-1 w-full text-sm font-[600] px-3 text-white bg-red-600 rounded active:bg-red-700 my-[5px]';

  return (
    <button type='button' className={classname} onClick={handleAdd}>
      В корзину
    </button>
  );
};

export default AddItemButton;
