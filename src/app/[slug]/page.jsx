import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import fetchService from '@/services/fetchs';
import BrandPage from '@/components/templates/BrandPage/BrandPage';
import Product from '@/components/Product/Product';
// import axios from 'axios';

export default async function Brand({ params }) {
  const manufacturers = await fetchService.getManufacturersHome();
  const session =  cookies().get('session')?.value;

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
      redirect('/');
    }

    if (product) {
      return <Product product={product} user_cookie={session}/>;
    } else {
      redirect('/');
    }
  }
}
