import {ApiResponse} from '../types';

export const fetchHoldings = async () => {
  try {
    const response = await fetch(
      'https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/',
    );
    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching holdings:', error);
    throw error;
  }
};
