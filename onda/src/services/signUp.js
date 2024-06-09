import axios from 'axios';

const signUpApi = axios.create({
  baseURL: '/onda/v1/member/signup',
});

export const signUpService = async (requestBody) => {
  try {
    const response = await signUpApi.post('', requestBody);

    return response.data;
  } catch (e) {
    console.log('Error: ', e);
    throw e;
  }
};
