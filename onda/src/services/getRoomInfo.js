import axios from 'axios';

const getRoomInfoApi = axios.create({
  baseURL: '/onda/v1/room-types',
});

getRoomInfoApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const getRoomInfoService = async (roomTypeId) => {
  try {
    const response = await getRoomInfoApi.get(`/${roomTypeId}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data?.message;
      throw new Error(errorMessage);
    } else {
      throw new Error('network error');
    }
  }
};
