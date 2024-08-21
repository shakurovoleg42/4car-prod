import instance from '@/utils/instance';

const fetchService = {
  // Запрос всех новостей
  getAllNews: async () => {
    const res = await instance.get('/news');
    return res.data;
  },
  getNewsById: async (slug) => {
    const res = await instance.get(`/news/${slug}`);
    return res.data;
  },
  getManufacturers: async () => {
    const res = await instance.get('/manufacturers');
    return res.data;
  },
  getManufacturer: async (slug) => {
    const res = await instance.get(`/manufacturers/${slug}`);
    return res.data;
  },
};

export default fetchService;
