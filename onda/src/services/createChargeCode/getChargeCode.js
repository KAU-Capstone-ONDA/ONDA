import apiClient from '../apiClient';

const baseUrl = '/rate-codes/room-type';

export const getChargeCode = async (roomTypeId) => {
  try {
    const response = await apiClient.get(`${baseUrl}/${roomTypeId}`);

    return response.data;
  } catch (error) {
    throw Error(`ERROR: ${error}`);
  }
};
