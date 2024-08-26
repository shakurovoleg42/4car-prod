import About from '../../components/About/About';
import fetchService from '@/services/fetchs';

export default async function AboutPage () {
  const manufacturers = await fetchService.getManufacturersHome();
 
  return <About partners={manufacturers}/>;
}
