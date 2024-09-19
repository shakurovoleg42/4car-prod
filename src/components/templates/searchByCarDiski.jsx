'use client';
import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Link from 'next/link';
import axios from 'axios';
import tiresAvtoFilter from '@/services/tiresAvtoFilter';

const SearchByCarDiski = ({ avtomobile, Model }) => {
  const [selectedAuto, setSelectedAuto] = useState("ACURA");
  const [selectedModel, setSelectModel] = useState([]);
//   const [yearsData, setYearsData] = useState([]); // Для хранения данных по годам
//   const [selectedYear, setSelectedYear] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        const selectedAuto = 'ACURA'
      if (selectedAuto) {
        try {
          const res = await tiresAvtoFilter.getModels(selectedAuto)
        //   await axios.get(
        //     `https://cd52-93-188-86-71.ngrok-free.app/api/brands?brand=${selectedAuto}`
        //   );
          console.log(selectedAuto);
          setSelectModel(res);
        } catch (error) {
          console.error('Ошибка при загрузке данных модели:', error);
        }
      }
    //   if (selectedModel) {
    //     try {
    //       const response = await axios.get(
    //         `https://cd52-93-188-86-71.ngrok-free.app/api/years?model=${selectedModel}`
    //       );
    //       setYearsData(response.data);
    //     } catch (error) {
    //       console.error('Ошибка при загрузке данных года:', error);
    //     }
    //   }
    };

    fetchData();
  }, [selectedAuto, selectedModel]);

  const ModelCars = avtomobile.map((avto) => ({
    label: avto,
    value: avto,
  }));

  const carsModel = Model.map((model) => ({
    label: model.CarModel,
    value: model.CarModel,
  }));

//   const ModelYears = yearsData.length > 0 ? yearsData.map((year) => ({
//     label: year.CarYear,
//     value: year.CarYear,
//   })) : [];
  

  const handleAvtoChange = (event, value) => {
    setSelectedAuto(value ? value.value : null);
    setSelectModel(null);
    // setSelectedYear(null);
  };

//   const handleYearChange = (event, value) => {
//     setSelectedYear(value ? value.value : null);
//   };

  const handleAvailabilityChange = (event) => {
    setIsAvailable(event.target.checked);
  };

  const handleFilterSubmit = () => {
    return `/tires?available=${isAvailable}`;
  };

  const handleReset = () => {
    setSelectedAuto(null);
    setSelectModel(null);
    // setSelectedYear(null);
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
            id='combo-box-demo'
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
            id='combo-box-demo'
            options={carsModel}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} placeholder='Модель' />
            )}
            value={
              carsModel.find((model) => model.value === carsModel) || null
            }
            // disabled={!selectedAuto}
          />
        </div>
        {/* <div>
          <p className='text-white text-lg mb-5'>Год выпуска</p>
          <Autocomplete
            className='bg-white rounded outline-none autocomplete'
            disablePortal
            id='combo-box-demo'
            options={ModelYears}
            getOptionLabel={(option) => option.label}
            onChange={handleYearChange}
            renderInput={(params) => (
              <TextField {...params} placeholder='Год выпуска' />
            )}
            value={
              ModelYears.find((year) => year.value === selectedYear) || null
            }
            disabled={!selectedModel}
          />
        </div> */}
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
