import { cookies } from 'next/headers';

import getSession from '@/utils/getSession';
import ClientCart from '@/components/ClientCart';

export default async function Cart() {
  const session = cookies().get('session')?.value;
  const isAuthenticated = await getSession(session);

  return <ClientCart isAuthenticated={isAuthenticated} />;
}
