'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FaAngleRight } from 'react-icons/fa6';
import { GiBackwardTime } from 'react-icons/gi';
import { IoSettingsOutline } from 'react-icons/io5';
import { PiShoppingCart } from 'react-icons/pi';
import Image from 'next/image';

export default function ProfileSidebar({ data }) {
  const router = useRouter();
  const pathname = usePathname();

  const buttonSC =
    'flex items-center max-w-[220px] text-darkMain border-b border-primary focus:bg-primary rounded focus:text-white px-2 w-full justify-between';

  const isActiveFoo = (route) => pathname === route;

  const sx = (route) => {
    const isActive = isActiveFoo(route);

    return {
      backgroundColor: isActive ? '#1A6EC1' : 'unset',
      color: isActive ? 'white' : 'unset',
    };
  };

  return (
    <div
      data-aos='fade-right'
      className='max-w-[360px] w-full border rounded shadow-xl flex flex-col px-8 items-center pb-10 relative accontLeft'
    >
      <Image
        src={data.image || '/user.jpg'}
        alt=''
        className='rounded-full border object-cover bg-white -translate-y-14 userIcon w-[150px] h-[150px]'
        width={150}
        height={150}
      />
      <div className='-translate-y-6 text-center 2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm'>
        <p>{data.first_name}</p>
        <p>{data.last_name}</p>
      </div>
      <div className=' flex flex-col gap-6 accountCategory'>
        <div className='flex items-center gap-3'>
          <GiBackwardTime className='text-primary text-3xl' />
          <button
            onClick={() => router.replace('/customer')}
            className={buttonSC}
            style={sx('/customer')}
          >
            История заказов
            <FaAngleRight />
          </button>
        </div>
        <div className='flex items-center gap-3'>
          <PiShoppingCart className='text-primary text-3xl' />
          <button
            onClick={() => router.replace('/customer/cart')}
            className={buttonSC}
            style={sx('/customer/cart')}
          >
            Корзина
            <FaAngleRight />
          </button>
        </div>
        <div className='flex items-center gap-3'>
          <IoSettingsOutline className='text-primary text-3xl' />
          <button
            onClick={() => router.replace('/customer/settings')}
            className={buttonSC}
            style={sx('/customer/settings')}
          >
            Настройки аккаунта
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}
