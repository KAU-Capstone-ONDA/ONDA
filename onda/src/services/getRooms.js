import axios from 'axios';

const getRoomsApi = axios.create({
  baseURL: '/onda/v1/hotel/room-types',
});

getRoomsApi.interceptors.request.use(
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

export const getRoomsService = async () => {
  try {
    const response = await getRoomsApi.get('');

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
