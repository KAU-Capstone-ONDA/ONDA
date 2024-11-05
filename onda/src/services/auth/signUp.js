import axios from 'axios';

const signUpApi = axios.create({
  baseURL: '/v1/member/signup',
});

export const signUpService = async (requestBody) => {
  try {
    const response = await signUpApi.post('', requestBody);

    return response.data;
  } catch (e) {
    throw e;
  }
};
