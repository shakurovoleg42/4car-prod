import fetchService from '@/services/fetchs';
import Brands from '@/components/templates/Brands';

export default async function Partners() {
  const manufacturers = await fetchService.getManufacturers();

  return <Brands partners={manufacturers} />;
}
