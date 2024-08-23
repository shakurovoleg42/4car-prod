import fetchService from '@/services/fetchs';
import Brands from '@/components/templates/Brands';

export default async function Partners({ searchParams }) {
  const manufacturers = await fetchService.getManufacturers({
    page: searchParams.page,
  });

  return <Brands partners={manufacturers} />;
}
