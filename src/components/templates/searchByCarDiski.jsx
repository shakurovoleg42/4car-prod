'use client';
import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Link from 'next/link';
import { getModels, getYears } from '../GlobalMain/GlobalMain';

const SearchByCarDiski = ({ avtomobile }) => {
  const [selectedAuto, setSelectedAuto] = useState(null);
  const [modelsList, setModelsList] = useState([]); // Список всех моделей для выбранного автомобиля
  const [selectedModel, setSelectedModel] = useState(null); // Хранение выбранной модели
  const [yearsList, setYearsList] = useState([]); // Список лет выпуска для выбранной модели
  const [selectedYear, setSelectedYear] = useState(null); // Хранение выбранного года
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedAuto) {
        try {
          const res = await getModels(selectedAuto);
          setModelsList(res); // Сохраняем список моделей
        } catch (error) {
          console.error('Ошибка при загрузке данных модели:', error);
        }
      }
    };

    fetchData();
  }, [selectedAuto]);

  useEffect(() => {
    const fetchYears = async () => {
      if (selectedModel) {
        try {
          const res = await getYears(selectedModel.CarModel); // Используем CarModel для получения лет
          setYearsList(res);
        } catch (error) {
          console.error('Ошибка при загрузке данных года:', error);
        }
      }
    };

    fetchYears();
  }, [selectedModel]);

  const ModelCars = avtomobile.map((avto) => ({
    label: avto,
    value: avto,
  }));

  const carsModel = modelsList.map((model) => ({
    label: model.CarModel,
    value: model, // Здесь мы сохраняем полный объект модели
  }));

  const modelYear = yearsList.map((year) => ({
    label: year.CarYear,
    value: year, // Здесь мы сохраняем полный объект года
  }));

  const handleAvtoChange = (event, value) => {
    setSelectedAuto(value ? value.value : null);
    setSelectedModel(null); // Сбрасываем модель при смене авто
    setSelectedYear(null); // Сбрасываем год при смене авто
  };

  const handleModelChange = (event, value) => {
    setSelectedModel(value ? value.value : null); // Сохраняем полный объект модели
    setSelectedYear(null); // Сбрасываем год при смене модели
  };

  const handleYearChange = (event, value) => {
    setSelectedYear(value ? value.value : null); // Сохраняем полный объект года
  };

  const handleAvailabilityChange = (event) => {
    setIsAvailable(event.target.checked);
  };

  const handleFilterSubmit = () => {
    return `/tires?available=${isAvailable}`;
  };

  const handleReset = () => {
    setSelectedAuto(null);
    setSelectedModel(null);
    setSelectedYear(null);
    setIsAvailable(false);
  };

  return (
    <div className='h-auto relative max-w-[600px] w-full py-4'>
      <div className='flex flex-col gap-5'>
        <div>
          <p className='text-white text-lg mb-5'>Автомобили</p>
          <Autocomplete
            className='bg-white rounded outline-none autocomplete'
            disablePortal
            id='combo-box-auto'
            options={ModelCars}
            getOptionLabel={(option) => option.label}
            onChange={handleAvtoChange}
            renderInput={(params) => (
              <TextField {...params} placeholder='Автомобили' />
            )}
            value={ModelCars.find((car) => car.value === selectedAuto) || null}
          />
        </div>
        <div>
          <p className='text-white text-lg mb-5'>Модель</p>
          <Autocomplete
            className='bg-white rounded outline-none autocomplete'
            disablePortal
            id='combo-box-model'
            options={carsModel}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) => option.value.CarModelCode === value?.CarModelCode} // Сравниваем по CarModelCode
            onChange={handleModelChange}
            renderInput={(params) => (
              <TextField {...params} placeholder='Модель' />
            )}
            value={carsModel.find((model) => model.value.CarModelCode === selectedModel?.CarModelCode) || null} // Сравниваем по CarModelCode
            disabled={!selectedAuto} // Отключаем, если автомобиль не выбран
          />
        </div>
        <div>
          <p className='text-white text-lg mb-5'>Год выпуска</p>
          <Autocomplete
            className='bg-white rounded outline-none autocomplete'
            disablePortal
            id='combo-box-year'
            options={modelYear}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) => option.value.CarYear === value?.CarYear} // Сравниваем по CarYear
            onChange={handleYearChange}
            renderInput={(params) => (
              <TextField {...params} placeholder='Год выпуска' />
            )}
            value={modelYear.find((year) => year.value.CarYear === selectedYear?.CarYear) || null} // Сравниваем по CarYear
            disabled={!selectedModel} // Отключаем, если модель не выбрана
          />
        </div>
        <div className='flex items-center gap-2 text-white cursor-pointer'>
          <Switch checked={isAvailable} onChange={handleAvailabilityChange} />
          <p>Только в наличии</p>
        </div>
        <div className='flex gap-4'>
          <Link href={handleFilterSubmit()}>
            <button
              className='btn bg-white text-cm px-2 text-black active:bg-blue-300 rounded-[15px] p-2'
              type='submit'
            >
              Подобрать
            </button>
          </Link>
          <button
            type='reset'
            className='border-b-white border-b-2 text-white'
            onClick={handleReset}
          >
            Сбросить
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchByCarDiski;
