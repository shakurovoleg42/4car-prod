'use client';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import fetchService from '@/services/fetchs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaAngleRight, FaInstagram } from 'react-icons/fa6';
import './footer.css';
FaInstagram
import responsiveImage from '../../utils/responsiveImage';
import Link from 'next/link';
import { FiFacebook } from 'react-icons/fi';
const Footer = () => {
  const matches = useMediaQuery('(max-width: 670px)');
  const [formData, setFormData] = useState({
    fullName: '',
    userEmail: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetchService.postSendEFeedback(formData);
      console.log('Feedback sent:', res); // Посмотрите, что именно содержится в res
    
      if (!res || Object.keys(res).length === 0) {
        console.log('Empty response from server');
        toast.warn('Сервер не вернул ответ, но сообщение может быть отправлено.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } else {
        toast.success('Ваше сообщение успешно отправлено!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    
      setFormData({ fullName: '', userEmail: '', message: '' });
    } catch (error) {
      console.error('Error sending feedback:', error);
    
      toast.error('Ошибка при отправке сообщения. Попробуйте снова.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
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
      <footer className='relative'>
        <div className='container font-bold'>
          <div className='flex items-center justify-center max-w-[1260px] w-full m-auto gap-5 mb-36 px-5 footer__form'>
            <form
              onSubmit={handleSubmit}
              method='post'
              className='text-darkMain py-2 flex flex-col justify-between 
                        2xl:max-w-[600px] xl:max-w-[500px] lg:max-w-[450px] md:max-w-[400px] sm:max-w-[350px] max-w-[300px]
                        w-full'
            >
              <h4 className=' leading-[72px] font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl'>
                Свяжитесь с нами
              </h4>
              <p className='2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-lg text-md leading-10'>
                Свяжитесь с нами для получения ценового предложения, помогите им
                присоединиться к нашей команде
              </p>
              <div>
                <label
                  htmlFor='fullName'
                  className='2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-md text-md mb-3'
                >
                  Полное имя
                </label>
                <input
                  autoComplete='name'
                  id='fullName'
                  type='text'
                  name='fullName'
                  required
                  placeholder='Саманта Уилер'
                  value={formData.fullName}
                  onChange={handleChange}
                  className='w-full border-b py-3 px-4 focus:outline-none text-xl'
                />
              </div>
              <div>
                <label
                  htmlFor='userEmail'
                  className='2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-sm text-sm mb-3'
                >
                  Введите адрес электронной почты
                </label>
                <input
                  autoComplete='email'
                  required
                  id='userEmail'
                  type='email'
                  name='userEmail'
                  placeholder='Example@gmail.com'
                  value={formData.userEmail}
                  onChange={handleChange}
                  className='w-full border-b py-3 px-4 focus:outline-none text-xl'
                />
              </div>
              <div className='mt-3'>
                <label
                  htmlFor='textarea'
                  className=' 2xl:text-lg xl:text-lg lg:text-md md:text-md sm:text-md text-md mb-3'
                >
                  Ваше сообщение
                </label>
                <textarea
                  id='textarea'
                  name='message'
                  cols='40'
                  rows='3'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full border-b py-3 px-4 focus:outline-none text-xl'
                ></textarea>
              </div>
              <button
                type='submit'
                className='flex items-center justify-center bg-primary 2xl:py-4 xl:py-4 lg:py-3 md:py-2 sm:py-2 py-2 rounded-lg
                                2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-md text-sm
                                 text-white gap-3 '
              >
                Связаться с нами <FaAngleRight />
              </button>
            </form>
            <iframe
              src='https://yandex.uz/map-widget/v1/?ll=76.914207%2C43.304945&z=18&l=map&pt=76.914207,43.304945,pm2dgl'
              className='2xl:max-w-[600px] 2xl:h-[721px] xl:max-w-[500px] xl:h-[621px] lg:max-w-[450px] lg:h-[571px] md:max-w-[400px] md:h-[500px] sm:max-w-[350px] sm:h-[371px] max-w-[300px] h-[321px] w-full rounded-[45px]'
              allowFullScreen
              style={{
                position: 'relative',
              }}
            />
          </div>
        </div>
        <div className='footer_navigate py-5'>
          <div className='container mt-5'>
            <div className='flex-wrap gap-5 justify-between items-start text-white px-5 wrapalyzer'>
              {/* остальной контент футера */}              <div className='flex flex-col footer__content gap-6'>
                <p className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-bold'>
                  Навигация
                </p>
                <ul className='flex flex-col gap-4 footer__list'>
                  <li>
                    <Link href='/about'>О компании</Link>
                  </li>
                  <li>
                    <Link href='/contacts'>Контакты</Link>
                  </li>
                  <li>
                    <Link href='/news'>Новости</Link>
                  </li>
                  <li>
                    <Link href='/blog'>Блог</Link>
                  </li>
                  <li>
                    <Link href='/delivery'>Оплата и доставка</Link>
                  </li>
                  <li>
                    <Link href='/shinomontazh'>Шиномонтаж</Link>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col footer__content gap-6'>
                <p className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-bold'>
                  Категории
                </p>
                <ul className='flex flex-col gap-4 footer__list'>
                  <li>
                    <Link href='/tires'>Шины</Link>
                  </li>
                  <li>
                    <Link href='/rims'>Диски</Link>
                  </li>
                </ul>
              </div>
              <div className='flex flex-col footer__content gap-6 max-w-[250px]'>
                <p className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-bold'>
                  Контакты
                </p>
                <ul className='flex flex-col gap-4 footer__list'>
                  <li>
                    <a href='tel:+7 (701) 744-80-07'>+7 (701) 744-80-07</a>
                  </li>
                  <li>
                    <a href='tel:+7 (706) 413-35-56'>+7 (706) 413-35-56</a>
                  </li>
                </ul>
                <div className='social'>
                  <a
                    target='_blank'
                    className='facebook'
                    href='https://www.facebook.com/4car.kz/'
                    aria-label='Facebook'
                  >
                    <FiFacebook size={24} />
                  </a>
                  <a
                    target='_blank'
                    className='instagram'
                    href='https://www.instagram.com/4carkz/'
                    aria-label='Instagram'
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
              <div className='flex flex-col footer__content gap-6'>
                <p className='2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-lg font-bold'>
                  Документы
                </p>
                <ul className='flex flex-col gap-4 footer__list'>
                  <li>
                    <Link href='/politika-konfidencialnosti'>
                      Политика конфиденциальности
                    </Link>
                  </li>
                  <li>
                    <Link href='/publichnaya-oferta'>Публичная оферта</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mt-5'>
              <hr />
              <p className='text-white text-center mt-5'>
                Разработано{' '}
                <a
                  href='https://iprod.kz/'
                  target='_blank'
                  style={{ textDecoration: 'underline' }}
                >
                  Iprod.kz
                </a>
              </p>
            </div>
          </div>
        </div>
        <img
          className='footer__bg absolute -bottom-5 -z-10 max-w-[2500px] w-full max-h-[1200px] h-full right-0'
          src={matches ? '/footerBg-mob.png' : '/footerBg.png'}
          alt=''
          {...responsiveImage}
        />
      </footer>
    </>
  );
};

export default Footer;