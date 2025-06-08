import { createEffect } from 'effector';
import apiService from '../../../../shared/model/services/apiService';

export const fetchCocktailsByNameFx = createEffect(
  async (name: string): Promise<string[]> => {
    const response = await apiService.searchByCocktailName(name);
    return response.data as string[];
  }
);

export const fetchIngredientByNameFx = createEffect(
  async (name: string): Promise<string[]> => {
    const response = await apiService.searchByIngredientName(name);
    return response.data as string[];
  }
);

export const fetchCocktailByLetterFx = createEffect(
  async (name: string): Promise<string[]> => {
    const response = await apiService.searchByFirstLetter(name);
    return response.data as string[];
  }
);

export const getCocktailsByIngredientsFx = createEffect(
  async (ingredients: string[]): Promise<string[]> => {
    // this string should be like this 'Dry_Vermouth,Gin,etc...'
    const mapped = ingredients
      .map((item) => item.split(' ').join('_'))
      .join(',');
    const response = await apiService.filterByIngredients(mapped);
    return response.data as string[];
  }
);

export const getCocktailsByIdFx = createEffect(
  async (id: string): Promise<string[]> => {
    const response = await apiService.getCocktailById(id);
    return response.data as string[];
  }
);
