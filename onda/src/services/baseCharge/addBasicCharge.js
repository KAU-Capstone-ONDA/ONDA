import apiClient from '../apiClient';

const baseUrl = '/basic-rates';

export const addBasicCharge = async (requestBody) => {
  try {
    const response = await apiClient.post(baseUrl, requestBody);

    return response.data;
  } catch (error) {
    throw Error('ERROR');
  }
};
