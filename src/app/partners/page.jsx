import instance from '@/utils/instance';
import Brands from '@/components/templates/Brands';

async function getData() {
  const res = await instance.get('/manufacturers');
  return res.data;
}

export default async function Partners() {
  const data = await getData();

  return <Brands data={data} />;
}
