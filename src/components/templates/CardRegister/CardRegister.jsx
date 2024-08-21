'use client';

import './CardRegister.css';

import { useState } from 'react';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { useRouter } from 'next/navigation';
// import Image from 'next/image';
import toast from 'react-hot-toast';
import axios from 'axios';

import RegisterImg from '../../../assets/register.png';
import RegisterDecor from '../../../assets/registerDecor.png';
import RegisterDecor2 from '../../../assets/registerDecor2.png';
import RegisterDecor3 from '../../../assets/registerDecor3.png';

const CardRegister = () => {
  const [login, setLogin] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const showLoginForm = () => {
    router.replace('/login');
  };

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;

    // Проверка наличия символов '@' и '+' в значении
    if (value.includes('@') || value.includes('+')) {
      setEmailError('');
    } else {
      setEmailError(
        'Введите действительный адрес электронной почты или номер телефона'
      );
    }

    setInputValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    } else if (password.length < 6) {
      setError('Минимальное кол-во символов 6');
      return;
    }

    const loadingToastId = toast.loading('Загрузка...');

    try {
      await axios.post('/api/auth/register', {
        first_name: login,
        last_name: lastName,
        password,
        email: inputValue,
      });

      toast.success(
        'Успешная регистрация, для продолжения работы в системе выполните вход'
      );
      router.push('/login');
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(loadingToastId);
    }
  };

  return (
    <>
      <div
        className='max-w-[550px] rounded w-full 
            overflow-hidden pb-26 mt-14 m-auto shadow-xl shadow-gray-500 pt-10 relative mb-20'
      >
        <img
          className='absolute -top-4 left-0 -z-10'
          src={RegisterDecor.src}
          alt=''
          style={{width: '230px', height: '820px'}}
          // width={230}
          // height={820}
        />
        <img
          src={RegisterDecor2.src}
          alt=''
          className='absolute -z-10 right-0 -top-4'
          style={{width: '230px', height: '820px'}}
          // width={230}
          // height={820}
        />
        <img
          src={RegisterDecor3.src}
          alt=''
          className='absolute -z-10 right-0 -top-4'
          style={{width: '230px', height: '820px'}}
          // width={230}
          // height={820}
        />
        <h2 className='text-primary font-semibold 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md text-center'>
          Регистрация
        </h2>
        <form
          onSubmit={handleSubmit}
          className='max-w-[400px] mx-auto w-full pt-6 pb-16 px-12 flex flex-col gap-4 registrationForm'
        >
          <div className='flex flex-col'>
            <label className='mb-2 text-primary' htmlFor='register'>
              Имя:
            </label>
            <input
              required
              name='name'
              type='text'
              id='register'
              value={login}
              onChange={handleLoginChange}
              className='border rounded py-1 px-2 outline-none'
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-primary' htmlFor='lastName'>
              Фамилия:
            </label>
            <input
              required
              name='lastName'
              type='text'
              id='lastName'
              value={lastName}
              onChange={handleLastNameChange}
              className='border rounded py-1 px-2 outline-none'
            />
          </div>
          <div className='flex flex-col text-primary'>
            <label className='mb-2' htmlFor='password'>
              Пароль:
            </label>
            <div className='flex relative'>
              <input
                required
                name='passwordRegistration'
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={handlePasswordChange}
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className='flex flex-col text-primary'>
            <label className='mb-2' htmlFor='password'>
              Повторите Пароль:
            </label>
            <div className='flex relative'>
              <input
                required
                name='password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
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
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          <div className='flex flex-col'>
            <label className='mb-2 text-primary' htmlFor='emailPhoneInput'>
              Введите адрес электронной почты или номер телефона:
            </label>
            <input
              required
              type='text'
              id='emailPhoneInput'
              value={inputValue}
              onChange={handleInputChange}
              className='border rounded py-1 px-2 outline-none'
            />
          </div>
          <div className='flex flex-col gap-4 justify-center'>
            <button
              type='submit'
              className='text-primary outline-none underline text-lg border 
                            active:bg-blue-100 px-3 rounded border-primary'
            >
              Зарегистрироваться
            </button>
            <button
              type='button'
              className=' bg-primary text-white text-lg px-3 rounded'
              onClick={showLoginForm}
            >
              Вернуться ко входу
            </button>
          </div>
        </form>
        <img
          className='absolute bottom-0 -z-10'
          src={RegisterImg.src}
          alt=''
          style={{width: '550px', height: '220px'}}
          // width={550}
          // height={220}
        />
      </div>
    </>
  );
};

export default CardRegister;
