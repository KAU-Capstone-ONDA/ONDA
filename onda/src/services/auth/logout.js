import axios from 'axios';

const logoutApi = axios.create({
  baseURL: '/onda/v1/member/token/logout',
});

logoutApi.interceptors.request.use(
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

export const logoutService = async () => {
  try {
    const response = await logoutApi.post('');

    return response.data;
  } catch (error) {
    if (error.response) {
      const errorMessage =
        error.response.data?.message || '로그아웃 할 수 없습니다';
      throw new Error(errorMessage);
    } else {
      throw new Error('network error');
    }
  }
};
