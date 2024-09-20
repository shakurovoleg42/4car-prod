'use client';
import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Link from 'next/link';
import { getModels } from '../GlobalMain/GlobalMain';

const SearchByCarDiski = ({ avtomobile }) => {
  const [selectedAuto, setSelectedAuto] = useState(null);
  const [selectedModel, setSelectModel] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedAuto) {
        try {
          const res = await getModels(selectedAuto);
          console.log(res);
          setSelectModel(res);
        } catch (error) {
          console.error('Ошибка при загрузке данных модели:', error);
        }
      }
    };

    fetchData();
  }, [selectedAuto]);

  const ModelCars = avtomobile.map((avto) => ({
    label: avto,
    value: avto,
  }));

  const carsModel = selectedModel.length > 0 ? selectedModel.map((model) => ({
    label: model.CarModel,
    value: model.CarModel,
  })) : [];

  const handleAvtoChange = (event, value) => {
    setSelectedAuto(value ? value.value : null);
    setSelectModel([]); // Reset selected model when the car changes
  };

  const handleAvailabilityChange = (event) => {
    setIsAvailable(event.target.checked);
  };

  const handleFilterSubmit = () => {
    return `/tires?available=${isAvailable}`;
  };

  const handleReset = () => {
    setSelectedAuto(null);
    setSelectModel([]);
    setIsAvailable(false);
  };

  return (
    <div className="h-auto relative max-w-[600px] w-full py-4">
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-white text-lg mb-5">Автомобили</p>
          <Autocomplete
            className="bg-white rounded outline-none autocomplete"
            disablePortal
            id="combo-box-demo"
            options={ModelCars}
            getOptionLabel={(option) => option.label}
            onChange={handleAvtoChange}
            renderInput={(params) => (
              <TextField {...params} placeholder="Автомобили" />
            )}
            value={ModelCars.find((car) => car.value === selectedAuto) || null}
          />
        </div>
        <div>
          <p className="text-white text-lg mb-5">Модель</p>
          <Autocomplete
            className="bg-white rounded outline-none autocomplete"
            disablePortal
            id="combo-box-demo"
            options={carsModel}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} placeholder="Модель" />
            )}
            value={
              carsModel.find((model) => model.value === selectedModel) || null
            }
            disabled={!selectedAuto}
          />
        </div>
        <div className="flex items-center gap-2 text-white cursor-pointer">
          <Switch checked={isAvailable} onChange={handleAvailabilityChange} />
          <p>Только в наличии</p>
        </div>
        <div className="flex gap-4">
          <Link href={handleFilterSubmit()}>
            <button
              className="btn bg-white text-cm px-2 text-black active:bg-blue-300 rounded-[15px] p-2"
              type="submit"
            >
              Подобрать
            </button>
          </Link>
          <button
            type="reset"
            className="border-b-white border-b-2 text-white"
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
