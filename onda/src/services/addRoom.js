import axios from 'axios';

const addRoomApi = axios.create({
  baseURL: '/onda/v1/hotel/room-types/create',
});

addRoomApi.interceptors.request.use(
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

export const addRoomService = async (requestBody) => {
  try {
    const response = await addRoomApi.post('', requestBody);

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