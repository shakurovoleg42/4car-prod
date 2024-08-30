import axios from 'axios';

import getProductIds from '@/utils/getProductIds';

const cartService = {
  getCart: async () => {
    const res = await axios.get('/api/cart');
    return res.data;
  },
  syncCart: async () => {
    const res = await axios.post('/api/cart/sync', { ids: getProductIds() });
    return res.data;
  },
  addItemToCart: async (id, quantity) => {
    const res = await axios.post('/api/cart/add', {
      product_id: id,
      quantity,
    });
    return res.data;
  },
  updateItemQuantityInCart: async (id, quantity) => {
    const res = await axios.patch('/api/cart/update-quantity', {
      product_id: id,
      quantity,
    });
    return res.data;
  },
};

export default cartService;
