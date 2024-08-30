import getSession from '@/utils/getSession';

export async function GET(request) {
  const session = request.cookies.get('session')?.value;

  if (!session) {
    return Response.json({ authenticated: false }, { status: 401 });
  }

  const isAuthenticated = await getSession(session);

  if (isAuthenticated) {
    return Response.json({ authenticated: true }, { status: 200 });
  } else {
    return Response.json({ authenticated: false }, { status: 401 });
  }
}
