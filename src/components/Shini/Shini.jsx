'use client';

import './Shini.css';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import NavBar from '../NavBar/NavBar';
import Avtocomplete from '../templates/Avtocomplete';
import CardShini from '../templates/Cards';
import Footer from './../Footer/Footer';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const Shini = ({ data }) => {
  const shina = data.products;

  const [value, setValue] = useState([0, 200000]);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();

  const page = +searchParams.get('page') || 1;

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    updateFilters(newValue[0], newValue[1]);
  };

  const handleInputChange = (event) => {
    const { name, value: inputValue } = event.target;
    const newValue = [...value];
    newValue[name === 'min' ? 0 : 1] = Math.max(
      0,
      Math.min(1000000, Number(inputValue))
    );
    setValue(newValue);
    updateFilters(newValue[0], newValue[1]);
  };

  const handleBlur = () => {
    const [min, max] = value;
    setValue([Math.max(0, min), Math.min(1000000, max)]);
    updateFilters(min, max);
  };

  const updateFilters = (priceMin, priceMax) => {
    params.set('price_min', priceMin);
    params.set('price_max', priceMax);
    router.replace(pathname + '?' + params.toString());
  };

  const itemsPerPage = data.pagination.per_page;

  const handleChangePage = (event, newPage) => {
    event.preventDefault(); // Предотвращаем стандартное поведение
    params.set('page', newPage);
  
    // Используем scroll: false, чтобы страница не прокручивалась вверх
    router.push({
      pathname: pathname,
      query: Object.fromEntries(params),
    }, undefined, { scroll: false });
  };
  

  const totalPages = Math.ceil(data.pagination.total / itemsPerPage);

  return (
    <>
      <div className='overflow-hidden'>
        <header className=' bg-no-repeat bg-cover bg-center w-full pb-20 bg-shini'>
          <div className='container '>
            <NavBar />
            <div className='mt-28 px-4' data-aos='fade-right'>
              <h1
                className='font-forms font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'
              >
                Шины
              </h1>
            </div>
          </div>
        </header>
        <ScrollToTop />
        <main className='mt-10'>
          <div className='container flex flex-col items-center'>
            <section className='2xl:mb-28 mb-10  px-4 flex flex-col items-start w-full'>
              <div className='flex flex-row font-forms mb-5'>
                <Link href='/' className='mr-1 underline cursor-pointer'>
                  Главная
                </Link>
                /<p className='ml-1'>Шины</p>
              </div>
            </section>
            <section className='flex justify-between w-full gap-10 mb-10 filterProduct px-4'>
              <div
                data-aos='fade-up-right'
                data-aos-anchor-placement='top-bottom'
                className='fullAutoComplete '
              >
                <Box className='autoCompleteContent'>
                  <div className='flex justify-between mb-6 text-sm'>
                    <TextField
                      label='Минимальная цена'
                      variant='outlined'
                      size='small'
                      name='min'
                      value={value[0]}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      label='Максимальная цена'
                      variant='outlined'
                      size='small'
                      name='max'
                      value={value[1]}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <Slider
                    getAriaLabel={() => 'Price Value'}
                    value={value}
                    min={0}
                    max={1000000}
                    step={50}
                    onChange={handleSliderChange}
                    valueLabelDisplay='auto'
                  />
                </Box>
                <Avtocomplete filters={data.filter} />
              </div>
              <div className='max-w-[850px] w-full flex flex-col justify-between items-center'>
                <div
                  data-aos='fade-up-left'
                  data-aos-anchor-placement='top-bottom'
                  className='flex 2xl:justify-between
                            xl:justify-between lg:justify-center md:justify-center sm:justify-center justify-center
                            2xl:flex-wrap xl:flex-wrap lg:flex-wrap flex-wrap 2xl:gap-6 
                            xl:gap-3 lg:gap-2 md:gap-2 sm:gap-5 gap-3 w-full sm:px-2'
                >
                  {!shina || !Array.isArray(shina) || shina.length === 0 ? (
                    <p>Пусто</p>
                  ) : (
                    shina.map((e) => <CardShini key={e.id} {...e} />)
                  )}
                </div>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <Pagination
                    count={totalPages}
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

export default Shini;
