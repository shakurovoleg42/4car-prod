"use client";
import { useState, useEffect } from 'react';
import fetchService from "@/services/fetchs";
import Spinner from './Spinner';
import Link from 'next/link';

const SetFilter = (props) => {
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

  if (!data) {
    return <Spinner/>;
  }

  return (
    <>
      <div className='relative -z-0 py-4 max-w-[600px] w-full'>
        <p className='text-white text-lg font-bold font-body'>Типы размер</p>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-wrap gap-2 text-white'>
            <div>
              <p>Ширина</p>
              
              <select  className='text-black px-4 outline-none border border-black'>
              {data.filter.width.map((el, index) => (
                <option key={index} value={el}>{el}</option>
              ))} 
              </select>
              
            </div>
          
            <div>
              <p>Высота</p>
              <select className='text-black px-4 outline-none border border-black'>
              {data.filter.height.map((el, index) => (
                <option key={index} value={el}>{el}</option>
              ))} 
              </select>
            </div>
            <div>
              <p>Диаметр</p>
              <select className='text-black px-4 outline-none border border-black'>
              {data.filter.diameter.map((el, index) => (
                <option key={index} value={el}>{el}</option>
              ))} 
              </select>
            </div>
          </div>
          <div className='flex items-center gap-4 sire'>
            <div>
              <p className='text-white pb-1'>Производитель</p>
              <select className='border border-black text-black'>
              {data.filter.manufacturers.map((el, index) => (
                <option key={index} value={el}>{el}</option>
              ))}
              </select>
            </div>
            <div>
              <p className='text-white'>Сезонность</p>
              <div className='inline-flex shadow-sm' role='group'>
                <button
                  type='button'
                  className='inline-flex border border-black items-center px-4 text-sm font-medium text-gray-900 bg-white focus:z-10 focus:bg-blue-300 focus:text-black'
                >
                  Зимние
                </button>
                <button
                  type='button'
                  className='inline-flex border border-white items-center px-4 text-sm font-medium text-gray-900 bg-white focus:z-10 focus:bg-yellow-300 focus:text-black'
                >
                  Летние
                </button>
              </div>
            </div>
          </div>
          <div className='flex gap-5 cursor-pointer'>
            <input type='checkbox' id={props.id} />
            <label className='cursor-pointer text-white' htmlFor={props.id}>
              Только в наличии
            </label>
          </div>
          <div className='flex gap-4'>
            <Link href="/tiers?width">
            <button
              className='btn bg-white text-cm px-2 text-black active:bg-blue-300 rounded-[15px] p-2'
              type='submit'
            >
              Подобрать
            </button>
            </Link>
            
            <button
              type='reset'
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
