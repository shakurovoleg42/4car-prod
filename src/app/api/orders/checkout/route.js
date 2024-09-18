import { cartInstance } from '@/utils/instance';

export async function POST(request) {
  try {
    const body = await request.json();
    const session = request.cookies.get('session')?.value;
    const laravelSession = request.cookies.get('laravel_session')?.value;

    const { searchParams } = new URL(request.url);
    const isOneClick = searchParams.get('one_click') === 'true';

    const res = await cartInstance.post(
      isOneClick ? '/orders/without-cart' : '/orders/checkout',
      body,
      {
        headers: {
          Authorization: `Bearer ${session}`,
          Cookie: `laravel_session=${laravelSession}`,
        },
      }
    );

    return Response.json(res.data);
  } catch (error) {
    return new Response(JSON.stringify(error.response.data), {
      status: error.response.status,
    });
  }
}
