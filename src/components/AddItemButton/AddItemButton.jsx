import { useCart } from 'react-use-cart';
import toast from 'react-hot-toast';

const AddItemButton = ({ item, quantity = 1, isProduct = false }) => {
  const { getItem, addItem, removeItem } = useCart();

  const addToCart = (event) => {
    event.stopPropagation();
    addItem(item, quantity);
    toast('Товар добавлен в корзину');
  };

  const removeFromCart = (event) => {
    event.stopPropagation();
    removeItem(item.id);
    toast('Товар убран из корзины');
  };

  const classname = isProduct
    ? 'py-2 bg-primary max-w-[300px] w-full 2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm text-white rounded active:bg-blue-700'
    : 'active:bg-blue-700  rounded px-2 py-1 text-lg text-xs text-white outline-none border border-white';

  return getItem(item.id) ? (
    <button type='button' className={classname} onClick={removeFromCart}>
      Убрать
    </button>
  ) : (
    <button type='button' className={classname} onClick={addToCart}>
      В корзину
    </button>
  );
};

export default AddItemButton;
