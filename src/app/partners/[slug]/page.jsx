import instance from '@/utils/instance';
import BrandPage from '@/components/templates/BrandPage/BrandPage';

async function getManufacturers() {
  const res = await instance.get('/manufacturers');
  return res.data;
}

async function getManufacturer(slug) {
  const res = await instance.get(`/manufacturers/${slug}`);
  return res.data;
}

export default async function Brand({ params }) {
  const manufacturers = await getManufacturers();
  const manufacturer = await getManufacturer(params.slug);

  return <BrandPage brands={manufacturers} brand={manufacturer} />;
}
