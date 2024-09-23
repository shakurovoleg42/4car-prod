import instance from '@/utils/instance';
// import axios from 'axios';

const  tiresAvtoFilter = {
    getAllBrands: async () => {
        const res = await instance.get(`/brands`);
        return res.data
    },
}
export default tiresAvtoFilter