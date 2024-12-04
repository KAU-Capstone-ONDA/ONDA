import apiClient from '../apiClient';

const baseUrl = '/rate-codes';

export const getChargeCode = async (roomTypeId) => {
  try {
    const response = await apiClient.get(`${baseUrl}/room-type/${roomTypeId}`);

    return response.data;
  } catch (error) {
    throw Error(`ERROR: ${error}`);
  }
};

export const postChargeCode = async (requestBody) => {
  try {
    const response = await apiClient.post(`${baseUrl}`, requestBody);

    return response.data;
  } catch (error) {
    throw Error(`Error: ${error}`);
  }
};
