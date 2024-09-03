import { passSession } from '@/utils/passLaravelSession';
import instance from '@/utils/instance';

export async function GET(request) {
  const session = request.cookies.get('session')?.value;
  const res = await instance.get('/user', passSession(session));

  return Response.json(res.data);
}
