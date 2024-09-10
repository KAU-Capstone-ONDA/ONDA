import apiClient from '../apiClient';

export const getRoomInfoService = async (roomTypeId) => {
  try {
    const response = await apiClient.get(`/room-types/${roomTypeId}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.data?.message;
      throw new Error(errorMessage);
    } else {
      throw new Error('network error');
    }
  }
};
