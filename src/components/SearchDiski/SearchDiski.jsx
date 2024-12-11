'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import NavBar from '../NavBar/NavBar';
import CardDiski from '../templates/Cards';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const SearchDiski = ({ query, diska, pagination }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const page = +searchParams.get('page') || 1;

  const handleChangePage = (event, newPage) => {
    params.set('page', newPage);
    router.replace(pathname + '?' + params.toString());
  };

  const last_page = pagination.last_page;

  return (
    <>
      <div className='overflow-hidden'>
        <header className=' bg-no-repeat bg-cover bg-center w-full pb-20 bg-map'>
          <div className='container '>
            <NavBar />
          </div>
        </header>
        <ScrollToTop />
        <main>
          <div className='container'>
            <section className='mt-10 mb-20'>
              <h1
                data-aos='fade-right'
                className='text-2xl font-forms mb-10 px-4'
              >
                Результаты по запросу {query}
              </h1>
              <div className=' max-w-[1200px] w-full m-auto flex flex-wrap gap-6 justify-center flex-col items-center px-4'>
                <div
                  data-aos='zoom-out-up'
                  className='flex gap-2 flex-wrap w-full justify-center'
                >
                  {diska.map((e) => (
                    <CardDiski key={e.id} {...e} />
                  ))}
                </div>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Pagination
                    count={last_page}
                    page={page}
                    onChange={handleChangePage}
                  />
                </Stack>
              </div>
            </section>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default SearchDiski;
