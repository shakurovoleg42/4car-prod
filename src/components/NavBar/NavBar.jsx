'use client';

import './NavBar.css';

import { useDebounceValue } from 'usehooks-ts';
import { CgSearch } from 'react-icons/cg';

import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';
import SearchResult from '../SearchResult/SearchResult';

const NavBar = () => {
  const [debouncedValue, setValue] = useDebounceValue('', 2000);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!debouncedValue) return;

    window.location.href = `/search?query=${debouncedValue}`;
  };

  return (
    <>
      <div className='px-4'>
        <NavbarTop />
        <div className='links_navigators'>
          <div className='searchbar max-w-[600px] m-auto mt-8 mb-8'>
            <form className='flex' onSubmit={handleSubmit}>
              <input
                type='search'
                id='searchProduct'
                className='bg-transparent border
                    rounded-s-md w-full placeholder:text-white text-white focus:placeholder:opacity-100
                    py-1 px-2 placeholder:opacity-50 focus:outline-none'
                placeholder='Найти'
                autoComplete='search'
                onChange={(event) => setValue(event.target.value)}
              />
              <button
                type='submit'
                className='bg-primary h-9 w-9 flex items-center rounded-e-md
                    justify-center text-white'
              >
                <CgSearch />
              </button>
            </form>
            {debouncedValue && <SearchResult query={debouncedValue} />}
          </div>
          <NavbarBottom />
        </div>
      </div>
    </>
  );
};

export default NavBar;
