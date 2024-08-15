import axios from 'axios';

const fetchService = {
  // Запрос всех новостей
  getAllNews: async () => {
    const res = await axios.get("https://9187-93-188-86-71.ngrok-free.app/api/news");
    return res.data;
  },
};

export default fetchService;
