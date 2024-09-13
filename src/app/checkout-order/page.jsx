import { redirect } from 'next/navigation';

import fetchCart from '@/utils/fetchCart';
import CheckoutOrder from '@/components/CheckoutOrder/CheckoutOrder';

export default async function CheckoutOrderPage() {
  const data = await fetchCart();

  if (data.items.length === 0) {
    redirect('/cart');
  }

  return <CheckoutOrder />;
}
