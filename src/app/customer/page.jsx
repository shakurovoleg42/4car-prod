import { cookies } from 'next/headers';

import { cartInstance } from '@/utils/instance';
import Account from '@/components/Account/Account';

async function getData() {
  const res = await cartInstance.get('/orders', {
    headers: {
      Authorization: `Bearer ${cookies().get('session')?.value}`,
      Cookie: `laravel_session=${cookies().get('laravel_session')?.value}`,
    },
  });
  return res.data;
}

export default async function Customer() {
  const data = await getData();

  return <Account data={data} />;
}
