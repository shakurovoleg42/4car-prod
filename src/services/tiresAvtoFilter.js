// import instance from '@/utils/instance';
import axios from 'axios';

const  tiresAvtoFilter = {
    getAllBrands: async () => {
        const res = await axios.get(`https://cd52-93-188-86-71.ngrok-free.app/api/brands`);
        return res.data
    },
}
export default tiresAvtoFilter