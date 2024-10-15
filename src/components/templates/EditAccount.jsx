import { useState } from 'react';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import useSWR from 'swr';
import Image from 'next/image';
import axios from 'axios';

const EditAccount = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const { data } = useSWR('/api/user', () =>
    axios.get('/api/user').then((res) => res.data)
  );

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='flex items-center editAccount'>
        <form
          action=''
          method='post'
          onSubmit={handleSubmit}
          className='max-w-[400px] m-auto w-full pt-10 px-12 flex flex-col gap-4'
        >
          <div className='flex flex-col'>
            <label className='mb-2 text-primary' htmlFor='login'>
              Имя:
            </label>
            <input
              required
              name='FirstName'
              type='text'
              id='login'
              className='border rounded py-1 px-2 outline-none'
              defaultValue={data?.first_name}
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-primary' htmlFor='lastName'>
              Фамилия:
            </label>
            <input
              required
              name='LastName'
              type='text'
              id='lastName'
              className='border rounded py-1 px-2 outline-none'
              defaultValue={data?.last_name}
            />
          </div>
          <div className='flex flex-col text-primary'>
            <label className='mb-2' htmlFor='password'>
              Пароль:
            </label>
            <div className='flex relative'>
              <input
                required
                name='password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='border rounded py-1 px-2 outline-none w-full'
              />
              <button
                type='button'
                onClick={handleTogglePasswordVisibility}
                className='text-2xl text-gray-400 absolute right-2 top-1'
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff />
                ) : (
                  <MdOutlineVisibility />
                )}
              </button>
            </div>
          </div>
          <div className='flex flex-col text-primary'>
            <label className='mb-2' htmlFor='password'>
              Повторите Пароль:
            </label>
            <div className='flex relative'>
              <input
                required
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='border rounded py-1 px-2 outline-none w-full'
              />
              <button
                type='button'
                onClick={handleTogglePasswordVisibility}
                className='text-2xl text-gray-400 absolute right-2 top-1'
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff />
                ) : (
                  <MdOutlineVisibility />
                )}
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-primary' htmlFor='email'>
              Введите адрес электронной почта:
            </label>
            <input
              required
              type='email'
              id='emailPhoneInput'
              className='border rounded py-1 px-2 outline-none'
              defaultValue={data?.email}
            />
          </div>
          <div className='flex flex-col gap-4 justify-center'>
            <button
              type='submit'
              className='text-white bg-primary outline-none text-lg border active:bg-blue-100 px-3 rounded border-primary submitChange'
            >
              Применить изменения
            </button>
          </div>
        </form>

        <div className='w-full'>
          {props.imgSelect && (
            <div className='flex flex-col items-center setUserIcon'>
              <Image
                src={data?.image || props.imgSelect}
                alt='Selected'
                className='object-cover rounded-full border w-[150px] h-[150px]'
                width={150}
                height={150}
              />
              <label
                htmlFor='avatar'
                className='text-white bg-primary outline-none text-lg border active:bg-blue-100 px-3 rounded border-primary submitChange mt-5'
              >
                Загрузить фото
              </label>
              <input
                id='avatar'
                type='file'
                accept='image/*'
                onChange={props.myFunc}
                className='mt-6 hidden'
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EditAccount;
