import axios from 'axios';

import instance from './instance';

const getSession = async (session) => {
  try {
    await instance.get('/user', {
      headers: {
        Authorization: `Bearer ${session}`,
      },
    });

    return true;
  } catch (error) {
    return false;
  }
};

export const checkAuthentication = async () => {
  try {
    const res = await axios.get('/api/auth/check');
    return res.data.authenticated;
  } catch (error) {
    return false;
  }
};

export default getSession;
