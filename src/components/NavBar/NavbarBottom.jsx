'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NavbarBottom = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldShowNavbar = prevScrollPos > currentScrollPos;

      if (currentScrollPos < 100) {
        setIsFixed(false);
      } else {
        setIsFixed(shouldShowNavbar);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <ul
      className={`navbar ${
        isFixed
          ? 'fixed bg-primary flex justify-evenly flex-wrap gap-2 w-full mx-auto py-6 px-2'
          : 'flex justify-around flex-wrap gap-2 max-w-[950px]  w-full mx-auto py-3 px-2 bg-white rounded-md list'
      }`}
    >
      <li>
        <Link
          href='/tires'
          className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'
        >
          Шины
        </Link>
      </li>
      <li>
        <Link
          href='/rims'
          className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'
        >
          Диски
        </Link>
      </li>
      <li>
        <Link
          href='/delivery'
          className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'
        >
          Оплата и доставка
        </Link>
      </li>
      <li>
        <Link
          href='/news'
          className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'
        >
          Новости
        </Link>
      </li>
      <li>
        <Link
          href='/contacts'
          className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'
        >
          Контакты
        </Link>
      </li>
      <li>
        <Link
          href='/shinomontazh'
          className='list__link text-primary lg:text-lg md:text-xs sm:text-xs text-xs font-body'
        >
          Шиномонтаж
        </Link>
      </li>
    </ul>
  );
};

export default NavbarBottom;
