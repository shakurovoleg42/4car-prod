'use client';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

// import Slider from 'react-slick';
const Reviews = () => {
  const [ratingValue, setRatingValue] = useState(5);

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
    console.log('Рейтинг поставлен:', newValue);
  };
  return (
    <>
      <div className='flex mt-10 items-center flex-col'>
        <h2 className='font-body font-bold mb-5 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm  '>
          Оставьте свой отзыв
        </h2>
        <div className=' flex gap-5 flex-col ranking ' data-aos=''>
          <div className='flex gap-6 flex-col items-center'>
            <Stack className='max-w-[420px]' spacing={1}>
              <Rating
                className=''
                name='half-rating'
                defaultValue={ratingValue}
                precision={0.5}
                size='large'
                onChange={handleRatingChange}
              />
            </Stack>
            <textarea
              name='text'
              id='text'
              className='w-full w-[800px] min-w-[400px] min-h-[120px] p-2 border-solid border-2'
            />
            <button className='bg-primary text-white p-4 rounded-2xl'>
              Отправить
            </button>
          </div>
          <div className='flex gap-6 flex-col items-center border-t-2 border-gray-300 pt-4'>
            <p className='font-body font-bold mb-5 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm  '>
              Отзывы других пользователей
            </p>
            <div className='flex items-left flex-col border-b-2 p-2'>
              <p>Имя пользователя</p>
              <Rating
                className=''
                name='half-rating'
                defaultValue={3}
                readOnly
              />
              <span className='flex max-w-[400px] mt-4 text-gray-700'>
              Недавно приобрёл шины TOYO Observe Garit Giz 155/65 R13 73Q и остался более чем доволен! Эти шины показали себя превосходно на зимних дорогах — сцепление с дорогой на высоком уровне, особенно на льду и снегу. Очень понравилась низкий уровень шума при движении и комфорт в управлении. Машина стала гораздо более устойчива, особенно на крутых поворотах. Также приятно удивила износостойкость — после нескольких тысяч километров протектор практически не изменился. Однозначно рекомендую для тех, кто ценит безопасность и комфорт в зимнее время!
              </span>
            </div>

            {/* <div> */}
            {/* <Slider
                className='flex gap-4 w-full flex-wrap ml-5 mb-10 mt-4 justify-center moreOptions'
                dots={true}
                autoplay={true}
                infinite={true}
                slidesToShow={5}
                slidesToScroll={1}
                responsive={[
                  {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                    },
                  },
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 470,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      dots: true,
                    },
                  },
                  {
                    breakpoint: 350,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      dots: true,
                    },
                  },
                ]}
              >
                {shina.map((item) => (
          <div key={item.id}>
            <CardShini {...item} />
          </div>
        ))}
              </Slider> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
