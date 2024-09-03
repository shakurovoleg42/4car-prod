"use client";

import { useState } from 'react';
import InputMask from 'react-input-mask';
import fetchService from '@/services/fetchs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderCall = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const cleanedNumber = formData.number.replace(/[\s()-]/g, '');
    const cleanedFormData = { ...formData, number: cleanedNumber };

    try {
      await fetchService.postSendFeedback(cleanedFormData);
      toast.success("Мы свяжемся с вами в ближайшее время!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("Ошибка отправки заявки", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form
        onSubmit={handleSubmit}
        method='post'
        className='max-w-[300px] p-2 w-full flex flex-col 
            2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm font-body gap-4'
      >
        <div className='flex flex-col gap-4'>
          <label htmlFor='orderCallName'>
            Имя <span className='text-red'>*</span>
          </label>
          <input
            type='text'
            id='orderCallName'
            name='name'
            required
            value={formData.name}
            onChange={handleChange}
            autoComplete='FirstName'
            placeholder='Виктор'
            className='border-2 outline-none 2xl:py-2 xl:py-2 lg:py-1 py-1 px-2 rounded'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor='orderCallNumber'>
            Номер телефона <span className='text-red'>*</span>
          </label>
          <InputMask
            mask="+7 (999) 999-99-99"
            value={formData.number}
            onChange={handleChange}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                type='text'
                id='orderCallNumber'
                name='number'
                required
                autoComplete='tel'
                className='border-2 outline-none py-2 px-2 rounded'
                placeholder='+7 (***) ***-**-**'
              />
            )}
          </InputMask>
        </div>
        <button
          type='submit'
          className='py-1 px-2 bg-primary text-white rounded'
        >
          Заказать
        </button>
      </form>
    </>
  );
};

export default OrderCall;
