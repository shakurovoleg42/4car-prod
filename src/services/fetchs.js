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

  getManufacturersHome: async () => {
    const res = await instance.get('/manufacturers-home');
    return res.data;
  },

  getManufacturers: async ({ ...params }) => {
    const res = await instance.get('/manufacturers', { params });
    return res.data;
  },

  getManufacturer: async (slug) => {
    const res = await instance.get(`/manufacturers/${slug}`);
    return res.data;
  },
  getProduct: async (slug) => {
    const res = await instance.get(`/products/${slug}`);
    return res.data;
  },

  getCommentsNews: async (id) => {
    const res = await instance.get(`/news/${id}/comments`);
    return res.data;
  },
};

export default fetchService;
