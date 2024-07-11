import instance from '@/utils/instance';

export async function POST(request) {
  try {
    const body = await request.json();

    await instance.post('/register', body);

    return new Response(null, { status: 201 });
  } catch (error) {
    return new Response(error.message, { status: 400 });
  }
}
