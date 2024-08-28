'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import fetchService from '@/services/fetchs';
// import Slider from 'react-slick';

const Reviews = () => {
  const [data, setData] = useState({});
  const [ratingValue, setRatingValue] = useState(5);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchService.getProductReview(191731);
        console.log(reviewsData);

        if (reviewsData && Array.isArray(reviewsData.reviews)) {
          setData(reviewsData);
        } else {
          console.error(
            'Expected data to be an object with a reviews array, but received:',
            reviewsData
          );
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
    console.log('Рейтинг поставлен:', newValue);
  };

  return (
    <>
      <div className='flex mt-10 items-center flex-col'>
        <h2 className='font-body font-bold mb-5 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm'>
          Оставьте свой отзыв
        </h2>
        <div className='flex gap-5 flex-col ranking' data-aos=''>
          <form>
            <div className='flex gap-6 flex-col items-center'>
            <Stack className='max-w-[420px]' spacing={1}>
              <Rating
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
          </form>
          
          <div className='flex gap-6 flex-col items-center border-t-2 border-gray-300 pt-4'>
            <p className='font-body font-bold mb-5 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm'>
              Отзывы других пользователей
            </p>
            <div className='flex gap-4 w-full max-w-[1200px] w-[900px] flex-col items-center mt-10 flex-wrap'>
              {/* <Slider
                className='flex gap-4 w-full max-w-[1200px] flex-wrap ml-5 mb-10 mt-4 justify-center moreOptions'
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
              > */}
                {data.reviews && data.reviews.length > 0 ? (
                  data.reviews.map((review) => (
                    <div
                      key={review.id}
                      className='flex items-left flex-col border-b-2 p-2'
                    >
                      <p>Имя пользователя</p>
                      <Rating
                        name='half-rating'
                        value={review.rating}
                        readOnly
                      />
                      <span className='flex max-w-[400px] mt-4 text-gray-700'>
                        {review.text}
                      </span>
                    </div>
                  ))
                ) : (
                  <p>Оставьте отзыв первым!</p>
                )}
              {/* </Slider> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
