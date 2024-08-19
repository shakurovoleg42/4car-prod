import instance from '@/utils/instance';
import Diski from '@/components/Diski/Diski';

async function getData({ ...params }) {
  const res = await instance.get('/rims', { params });
  return res.data;
}

export default async function Rims({ searchParams }) {
  const data = await getData({
    page: searchParams.page,
    price_min: searchParams.price_min,
    price_max: searchParams.price_max,
    brendy: searchParams.brendy,
    modeli: searchParams.modeli,
    shirina_shin: searchParams.width,
    vysota_shin: searchParams.height,
    diametr_shin: searchParams.diameter,
    sezony: searchParams.season,
    shipy: searchParams.spikes,
    indeks_nagrzuki: searchParams.nagruzki,
    indeks_skorosti: searchParams.skorosti,
    run_flat: searchParams.rf,
  });

  return <Diski data={data} />;
}
