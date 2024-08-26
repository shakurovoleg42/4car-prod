import { useCart } from 'react-use-cart';
import toast from 'react-hot-toast';
const AddItemButton = ({ item }) => {
  const { items, getItem, addItem, removeItem } = useCart();

  const addToCart = (event) => {
    event.stopPropagation();

    addItem({
      id: item.id || items.length + 1,
      price: item.price || 0,
      ...item,
    });

    toast.success('Товар добавлен в корзину');
  };

  const removeFromCart = (event) => {
    event.stopPropagation();

    removeItem(item.id);
    toast.success('Товар удален из корзины');
  };

  return getItem(item.id) ? (
    <button
      type='button'
      className='active:bg-blue-700 rounded px-2 py-1 text-lg lg:text-md md:text-sm text-xs text-white outline-none border border-white'
      onClick={removeFromCart}
    >
      Убрать
    </button>
  ) : (
    <button
      type='button'
      className='active:bg-blue-700  rounded px-2 py-1 text-lg text-xs text-white outline-none border border-white'
      onClick={addToCart}
    >
      В корзину
    </button>
  );
};

export default AddItemButton;
