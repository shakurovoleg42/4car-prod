import { redirect } from 'next/navigation';

import fetchCart from '@/utils/fetchCart';
import CheckoutOrder from '@/components/CheckoutOrder/CheckoutOrder';

export default async function CheckoutOrderPage({ searchParams }) {
  const data = await fetchCart();
  const isOneClick = searchParams.product;

  if (data.items.length === 0 && !isOneClick) {
    redirect('/cart');
  } else if (data.items.length !== 0 && isOneClick) {
    redirect('/checkout-order');
  }

  return <CheckoutOrder />;
}
