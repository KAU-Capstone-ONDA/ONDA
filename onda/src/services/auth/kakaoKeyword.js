import axios from 'axios';

const kakaoApi = axios.create({
  baseURL: '/kakao/v2/local/search/keyword.json',
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
  },
});

export const searchKeyword = async ({ query }) => {
  try {
    const response = await kakaoApi.get('', {
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Kakao API', error);
    throw error;
  }
};
