"use client";
import { useState, useEffect } from 'react';
import fetchService from '@/services/fetchs';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';

const SearchByCar = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchService.getShiniSizeFilter();
        setData(response);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  const Seasons = data && data.filter && data.filter.season
    ? data.filter.season.map(season => ({
        label: season,
        value: season.toLowerCase().replace(/\s+/g, '-')
      }))
    : [];

  return (
    <>
      <div className='h-64 relative max-w-[600px] w-full py-4'>
        <div className='flex flex-col gap-5'>
          <div>
            <p className='text-white text-lg mb-5'>Сезон</p>
            <Autocomplete
              className='bg-white rounded outline-none autocomplete'
              disablePortal
              id='combo-box-demo'
              options={Seasons}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label='Seasons' />
              )}
            />
          </div>
          <div className='flex items-center gap-2 text-white cursor-pointer'>
            <Switch />
            <p>Только в наличии</p>
          </div>
          <div className='flex gap-4'>
            <button
              className='btn bg-white text-cm px-2 text-black active:bg-blue-300 rounded-[15px] p-2'
              type='submit'
            >
              Подобрать
            </button>
            <button
              type='reset'
              className='border-b-white border-b-2 text-white'
            >
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchByCar;
