import { useCart as useCartLib } from 'react-use-cart';
import toast from 'react-hot-toast';

import { checkAuthentication } from '@/utils/getSession';
import cartService from '@/services/cart';

const useCart = () => {
  const { addItem, updateItemQuantity } = useCartLib();

  const addToCart = async (item, quantity) => {
    const isAuthenticated = await checkAuthentication();

    if (isAuthenticated) {
      await cartService.addItemToCart(item.id, quantity);
    } else {
      addItem(item, quantity);
    }

    toast('Товар добавлен в корзину');
  };

  const updateItmQuantity = async (id, quantity) => {
    const isAuthenticated = await checkAuthentication();

    if (isAuthenticated) {
      await cartService.updateItemQuantityInCart(id, quantity);
    } else {
      updateItemQuantity(id, quantity);
    }
  };

  return { addToCart, updateItmQuantity };
};

export default useCart;
