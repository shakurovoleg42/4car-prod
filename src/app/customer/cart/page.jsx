import { cookies } from 'next/headers';

import Account from '@/components/Account/Account';
import { cartInstance } from '@/utils/instance';

async function getData() {
  const res = await cartInstance.get('/cart', {
    headers: {
      Authorization: `Bearer ${cookies().get('session')?.value}`,
      Cookie: `laravel_session=${cookies().get('laravel_session')?.value}`,
    },
  });
  return res.data;
}

export default async function CustomerCart() {
  const data = await getData();

  return <Account data={data} />;
}
