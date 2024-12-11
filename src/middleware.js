import { NextResponse } from 'next/server';

import getSession from './utils/getSession';

export async function middleware(request) {
  const session = request.cookies.get('session')?.value;
  const isOneClick = request.nextUrl.searchParams.get('product');

  if (
    request.nextUrl.pathname.startsWith('/customer') ||
    request.nextUrl.pathname.startsWith('/checkout-order')
  ) {
    if (!session || !(await getSession(session))) {
      if (isOneClick) {
        return NextResponse.redirect(
          new URL(`/login?redirect=true&product=${isOneClick}`, request.url)
        );
      } else {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
  }

  if (
    session &&
    (request.nextUrl.pathname.startsWith('/login') ||
      request.nextUrl.pathname.startsWith('/register'))
  ) {
    if (await getSession(session)) {
      return NextResponse.redirect(new URL('/customer', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/register', '/customer/:path*', '/checkout-order'],
};
