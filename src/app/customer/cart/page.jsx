import fetchCart from '@/utils/fetchCart';
import Account from '@/components/Account/Account';

export default async function CustomerCart() {
  const data = await fetchCart();

  return <Account data={data} />;
}
