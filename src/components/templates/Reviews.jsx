'use client';
import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import fetchService from '@/services/fetchs';
import instance from '@/utils/instance';
import { useRouter } from 'next/navigation';

const Reviews = ({ product_id, user_cookie }) => {
  const [data, setData] = useState({});
  const [ratingValue, setRatingValue] = useState(5);
  const [formData, setFormData] = useState({
    text: '',
    rating: 5,
    user_id: null,
  });
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user_cookie}`,
          },
        };
        const response = await instance.get('/user', config);
        if (response.data && response.data.id) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            user_id: response.data.id,
          }));
        }
      } catch (error) {
        // console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, [user_cookie]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchService.getProductReview(product_id);
        if (reviewsData && Array.isArray(reviewsData.reviews)) {
          setData(reviewsData);
        }
      } catch (error) {
        // console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [product_id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user_cookie}`,
        },
      };

      await fetchService.postProductReview(product_id, formData, config);

      const updatedReviews = await fetchService.getProductReview(product_id);
      setData(updatedReviews);
      
      setFormData({ text: '', rating: ratingValue});
    } catch (error) {
      router.push('/login');
      // console.error('Error posting review:', error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className='flex mt-10 items-center flex-col'>
        <h2 className='font-forms font-bold mb-5 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm'>
          Оставьте свой отзыв
        </h2>
        <div className='flex gap-5 flex-col ranking' data-aos=''>
          <form onSubmit={handleSubmit}>
            <div className='flex gap-6 flex-col items-center'>
              <Stack className='max-w-[420px]' spacing={1}>
                <Rating
                  name='rating'
                  id='rating'
                  precision={1}
                  size='large'
                  value={ratingValue}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                    handleChange({
                      target: {
                        name: 'rating',
                        value: newValue,
                      },
                    });
                  }}
                />
              </Stack>
              <textarea
                name='text'
                id='text'
                onChange={handleChange}
                value={formData.text}
                className='max-w-[800px] min-w-[350px] min-h-[120px] p-2 border-solid border-2'
                placeholder='Введите ваш отзыв'
              />
              <button
                className='bg-primary text-white p-4 rounded-2xl'
                type='submit'
              >
                Отправить
              </button>
            </div>
          </form>
          <div className='flex gap-6 flex-col items-center border-t-2 border-gray-300 pt-4'>
            <p className='font-forms font-bold mb-5 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm'>
              Отзывы других пользователей
            </p>
            <div className='flex gap-4 w-full max-w-[1200px] w-[900px] flex-col items-start mt-10 flex-wrap'>
              {data.reviews && data.reviews.length > 0 ? (
                data.reviews.map((review) => (
                  <div
                    key={review.id}
                    className='flex items-left flex-col border-b-2 p-2'
                  >
                    <p>{data.user_name}</p>
                    <Rating
                      name='half-rating'
                      precision={1}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
