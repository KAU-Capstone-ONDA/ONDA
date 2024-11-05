import axios from 'axios';

const loginApi = axios.create({
  baseURL: '/onda/v1/member/common-login',
});
export const loginService = async (requestBody) => {
  try {
    const response = await loginApi.post('', requestBody);

    return response.data;
  } catch (error) {
    throw error;
  }
};
