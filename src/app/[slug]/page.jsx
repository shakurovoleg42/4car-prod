import fetchService from '@/services/fetchs';
import BrandPage from '@/components/templates/BrandPage/BrandPage';

export default async function Brand({ params }) {
  const manufacturers = await fetchService.getManufacturersHome();
  const brand = await fetchService.getManufacturer(params.slug);

  return <BrandPage partners={manufacturers} brand={brand} />;
}
