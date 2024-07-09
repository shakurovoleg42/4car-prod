'use client';

import { CartProvider } from 'react-use-cart';

export default function Providers({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
