'use client';
import { getCookie } from 'cookies-next';
import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import fetchService from '@/services/fetchs';
// import Slider from 'react-slick';

const Reviews = ({ product_id }) => {
  const [data, setData] = useState({});
  const [ratingValue] = useState(5);
  const [formData, setFormData] = useState({
    text: '',
    rating: '',
    user_id: 1,
  });

  const cooookies = getCookie('session');
  console.log('session:', cooookies)

  // const [session] = useState(getCookie('session')?.value);
  // console.log(session)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchService.getProductReview(product_id);

        if (reviewsData && Array.isArray(reviewsData.reviews)) {
          setData(reviewsData);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const hardcodedToken = '116|09gEPnxMuOtjXLfHXJPyVGJJB3zDvlVmsSYaKOSzcc9b3313';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${hardcodedToken}`,
        },
      };

      await fetchService.postProductReview(product_id, formData, config);

      await fetchService.getProductReview(product_id);

      setFormData({ text: '', rating: ratingValue });
    } catch (error) {
      console.error(
        'Error posting comment:',
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      <div className='flex mt-10 items-center flex-col'>
        <h2 className='font-body font-bold mb-5 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm'>
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
                  onChange={handleChange}
                />
              </Stack>
              <textarea
                name='text'
                id='text'
                onChange={handleChange}
                className='w-full w-[800px] min-w-[400px] min-h-[120px] p-2 border-solid border-2'
              />
              <button
                onSubmit={handleSubmit}
                className='bg-primary text-white p-4 rounded-2xl'
              >
                Отправить
              </button>
            </div>
          </form>
          <div className='flex gap-6 flex-col items-center border-t-2 border-gray-300 pt-4'>
            <p className='font-body font-bold mb-5 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm'>
              Отзывы других пользователей
            </p>
            <div className='flex gap-4 w-full max-w-[1200px] w-[900px] flex-col items-center mt-10 flex-wrap'>
              {data.reviews && data.reviews.length > 0 ? (
                data.reviews.map((review) => (
                  <div
                    key={review.id}
                    className='flex items-left flex-col border-b-2 p-2'
                  >
                    <p>Имя пользователя</p>
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
