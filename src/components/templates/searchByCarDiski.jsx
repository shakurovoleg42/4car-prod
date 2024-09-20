'use client';
import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Link from 'next/link';
import { getModels, getYears, getMod, getOptions } from '../GlobalMain/GlobalMain';

const SearchByCarDiski = ({ avtomobile }) => {
  const [selectedAuto, setSelectedAuto] = useState(null);
  const [modelsList, setModelsList] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [yearsList, setYearsList] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectMod, setSelectedMod] = useState(null);
  const [modList, setModList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionList, setOptionList] = useState(null);

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
          const res = await getYears(selectedModel.CarModel);
          setYearsList(res);
        } catch (error) {
          console.error('Ошибка при загрузке данных года:', error);
        }
      }
    };

    fetchYears();
  }, [selectedModel]);

  useEffect(() => {
    const fetchModifications = async () => {
      if (selectedModel && selectedYear) {
        try {
          const res = await getMod(selectedModel.CarModel, selectedYear.CarYear);
          setModList(res);
        } catch (error) {
          console.error('Ошибка при загрузке данных модификаций:', error);
        }
      }
    };

    fetchModifications();
  }, [selectedModel, selectedYear]);

  useEffect(() => {
    const fetchOptions = async () => {
      if (selectedModel && selectedYear && selectMod) {
        try {
          const res = await getOptions(selectMod.Kuzov);
          console.log(res)
          setOptionList(res);
        } catch (error) {
          console.error('Ошибка при загрузке данных модификаций:', error);
        }
      }
    };

    fetchOptions();
  }, [selectedModel, selectedYear, selectMod]);

  const ModelCars = avtomobile.map((avto) => ({
    label: avto,
    value: avto,
  }));

  

  const carsModel = modelsList.map((model) => ({
    label: model.CarModel,
    value: model,
  }));

  const modelYear = yearsList.map((year) => ({
    label: year.CarYear,
    value: year,
  }));

  const modifications = modList
    ? modList.map((mod) => ({
        label: `${mod.Kuzov}.${mod.Dvigatel}`,
        value: mod,
      }))
    : [];

  // Исправление: проверка, что optionList является объектом и извлечение данных
  const options = optionList?.options
    ? [{
        label: `${optionList.options.shirina}/${optionList.options.dia} ${optionList.options.description}`,
        value: optionList.options,
      }]
    : [];

  const handleAvtoChange = (event, value) => {
    setSelectedAuto(value ? value.value : null);
    setSelectedModel(null);
    setSelectedYear(null);
    setSelectedMod(null);
    setSelectedOption(null);
  };

  const handleModelChange = (event, value) => {
    setSelectedModel(value ? value.value : null);
    setSelectedYear(null);
    setSelectedMod(null);
    setSelectedOption(null);
  };

  const handleYearChange = (event, value) => {
    setSelectedYear(value ? value.value : null);
    setSelectedMod(null);
    setSelectedOption(null);
  };

  const handleModChange = (event, value) => {
    setSelectedMod(value ? value.value : null);
    setSelectedOption(null);
  };

  const handleOptionChange = (event, value) => {
    setSelectedOption(value ? value.value : null);
  };

  const handleAvailabilityChange = (event) => {
    setIsAvailable(event.target.checked);
  };

  const handleFilterSubmit = () => {
    return `/rims?available=${isAvailable}`;
  };

  const handleReset = () => {
    setSelectedAuto(null);
    setSelectedModel(null);
    setSelectedYear(null);
    setSelectedMod(null);
    setSelectedOption(null);
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
            isOptionEqualToValue={(option, value) =>
              option.value.CarModelCode === value?.CarModelCode
            }
            onChange={handleModelChange}
            renderInput={(params) => (
              <TextField {...params} placeholder='Модель' />
            )}
            value={
              carsModel.find(
                (model) =>
                  model.value.CarModelCode === selectedModel?.CarModelCode
              ) || null
            }
            disabled={!selectedAuto}
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
            isOptionEqualToValue={(option, value) =>
              option.value.CarYear === value?.CarYear
            }
            onChange={handleYearChange}
            renderInput={(params) => (
              <TextField {...params} placeholder='Год выпуска' />
            )}
            value={
              modelYear.find(
                (year) => year.value.CarYear === selectedYear?.CarYear
              ) || null
            }
            disabled={!selectedModel}
          />
        </div>
        <div>
          <p className='text-white text-lg mb-5'>Модификации</p>
          <Autocomplete
            className='bg-white rounded outline-none autocomplete'
            disablePortal
            id='combo-box-mod'
            options={modifications}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) =>
              option.value.Kuzov === value?.Kuzov &&
              option.value.Dvigatel === value?.Dvigatel
            }
            onChange={handleModChange}
            renderInput={(params) => (
              <TextField {...params} placeholder='Модификации' />
            )}
            value={
              modifications.find(
                (mod) =>
                  mod.value.Kuzov === selectMod?.Kuzov &&
                  mod.value.Dvigatel === selectMod?.Dvigatel
              ) || null
            }
            disabled={!selectedYear}
          />
        </div>
        <div>
          <p className='text-white text-lg mb-5'>Типоразмер</p>
          <Autocomplete
            className='bg-white rounded outline-none autocomplete'
            disablePortal
            id='combo-box-mod'
            options={options}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, value) =>
              option.value.shirina === value?.shirina &&
              option.value.diametr === value?.diametr &&
              option.value.description === value?.description
            }
            onChange={handleOptionChange}
            renderInput={(params) => (
              <TextField {...params} placeholder='Типоразмер' />
            )}
            value={
              options.find(
                (option) =>
                  option.value.shirina === selectedOption?.shirina &&
                  option.value.diametr === selectedOption?.diametr &&
                  option.value.description === selectedOption?.description
              ) || null
            }
            disabled={!selectMod}
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
