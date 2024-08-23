import { redirect } from 'next/navigation';

import fetchService from '@/services/fetchs';
import BrandPage from '@/components/templates/BrandPage/BrandPage';
import Product from '@/components/Product/Product';

export default async function Brand({ params }) {
  const manufacturers = await fetchService.getManufacturersHome();

  let brand;

  try {
    brand = await fetchService.getManufacturer(params.slug);
  } catch (error) {
    if (error.response.status !== 404) {
      throw error;
    }
  }

  if (brand) {
    return <BrandPage partners={manufacturers} brand={brand} />;
  } else {
    let product;

    try {
      product = await fetchService.getProduct(params.slug);
    } catch (error) {
      if (error.response.status !== 404) {
        throw error;
      }
    }

    if (product) {
      return <Product product={product} />;
    } else {
      redirect('/');
    }
  }
}
