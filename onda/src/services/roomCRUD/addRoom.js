import apiClient from '../apiClient';

export const addRoomService = async (requestBody) => {
  try {
    const response = await apiClient.post(
      '/hotel/room-types/create',
      requestBody,
    );

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
