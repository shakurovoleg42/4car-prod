// import instance from '@/utils/instance';
import axios from 'axios';

const  tiresAvtoFilter = {
    getAllBrands: async () => {
        const res = await axios.get(`https://cd52-93-188-86-71.ngrok-free.app/api/brands`);
        return res.data
    },

    // getModels : async (selectedAuto) => {
    //     const res = await axios.get(`https://cd52-93-188-86-71.ngrok-free.app/api/brands?brand=${selectedAuto}`);
    //     return res.data
    // },

    getYears: async (selectedModel) => {
        const res = await axios.get(`https://cd52-93-188-86-71.ngrok-free.app/api/years?model=` + selectedModel);
        return res.data
    }
}
export default tiresAvtoFilter