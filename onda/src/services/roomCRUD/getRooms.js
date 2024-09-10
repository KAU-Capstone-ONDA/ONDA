import apiClient from '../apiClient';

export const getRoomsService = async () => {
  try {
    const response = await apiClient('/hotel/room-types');

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
