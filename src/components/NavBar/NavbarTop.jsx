'use client';

import { useEffect, useState } from 'react';
import { useScrollLock } from 'usehooks-ts';
import { FiPhoneCall } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { SlUser } from 'react-icons/sl';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

import Modal from '../Modal/Modal';
import CartStatus from '../CartStatus';

const NavbarTop = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
  });

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isNavOpen) {
      lock();
    }

    return () => {
      unlock();
    };
  }, [isNavOpen, lock, unlock]);

  return (
    <div>
      <div className='flex pt-2 text-white font-forms justify-between items-center'>
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
        <div className='flex items-center'>
          <label className='nav-animate' htmlFor='media-nav'>
            <FaBars className='text-2xl' />
          </label>
          <CartStatus additionalClass='cart-status' />
        </div>
        <div
          className='flex transition-all pt-7 lg:pt-4 text-white font-forms gap-12 justify-evenly items-center nav__top'
          onClick={closeNav}
        >
          <button className='nav-animate' onClick={closeNav}>
            <FaTimes className='text-2xl absolute left-5' />
          </button>
          <div className='flex items-center gap-7 xl:gap-4'>
            <div className='flex items-center gap-2'>
              <div className='navbar_links flex flex-col text-left'>
                <ul className='lg:text-lg'>
                  <li>
                    <Link
                      href='/tires'
                      className='list__link text-white font-forms'
                    >
                      Шины
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/rims'
                      className='list__link text-white font-forms'
                    >
                      Диски
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/delivery'
                      className='list__link text-white font-forms'
                    >
                      Оплата и доставка
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/news'
                      className='list__link text-white font-forms'
                    >
                      Новости
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contacts'
                      className='list__link text-white font-forms'
                    >
                      Контакты
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/shinomontazh'
                      className='list__link text-white font-forms'
                    >
                      Шиномонтаж
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='icon bg-primary h-9 w-9 flex nav__icon items-center justify-center rounded'>
                <FiPhoneCall className='icon text-2xl text-white' />
              </div>
              <div className='flex flex-col'>
                <a
                  className='media__link font-forms text-xs xl:text-sm lg:text-sm '
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
              <div className='icon bg-primary nav__icon h-9 w-9 flex items-center justify-center rounded'>
                <FaLocationDot className='text-2xl icon text-white' />
              </div>
              <div>
                <a
                  className='media__link flex text-sm flex-col'
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
            <div className='account_icons flex flex-row items-start'>
              <div className='flex flex-col items-center w-24 text-center'>
                <Link
                  href='/customer'
                  className='media__link flex flex-col items-center'
                >
                  <span className='bg-primary nav__icon h-9 w-9 flex items-center justify-center rounded-full'>
                    <SlUser />
                  </span>
                  Личный кабинет
                </Link>
              </div>
              <CartStatus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
