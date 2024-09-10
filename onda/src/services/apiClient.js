import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/onda/v1',
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = token; // Bearer 토큰 형식 적용
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
