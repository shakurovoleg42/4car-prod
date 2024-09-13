import { cookies } from 'next/headers';

import { cartInstance } from './instance';

const fetchCart = async () => {
  const res = await cartInstance.get('/cart', {
    headers: {
      Authorization: `Bearer ${cookies().get('session')?.value}`,
      Cookie: `laravel_session=${cookies().get('laravel_session')?.value}`,
    },
  });
  return res.data;
};

export default fetchCart;
