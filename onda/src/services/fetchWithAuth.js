import axios from 'axios';

// Axios 인스턴스 생성
const fetchWithAuth = axios.create({
    baseURL: 'onda/v1',
});

// 요청 인터셉터를 사용하여 Authorization 헤더를 추가
fetchWithAuth.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = token;}
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// fetchWithAuths 함수
export const fetchWithAuths = async (name) => {
    try {
        const response = await fetchWithAuth.get('/hotel', { params: { name } });
        return response.data;
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data?.message;
            throw new Error(errorMessage);
        } else {
            throw new Error('Network error');
        }
    }
};

export default fetchWithAuth;
