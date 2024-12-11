'use client';

import { useState, useEffect } from 'react';
import fetchService from '@/services/fetchs';
import Spinner from './Spinner';
import Link from 'next/link';

const SetFilter = (props) => {
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState({
    width: '',
    height: '',
    diameter: '',
    brendy: '',
    just_manufacturers: '',
    season: '',
    available: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchService.getShiniSizeFilter();
        setData(response);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <Spinner />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSeasonChange = (season) => {
    setFilters((prevFilters) => ({ ...prevFilters, season }));
  };

  const handleAvailabilityChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      available: e.target.checked,
    }));
  };

  const generateLink = () => {
    // Фильтруем пустые и ложные параметры
    const filteredFilters = Object.entries(filters)
      // eslint-disable-next-line no-unused-vars
      .filter(([_, value]) => value !== '' && value !== false)
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    const query = new URLSearchParams(filteredFilters).toString();
    return `/tires?${query}`;
  };

  return (
    <>
      <div className='relative -z-0 py-4 max-w-[600px] w-full'>
        <p className='text-white text-lg font-bold font-forms'>Типы размер</p>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-wrap gap-2 text-white'>
            <div>
              <p>Ширина</p>
              <select
                name='width'
                value={filters.width}
                onChange={handleChange}
                className='text-black px-4 outline-none border border-black'
              >
                <option value=''>Выбрать</option>
                {data.filter.width.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p>Высота</p>
              <select
                name='height'
                value={filters.height}
                onChange={handleChange}
                className='text-black px-4 outline-none border border-black'
              >
                <option value=''>Выбрать</option>
                {data.filter.height.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p>Диаметр</p>
              <select
                name='diameter'
                value={filters.diameter}
                onChange={handleChange}
                className='text-black px-4 outline-none border border-black'
              >
                <option value=''>Выбрать</option>
                {data.filter.diameter.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex items-center gap-4 sire'>
            <div>
              <p className='text-white pb-1'>Производитель</p>
              <select
                name='brendy'
                value={filters.manufacturer}
                onChange={handleChange}
                className='border border-black text-black w-full'
              >
                <option value=''>Выбрать</option>
                {data.filter.just_manufacturers.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className='text-white pb-1'>Сезонность</p>
              <div className='flex shadow-sm text-black' role='group'>
                <button
                  type='button'
                  onClick={() => handleSeasonChange('Зимние')}
                  className={`inline-flex border border-black items-center px-4 text-sm font-medium 
                    ${
                      filters.season === 'Зимние' ? 'bg-blue-300' : 'bg-white'
                    } focus:z-10`}
                >
                  Зимние
                </button>
                <button
                  type='button'
                  onClick={() => handleSeasonChange('Летние')}
                  className={`inline-flex border border-black items-center px-4 text-sm font-medium 
                    ${
                      filters.season === 'Летние' ? 'bg-blue-300' : 'bg-white'
                    } focus:z-10`}
                >
                  Летние
                </button>
              </div>
            </div>
          </div>
          <div className='flex gap-5 cursor-pointer'>
            <input
              type='checkbox'
              id={props.id}
              checked={filters.available}
              onChange={handleAvailabilityChange}
            />
            <label className='cursor-pointer text-white' htmlFor={props.id}>
              Только в наличии
            </label>
          </div>
          <div className='flex gap-4'>
            <Link href={generateLink()}>
              <button
                className='btn bg-white text-cm px-2 text-black active:bg-blue-300 rounded-[15px] p-2'
                type='submit'
              >
                Подобрать
              </button>
            </Link>
            <button
              type='reset'
              onClick={() =>
                setFilters({
                  width: '',
                  height: '',
                  diameter: '',
                  manufacturer: '',
                  season: '',
                  available: false,
                })
              }
              className='border-b-white border-b-2 text-black bg-white rounded-[15px] p-2'
            >
              Сбросить
            </button>
          </div>
          {props.img && (
            <img
              src={props.img.src}
              alt='Shina'
              className='absolute 2xl:w-50 xl:w-50 lg:w-48 md:w-44 sm:w-40 w-40 bottom-1 -right-3 -z-10'
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SetFilter;
