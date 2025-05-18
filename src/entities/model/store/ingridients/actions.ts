import { createEffect } from 'effector';
import apiService from '../../../../shared/model/services/apiService'; // update path

export const fetchAllIngridientsFx = createEffect(
  async (): Promise<string[]> => {
    const response = await apiService.allIngridients();
    return response.data as string[];
  }
);

export const getRandomCoctailsFx = createEffect(async (): Promise<string[]> => {
  const response = await apiService.getRandomCoctails();
  return response.data as string[];
});
