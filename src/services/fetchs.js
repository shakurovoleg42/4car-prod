import axios from 'axios';

const fetchService = {
  // Запрос всех новостей
  getAllNews: async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API + "/news");
    return res.data;
  },
  getNewsById: async (slug) => {
    const res = await axios.get(process.env.NEXT_PUBLIC_API + `/news/${slug}`);
    return res.data;
  },
};

export default fetchService;
