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
    : 'active:bg-blue-700  rounded px-2 py-1 text-lg text-xs text-white outline-none border border-white';

  return (
    <button type='button' className={classname} onClick={handleAdd}>
      В корзину
    </button>
  );
};

export default AddItemButton;
