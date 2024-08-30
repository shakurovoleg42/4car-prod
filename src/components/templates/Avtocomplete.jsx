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

const filterShini = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

const defaultProps = {
  options: filterShini,
  getOptionLabel: (option) => option.label,
};

export default function Playground({ filters }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const filterOptions = {
    manufacturers: filters.manufacturers.map((manufacturer) => ({
      label: manufacturer,
      value: manufacturer,
    })),
    models: filters.models.map((model) => ({
      label: model,
      value: model,
    })),
    width: filters.width.map((w) => ({
      label: w.toString(),
      value: w.toString(),
    })),
    height: filters.height.map((h) => ({
      label: h.toString(),
      value: h.toString(),
    })),
    diameter: filters.diameter.map((d) => ({
      label: d,
      value: d,
    })),
    season: filters.season.map((season) => ({
      label: season,
      value: season,
    })),
    spikes: filters.spikes.map((spike) => ({
      label: spike,
      value: spike,
    })),
    nagruzki: filters.indeks_nagruzki.map((i) => ({
      label: i,
      value: i,
    })),
    skorosti: filters.indeks_skorosti.map((i) => ({
      label: i,
      value: i,
    })),
    rf: filters.run_flat.map((rf) => ({
      label: rf,
      value: rf,
    })),
  };

  const handleFilter = (name, value) => {
    params.delete('page');
    params.set(name, value);
    router.replace(pathname + '?' + params.toString(), { scroll: false });
  };

  const resetFilters = () => {
    const newParams = new URLSearchParams();

    window.location.href = pathname + '?' + newParams.toString();
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
                <Autocomplete
                  {...defaultProps}
                  options={filterOptions.manufacturers}
                  id='disable-clearable1'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Производители'
                      variant='standard'
                    />
                  )}
                  onChange={(event, newValue) =>
                    handleFilter('brendy', newValue.value)
                  }
                />
                <Autocomplete
                  {...defaultProps}
                  options={filterOptions.models}
                  id='disable-clearable2'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Модель'
                      variant='standard'
                    />
                  )}
                  onChange={(event, newValue) =>
                    handleFilter('modeli', newValue.value)
                  }
                />
                <Autocomplete
                  {...defaultProps}
                  options={filterOptions.width}
                  id='disable-clearable3'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Ширина '
                      variant='standard'
                    />
                  )}
                  onChange={(event, newValue) =>
                    handleFilter('width', newValue.value)
                  }
                />
                <Autocomplete
                  {...defaultProps}
                  options={filterOptions.height}
                  id='disable-clearable4'
                  disableClearable
                  renderInput={(params) => (
                    <TextField {...params} label='Высота' variant='standard' />
                  )}
                  onChange={(event, newValue) =>
                    handleFilter('height', newValue.value)
                  }
                />
                <Autocomplete
                  {...defaultProps}
                  options={filterOptions.diameter}
                  id='disable-clearable5'
                  disableClearable
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
                <Autocomplete
                  {...defaultProps}
                  options={filterOptions.season}
                  id='disable-clearable6'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Сезонность'
                      variant='standard'
                    />
                  )}
                  onChange={(event, newValue) =>
                    handleFilter('season', newValue.value)
                  }
                />
                <Autocomplete
                  {...defaultProps}
                  options={filterOptions.spikes}
                  id='disable-clearable7'
                  disableClearable
                  renderInput={(params) => (
                    <TextField {...params} label='Шипы' variant='standard' />
                  )}
                  onChange={(event, newValue) =>
                    handleFilter('spikes', newValue.value)
                  }
                />
                <Autocomplete
                  {...defaultProps}
                  options={filterOptions.nagruzki}
                  id='disable-clearable8'
                  disableClearable
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
                  disableClearable
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
                  disableClearable
                  renderInput={(params) => (
                    <TextField {...params} label='RunFlat' variant='standard' />
                  )}
                  onChange={(event, newValue) =>
                    handleFilter('rf', newValue.value)
                  }
                />
              </Stack>
            </List>
          </Box>
        </Drawer>
      </div>
      <div className='hidden lg:block'>
        <Stack spacing={1} className='autoCompleteContent'>
          <Autocomplete
            {...defaultProps}
            options={filterOptions.manufacturers}
            id='disable-clearable1'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Производители' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('brendy', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            options={filterOptions.models}
            id='disable-clearable2'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Модель ' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('modeli', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            options={filterOptions.width}
            id='disable-clearable3'
            disableClearable
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
            id='disable-clearable4'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Высота' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('height', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            options={filterOptions.diameter}
            id='disable-clearable5'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Диаметр ' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('diameter', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            options={filterOptions.season}
            id='disable-clearable6'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Сезонность' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('season', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            options={filterOptions.spikes}
            id='disable-clearable7'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Шипы' variant='standard' />
            )}
            onChange={(event, newValue) =>
              handleFilter('spikes', newValue.value)
            }
          />
          <Autocomplete
            {...defaultProps}
            options={filterOptions.nagruzki}
            id='disable-clearable8'
            disableClearable
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
            disableClearable
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
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='RunFlat' variant='standard' />
            )}
            onChange={(event, newValue) => handleFilter('rf', newValue.value)}
          />
        </Stack>
        <button
          className='media__linkButton py-2 px-8 bg-primary hover:bg-blue-600 transition-all text-sm rounded font-normal text-white mt-5'
          onClick={resetFilters}
        >
          Сбросить
        </button>
      </div>
    </>
  );
}
