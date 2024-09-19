import instance from '@/utils/instance';

export async function GET(request, { params }) {
  const slug = params.slug;
  const res = await instance.get(`/products/${slug}`);

  return Response.json(res.data);
}
