'use client';

import './CardLogin.css';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import toast from 'react-hot-toast';
import axios from 'axios';
// import Image from 'next/image';

import { handleLogin } from '@/app/actions';
import cartService from '@/services/cart';
import responsiveImage from '@/utils/responsiveImage';
import LoginImg from '../../../assets/LoginImg.jpg';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const showRegisterForm = () => {
    router.replace(`/register?${searchParams.toString()}`);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToastId = toast.loading('Загрузка...');

    try {
      const formData = new FormData(e.currentTarget);

      const res = await axios.post('/api/auth/login', formData);

      await handleLogin(res.data.access_token);

      await cartService.syncCart();

      if (searchParams.get('redirect') === 'true') {
        router.replace(
          `/checkout-order?product=${searchParams.get('product')}`
        );
      } else {
        router.replace('/customer');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  // const handleForgotPassword = () => {
  //   router.replace('/forgot-password');
  // };

  return (
    <>
      <div className='flex max-w-[1000px] rounded w-full mt-14 m-auto shadow-xl shadow-gray-500 loginForm'>
        <form
          onSubmit={handleSubmit}
          className='max-w-[400px] w-full pt-10 px-12 flex flex-col gap-8'
        >
          <div className='flex flex-col'>
            <label className='mb-2' htmlFor='email'>
              Почта:
            </label>
            <input
              required
              name='email'
              type='email'
              id='email'
              className='border rounded py-1 px-2 outline-none'
            />
          </div>
          <div className='flex flex-col'>
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
                className='text-2xl text-gray-400 absolute right-2 top-2'
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff />
                ) : (
                  <MdOutlineVisibility />
                )}
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-primary rounded px-4 py-1 active:bg-blue-700 text-white'
              type='submit'
            >
              Войти
            </button>
            <button className='text-primary underline' type='button'>
              Забыли пароль
            </button>
          </div>
          <div className='flex justify-center'>
            <button
              onClick={showRegisterForm}
              className='text-primary underline text-lg border px-3 rounded border-primary mb-4'
              type='button'
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
        <img
          className='max-w-[600px] w-full rounded rounded-s-sm loginImg'
          src={LoginImg.src}
          alt=''
          {...responsiveImage}
          style={{ height: 'unset', objectFit: 'cover' }}
        />
      </div>
    </>
  );
};

export default LoginForm;
