import getSession from './utils/getSession';

export async function middleware(request) {
  const session = request.cookies.get('session')?.value;

  if (request.nextUrl.pathname.startsWith('/account')) {
    if (!session || !(await getSession(session))) {
      return Response.redirect(new URL('/login', request.url));
    }
  }

  if (
    session &&
    (request.nextUrl.pathname.startsWith('/login') ||
      request.nextUrl.pathname.startsWith('/register'))
  ) {
    if (await getSession(session)) {
      return Response.redirect(new URL('/account', request.url));
    }
  }
}

export const config = {
  matcher: ['/login', '/register', '/account/:path*'],
};
