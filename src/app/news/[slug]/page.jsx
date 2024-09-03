'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar/NavBar';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { FaAngleLeft } from 'react-icons/fa6';
import fetchService from '@/services/fetchs';
import Footer from '@/components/Footer/Footer';

const NewsPage = ({ params }) => {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({ body: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await fetchService.getNewsById(params.slug);
        setData(newsData);

        const commentsData = await fetchService.getCommentsNews(newsData.id);
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const hardcodedToken = '116|09gEPnxMuOtjXLfHXJPyVGJJB3zDvlVmsSYaKOSzcc9b3313'

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${hardcodedToken}`
        }
      };

      const res = await fetchService.postCommentNews(data.id, formData, config);
      console.log('Comment posted:', res.data);

      const updatedComments = await fetchService.getCommentsNews(data.id);
      setComments(updatedComments);

      setFormData({ body: '' });
    } catch (error) {
      console.error('Error posting comment:', error.response?.data || error.message);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='overflow-hidden'>
        <header className='bg-no-repeat bg-cover bg-center w-full pb-20 bg-diski'>
          <div className='container'>
            <NavBar />
          </div>
        </header>
        <ScrollToTop />
        <main className='my-10 container'>
          <section className='flex flex-col items-center gap-4 px-4'>
            <Link href='/news' className='flex items-center gap-2 mb-4'>
              <FaAngleLeft /> Назад
            </Link>
            <div className='px-4' data-aos='fade-right'>
              <h1 className='font-body font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl text-center'>
                {data.title}
              </h1>
            </div>
            <h3 className='md:text-xl lg:text-2xl font-bold text-primary'>
              {data.date}
            </h3>
            <p className='text-justify lg:text-lg text-md max-w-[900px]'>
              {data.description}
            </p>
            <img src={data.image} alt={data.title} />
            <p className='text-sm text-justify mb-2 text-md md:text-lg max-w-[900px]'>
              {data.text}
            </p>
          </section>
          <div className='flex gap-6 flex-col items-center border-t-2 border-gray-300 pt-4 mt-8'>
            <p className='font-body font-bold mb-5 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm'>
              Комментарии
            </p>
            <div className='flex gap-6 flex-col items-center'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <textarea
                  placeholder='Enter a comment'
                  onChange={handleChange}
                  className='max-w-[800px] min-w-[350px] min-h-[120px] p-2 border-solid border-2'
                  name='body'
                  value={formData.body}
                ></textarea>
                <button
                  className='bg-primary text-white py-2 px-2 rounded-2xl'
                  type='submit'
                >
                  Jnghfdbnm
                </button>
              </form>
            </div>
            {comments.map((comment) => (
              <div
                key={comment.id}
                className='flex flex-col items-left border-b-2 p-2 mt-3 max-w-[800px] min-w-[300px] w-full'
              >
                <p className='text-left w-full'>{comment.user.last_name} {comment.user.first_name}</p>
                <span className='text-left mt-4 text-gray-700 w-full'>
                  {comment.body}
                </span>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};



export default NewsPage;


