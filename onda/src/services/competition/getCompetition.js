import apiClient from '../apiClient';

export const getCompetitionService = async () => {
  try {
    const response = await apiClient.get('/competing-hotel');
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

export const searchCompetitionService = async (name) => {
  try {
    const response = await apiClient.get('/hotel', { params: name });

    return response.data;
  } catch (error) {
    if (error.response) {
      const errorMessage = error.response.date?.message;
      throw new Error(errorMessage);
    } else {
      throw new Error('network error');
    }
  }
};
