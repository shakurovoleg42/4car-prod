import { cartInstance } from '@/utils/instance';
import passLaravelSession from '@/utils/passLaravelSession';

export async function POST(request) {
  const body = await request.json();
  const laravelSession = request.cookies.get('laravel_session')?.value;

  const res = await cartInstance.post(
    '/cart-sync',
    body,
    passLaravelSession(laravelSession)
  );

  return Response.json(res.data);
}
