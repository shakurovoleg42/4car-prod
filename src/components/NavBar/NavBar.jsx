'use client';

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { SlUser } from 'react-icons/sl';
import { PiShoppingCart } from 'react-icons/pi';
import { CgSearch } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

import './NavBar.css';
import OrderCall from '../templates/OrderCall';

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
    };

    if (isOpen) {
      document.body.classList.add('modal-open');
      document.addEventListener('wheel', handleScroll, { passive: false });
    } else {
      document.body.classList.remove('modal-open');
      document.removeEventListener('wheel', handleScroll);
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('wheel', handleScroll);
    };
  }, [isOpen]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className='modal-overlay' onClick={onClose}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            <span className='close-btn' onClick={onClose}>
              &times;
            </span>
            <OrderCall />
          </div>
        </div>,
        document.body,
      )
    : null;
};

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY || window.pageYOffset);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY || window.pageYOffset;
    const shouldShowNavbar = prevScrollPos > currentScrollPos;

    if (currentScrollPos < 100) {
      setIsFixed(false);
    } else {
      setIsFixed(shouldShowNavbar);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollPos]);

  // NavBar
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
    // Дополнительная логика, если необходимо
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleScrollLock = () => {
    document.body.style.overflow = isNavOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      <div className='overflow-x-hidden px-4'>
        {/* Upper navbar */}
        <div className=''>
          <div className='flex pt-2 text-white font-body justify-between items-center'>
            <Link href='/'>
              <img className=' logo w-52' src='/logo.png' alt='Logo' />
            </Link>
            <input
              className='hidden'
              type='checkbox'
              id='media-nav'
              checked={isNavOpen}
              onChange={handleToggleNav}
            />
            <label className='nav-animate' htmlFor='media-nav'>
              <FaBars className='text-2xl' />
            </label>
            <div
              className='flex transition-all pt-7 lg:pt-4 text-white font-body gap-12 justify-evenly items-center nav__top'
              onClick={closeNav}
            >
              <button className='nav-animate' onClick={closeNav}>
                <FaTimes className='text-2xl absolute left-5' />
              </button>
              <div className='flex items-center gap-7 xl:gap-4'>
                <div className='flex items-center gap-2'>
                  <div className='bg-primary h-9 w-9 flex nav__icon items-center justify-center rounded'>
                    <FiPhoneCall className='icon text-2xl text-white' />
                  </div>
                  <div className='flex flex-col'>
                    <a
                      className='media__link font-body text-xs xl:text-sm lg:text-sm '
                      href='tel:+77017448007'
                    >
                      +7 (701) 744-80-07
                    </a>
                    <a
                      className='media__link text-xs xl:text-sm lg:text-sm'
                      href='tel:+77064133556'
                    >
                      +7 (706) 413-35-56
                    </a>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='bg-primary nav__icon h-9 w-9 flex items-center justify-center rounded'>
                    <FaLocationDot className='text-2xl icon text-white' />
                  </div>
                  <div>
                    <a
                      className='media__link flex text-sm flex-col '
                      href='https://yandex.uz/maps/162/almaty/house/Y08YfwZkS0YGQFppfX9xdXVqYw==/?from=mapframe&ll=76.914231%2C43.304997&z=17'
                    >
                      г. Алматы ул.
                      <span>Казыбаева, 270а</span>
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    className='media__linkButton py-2 px-8 bg-primary hover:bg-blue-600 transition-all text-sm rounded font-normal'
                    onClick={openModal}
                  >
                    Заказать звонок
                  </button>
                  <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
              </div>
              <div>
                <div className='flex '>
                  <div className='flex flex-col items-center w-24 text-center'>
                    <Link
                      href='/account'
                      className='media__link flex flex-col items-center'
                    >
                      <span className='bg-primary nav__icon h-9 w-9 flex items-center justify-center rounded-full'>
                        <SlUser className='' />
                      </span>
                      Личный кабинет
                    </Link>
                  </div>
                  <div className='flex flex-col  items-center w-24 text-center'>
                    <Link
                      href='/cart'
                      className='media__link flex flex-col items-center cursor-pointer '
                    >
                      <span className='bg-primary nav__icon relative h-9 w-9 flex items-center justify-center rounded-full'>
                        <PiShoppingCart />
                        <span className=' text-xs px-1 absolute -top-1 -right-2 counter rounded-full bg-primary'>
                          0
                        </span>
                      </span>
                      Корзина <span>0 T</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* lower naw */}
        <div>
          <form
            action=''
            method='post'
            className='flex max-w-[600px] m-auto mt-8 mb-8'
          >
            <input
              type='search'
              id='searchProduct'
              className='bg-transparent border
                    rounded-s-md w-full placeholder:text-white text-white focus:placeholder:opacity-100
                    py-1 px-2 placeholder:opacity-50 focus:outline-none'
              placeholder='Найти'
              autoComplete='serch'
            />
            <button
              type='submit'
              className='bg-primary h-9 w-9 flex items-center rounded-e-md
                    justify-center text-white'
            >
              <CgSearch />
            </button>
          </form>

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
        </div>
        {handleScrollLock()}
      </div>
    </>
  );
};

export default NavBar;
