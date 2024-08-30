import { cartInstance } from '@/utils/instance';
import passLaravelSession from '@/utils/passLaravelSession';

export async function PATCH(request) {
  const body = await request.json();
  const laravelSession = request.cookies.get('laravel_session')?.value;

  const res = await cartInstance.patch(
    '/cart/update-quantity',
    body,
    passLaravelSession(laravelSession)
  );

  return Response.json(res.data);
}
