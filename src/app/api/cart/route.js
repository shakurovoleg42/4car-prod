import { cartInstance } from '@/utils/instance';
import passLaravelSession from '@/utils/passLaravelSession';

export async function GET(request) {
  const laravelSession = request.cookies.get('laravel_session')?.value;

  const res = await cartInstance.get(
    '/cart',
    passLaravelSession(laravelSession)
  );

  return Response.json(res.data);
}
