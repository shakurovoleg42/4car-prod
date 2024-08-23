import fetchService from '@/services/fetchs';
import Hero from '@/components/Hero/Hero';
import GlobalMain from '@/components/GlobalMain/GlobalMain';
import Footer from '@/components/Footer/Footer';

export default async function Home() {
  const manufacturers = await fetchService.getManufacturers();
  const data = await fetchService.getAllNews();

  return (
    <>
      <Hero />
      <GlobalMain partners={manufacturers} news={data} />
      <Footer />
    </>
  );
}
