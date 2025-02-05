'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Partners = ({ partners, pagination }) => {
  const totalProducts = pagination.total;
  const itemsPerPage = pagination.per_page;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const page = +searchParams.get('page') || 1;

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (event, value) => {
    params.set('page', value);
    router.replace(pathname + '?' + params.toString());
  };

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  return (
    <>
      <section className='mb-10'>
        <div className='flex w-full justify-center flex-wrap gap-10 mb-10'>
          {partners.map((el) => {
            const name = el.name.replace(/[-_\s]+/g, ' ').toLowerCase();
            return (
              <Link
                key={el.id}
                href={`/${name}`}
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                className='max-w-44 w-full h-44 bg-white flex items-center justify-center'
                style={{ flexDirection: 'column' }}
              >
                <img src={el.image} alt={el.name} />
                <span>{el.name}</span>
              </Link>
            );
          })}
        </div>
        <div className='flex justify-center'>
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              variant='outlined'
              shape='rounded'
              page={page}
              onChange={handlePageChange}
              onClick={handleScroll}
            />
          </Stack>
        </div>
      </section>
    </>
  );
};

export default Partners;
