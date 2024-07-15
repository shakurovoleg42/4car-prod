import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import './Avtocomplete.css';

export default function Playground() {
  const defaultProps = {
    options: filterShini,
    getOptionLabel: (option) => option.title,
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className='flex flex-col lg:hidden sm:block items-center'>
        <button className='filter_btn' onClick={toggleDrawer}>
          <TuneIcon style={{ marginRight: '10px' }} />
          ФИЛЬТРЫ
        </button>
        <Drawer className='lg:hidden' anchor='left' open={isOpen} style={{ zIndex: 9999 }}>
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
                  id='disable-clearable1'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Производители'
                      variant='standard'
                    />
                  )}
                />
                <Autocomplete
                  {...defaultProps}
                  id='disable-clearable2'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Модель шины'
                      variant='standard'
                    />
                  )}
                />
                <Autocomplete
                  {...defaultProps}
                  id='disable-clearable3'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Ширина шины'
                      variant='standard'
                    />
                  )}
                />
                <Autocomplete
                  {...defaultProps}
                  id='disable-clearable4'
                  disableClearable
                  renderInput={(params) => (
                    <TextField {...params} label='Высота' variant='standard' />
                  )}
                />
                <Autocomplete
                  {...defaultProps}
                  id='disable-clearable5'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Диаметр шины'
                      variant='standard'
                    />
                  )}
                />
                <Autocomplete
                  {...defaultProps}
                  id='disable-clearable6'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Сезонность'
                      variant='standard'
                    />
                  )}
                />
                <Autocomplete
                  {...defaultProps}
                  id='disable-clearable7'
                  disableClearable
                  renderInput={(params) => (
                    <TextField {...params} label='Шипы' variant='standard' />
                  )}
                />
                <Autocomplete
                  {...defaultProps}
                  id='disable-clearable8'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Индекс нагрузки'
                      variant='standard'
                    />
                  )}
                />
                <Autocomplete
                  {...defaultProps}
                  id='disable-clearable9'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Индекс скорости'
                      variant='standard'
                    />
                  )}
                />
                <Autocomplete
                  {...defaultProps}
                  id='disable-clearable10'
                  disableClearable
                  renderInput={(params) => (
                    <TextField {...params} label='RunFlat' variant='standard' />
                  )}
                />
                <Autocomplete
                  {...defaultProps}
                  id='disable-clearable11'
                  disableClearable
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Производители'
                      variant='standard'
                    />
                  )}
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
            id='disable-clearable1'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Производители' variant='standard' />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id='disable-clearable2'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Модель шины' variant='standard' />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id='disable-clearable3'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Ширина шины' variant='standard' />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id='disable-clearable4'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Высота' variant='standard' />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id='disable-clearable5'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Диаметр шины' variant='standard' />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id='disable-clearable6'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Сезонность' variant='standard' />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id='disable-clearable7'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Шипы' variant='standard' />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id='disable-clearable8'
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                label='Индекс нагрузки'
                variant='standard'
              />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id='disable-clearable9'
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                label='Индекс скорости'
                variant='standard'
              />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id='disable-clearable10'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='RunFlat' variant='standard' />
            )}
          />
          <Autocomplete
            {...defaultProps}
            id='disable-clearable11'
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label='Производители' variant='standard' />
            )}
          />
        </Stack>
      </div>
    </>
  );
}

const filterShini = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];
