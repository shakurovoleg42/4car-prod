'use client';

import './Avtocomplete.css';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';

const defaultProps = {
  getOptionLabel: (option) => option.label,
};

export default function Playground({ filters }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedManufacturer, setSelectedManufacturer] = useState('');

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const staticModels = filters.models.map((model) => ({
    label: model,
    value: model,
  }));

  const staticDisk_models = filters.disk_models.map((model) => ({
    label: model,
    value: model,
  }));

  const filterOptions = {
    disk_manufacturers: filters.disk_manufacturers_with_models.map(
      (manufacturerObj) => {
        const manufacturerName = Object.keys(manufacturerObj)[0];
        return {
          label: manufacturerName,
          value: manufacturerName,
        };
      }
    ),

    manufacturers: filters.manufacturers.map((manufacturerObj) => {
      const manufacturerName = Object.keys(manufacturerObj)[0];
      return {
        label: manufacturerName,
        value: manufacturerName,
      };
    }),

    models: selectedManufacturer
      ? filters.manufacturers
          .find(
            (manufacturerObj) =>
              Object.keys(manufacturerObj)[0] === selectedManufacturer
          )
          ?.[selectedManufacturer].map((model) => ({
            label: model,
            value: model,
          })) || []
      : staticModels,

    disk_models: selectedManufacturer
      ? filters.disk_manufacturers_with_models
          .find(
            (manufacturerObj) =>
              Object.keys(manufacturerObj)[0] === selectedManufacturer
          )
          ?.[selectedManufacturer].map((model) => ({
            label: model,
            value: model,
          })) || []
      : staticDisk_models,

    width: filters.width.map((w) => ({
      label: w.toString(),
      value: w.toString(),
    })),

    height: filters.height.map((h) => ({
      label: h.toString(),
      value: h.toString(),
    })),

    diameter: filters.diameter.map((d) => ({
      label: d.toString(),
      value: d.toString(),
    })),

    season: filters.season.map((season) => ({
      label: season.toString(),
      value: season.toString(),
    })),

    spikes: filters.spikes.map((spike) => ({
      label: spike.toString(),
      value: spike.toString(),
    })),

    nagruzki: filters.indeks_nagruzki.map((i) => ({
      label: i.toString(),
      value: i.toString(),
    })),

    skorosti: filters.indeks_skorosti.map((i) => ({
      label: i.toString(),
      value: i.toString(),
    })),

    rf: filters.run_flat.map((rf) => ({
      label: rf.toString(),
      value: rf.toString(),
    })),
  };

  const getParamsSBrendy = () => {
    const brendyValue = params.get('brendy');
    return (
      filterOptions.manufacturers.find(
        (option) => option.value === brendyValue
      ) || null
    );
  };

  const getParamsWidth = () => {
    const widthValue = params.get('width');
    return (
      filterOptions.width.find((option) => option.value === widthValue) || null
    );
  };

  const getParamsHeight = () => {
    const heightValue = params.get('height');
    return (
      filterOptions.height.find((option) => option.value === heightValue) ||
      null
    );
  };

  const getParamsDiametr = () => {
    const diameterValue = params.get('diameter');
    return (
      filterOptions.diameter.find((option) => option.value === diameterValue) ||
      null
    );
  };

  const getParamsSeason = () => {
    const seasonValue = params.get('season');
    return (
      filterOptions.season.find((option) => option.value === seasonValue) ||
      null
    );
  };

  const handleFilter = (name, value) => {
    params.delete('page');
    params.set(name, value);
  };

  const handleSubmit = () => {
    router.replace(pathname + '?' + params.toString(), { scroll: false });
  };

  const resetFilters = () => {
    const newParams = new URLSearchParams();

    window.location.href = pathname + '?' + newParams.toString();
  };

  const manufacturersType = () => {
    if (pathname === '/rims') {
      return (
        <>
          <Autocomplete
            {...defaultProps}
            defaultValue={getParamsSBrendy()}
            options={filterOptions.disk_manufacturers}
            id='disable-clearable1'
            noOptionsText='Нет доступных вариантов'
            renderInput={(params) => (
              <TextField {...params} label='Производитель' variant='standard' />
            )}
            onChange={(event, newValue) => {
              if (newValue) {
                handleFilter('brendy', newValue?.value || '');
                setSelectedManufacturer(newValue?.value);
                handleSubmit();
              }
            }}
          />
          <Autocomplete
            {...defaultProps}
            noOptionsText='Нет доступных вариантов'
            options={filterOptions.disk_models}
            id='disable-clearable2'
            renderInput={(params) => (
              <TextField {...params} label='Модель' variant='standard' />
            )}
            onChange={(event, newValue) => {
              handleFilter('modeli', newValue?.value || '');
            }}
          />
        </>
      );
    } else if (pathname === '/tires') {
      return (
        <>
          <Autocomplete
            {...defaultProps}
            options={filterOptions.manufacturers}
            defaultValue={getParamsSBrendy()}
            id='disable-clearable1'
            noOptionsText='Нет доступных вариантов'
            renderInput={(params) => (
              <TextField {...params} label='Производители' variant='standard' />
            )}
            onChange={(event, newValue) => {
              if (newValue) {
                handleFilter('brendy', newValue?.value || '');
                setSelectedManufacturer(newValue?.value);
                handleSubmit();
              }
            }}
          />
          <Autocomplete
            {...defaultProps}
            noOptionsText='Нет доступных вариантов'
            options={filterOptions.models}
            id='disable-clearable2'
            renderInput={(params) => (
              <TextField {...params} label='Модель' variant='standard' />
            )}
            onChange={(event, newValue) => {
              handleFilter('modeli', newValue?.value || '');
            }}
          />
        </>
      );
    }
  };

  const dasDiski = () => {
    if (pathname !== '/rims') {
      return (
        <>
          <Autocomplete
            {...defaultProps}
            options={filterOptions.spikes}
            id='disable-clearable7'
            noOptionsText='Нет доступных вариантов'
            renderInput={(params) => (
              <TextField {...params} label='Шипы' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('spikes', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            defaultValue={getParamsSeason()}
            options={filterOptions.season}
            id='disable-clearable6'
            noOptionsText='Нет доступных вариантов'
            renderInput={(params) => (
              <TextField {...params} label='Сезонность' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('season', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            options={filterOptions.nagruzki}
            id='disable-clearable8'
            noOptionsText='Нет доступных вариантов'
            renderInput={(params) => (
              <TextField
                {...params}
                label='Индекс нагрузки'
                variant='standard'
              />
            )}
            onChange={(event, newValue) =>
              handleFilter('nagruzki', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            options={filterOptions.skorosti}
            id='disable-clearable9'
            noOptionsText='Нет доступных вариантов'
            renderInput={(params) => (
              <TextField
                {...params}
                label='Индекс скорости'
                variant='standard'
              />
            )}
            onChange={(event, newValue) =>
              handleFilter('skorosti', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            options={filterOptions.rf}
            id='disable-clearable10'
            noOptionsText='Нет доступных вариантов'
            renderInput={(params) => (
              <TextField {...params} label='RunFlat' variant='standard' />
            )}
            onChange={(event, newValue) => handleFilter('rf', newValue.value)}
          />
        </>
      );
    } else {
      return;
    }
  };

  return (
    <>
      <div className='flex flex-col lg:hidden sm:block items-center'>
        <button className='filter_btn' onClick={toggleDrawer}>
          <TuneIcon style={{ marginRight: '10px' }} />
          ФИЛЬТРЫ
        </button>
        <Drawer
          className='lg:hidden'
          anchor='left'
          open={isOpen}
          style={{ zIndex: 1 }}
          onClose={toggleDrawer}
        >
          <div className='filter_header' onClick={toggleDrawer}>
            <TuneIcon style={{ marginRight: '5px' }} />
            Скрыть фильтры
            <CloseIcon style={{ marginLeft: 100 }} />
          </div>
          <Box sx={{ width: 350, marginTop: 5 }}>
            <List className='flex flex-col items-center'>
              <Stack spacing={1} className='autoCompleteContent'>
                {manufacturersType()}
                <Autocomplete
                  {...defaultProps}
                  noOptionsText='Нет доступных вариантов'
                  defaultValue={getParamsWidth()}
                  options={filterOptions.width}
                  id='disable-clearable3'
                  renderInput={(params) => (
                    <TextField {...params} label='Ширина ' variant='standard' />
                  )}
                  onChange={(event, newValue) =>
                    handleFilter('width', newValue.value)
                  }
                />
                <Autocomplete
                  {...defaultProps}
                  noOptionsText='Нет доступных вариантов'
                  defaultValue={getParamsHeight()}
                  options={filterOptions.height}
                  id='disable-clearable4'
                  renderInput={(params) => (
                    <TextField {...params} label='Высота' variant='standard' />
                  )}
                  onChange={(event, newValue) =>
                    handleFilter('height', newValue.value)
                  }
                />
                <Autocomplete
                  {...defaultProps}
                  noOptionsText='Нет доступных вариантов'
                  defaultValue={getParamsDiametr()}
                  options={filterOptions.diameter}
                  id='disable-clearable5'
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Диаметр '
                      variant='standard'
                    />
                  )}
                  onChange={(event, newValue) =>
                    handleFilter('diameter', newValue.value)
                  }
                />

                {dasDiski()}
              </Stack>
            </List>
          </Box>
          <div className='flex flex-col gap-3 mt-5'>
            <button
              className='media__linkButton py-2 px-8 bg-primary hover:bg-blue-600 transition-all text-lg rounded font-normal text-white mt-5'
              onClick={handleSubmit}
            >
              Применить
            </button>
            <button
              className='media__linkButton text-primary underline text-lg border px-3 rounded border-primary mt-3'
              onClick={resetFilters}
            >
              Сбросить
            </button>
          </div>
        </Drawer>
      </div>
      <div className='hidden lg:block'>
        <Stack spacing={1} className='autoCompleteContent'>
          {manufacturersType()}
          <Autocomplete
            {...defaultProps}
            defaultValue={getParamsWidth()}
            options={filterOptions.width}
            id='disable-clearable3'
            noOptionsText='Нет доступных вариантов'
            renderInput={(params) => (
              <TextField {...params} label='Ширина ' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('width', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            options={filterOptions.height}
            defaultValue={getParamsHeight()}
            id='disable-clearable4'
            noOptionsText='Нет доступных вариантов'
            renderInput={(params) => (
              <TextField {...params} label='Высота' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('height', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            defaultValue={getParamsDiametr()}
            options={filterOptions.diameter}
            id='disable-clearable5'
            noOptionsText='Нет доступных вариантов'
            renderInput={(params) => (
              <TextField {...params} label='Диаметр ' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('diameter', newValue.value)
            }
          />
          {dasDiski()}
        </Stack>
        <div className='flex flex-col gap-3 mt-5'>
          <button
            className='media__linkButton py-2 px-8 bg-primary hover:bg-blue-600 transition-all text-lg rounded font-normal text-white mt-5'
            onClick={handleSubmit}
          >
            Применить
          </button>
          <button
            className='media__linkButton text-primary underline text-lg border px-3 rounded border-primary mt-3'
            onClick={resetFilters}
          >
            Сбросить
          </button>
        </div>
      </div>
    </>
  );
}
