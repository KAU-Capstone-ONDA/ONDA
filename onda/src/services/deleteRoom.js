import axios from 'axios';

const deleteRoomApi = axios.create({
  baseURL: '/onda/v1/room-types',
});

deleteRoomApi.interceptors.request.use(
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

export const deleteRoomService = async (roomTypeId) => {
  try {
    const response = await deleteRoomApi.post(`/${roomTypeId}/delete`);

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
