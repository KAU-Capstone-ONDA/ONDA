import axios from 'axios';
import apiClient from '../apiClient';

export const deleteRoomService = async (roomTypeId) => {
  try {
    const response = await apiClient.post(`/room-types/${roomTypeId}/delete`);

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
