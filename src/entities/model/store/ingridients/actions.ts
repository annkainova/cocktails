import { createEffect } from 'effector';
import apiService from '../../../../shared/model/services/apiService'; // update path
import { CardInterface } from '../../../../shared/types/api/response';

export const fetchAllIngredientsFx = createEffect(
  async (): Promise<string[]> => {
    const response = await apiService.allIngredients();
    return response.data as string[];
  }
);

export const getRandomCocktailsFx = createEffect(
  async (): Promise<CardInterface[]> => {
    const response = await apiService.getRandomCocktails();
    return response.data.drinks as CardInterface[];
  }
);
