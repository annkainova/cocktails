import { createEffect } from 'effector';
import apiService from '../../../../shared/model/services/apiService';

export const fetchCoctailsByNameFx = createEffect(
  async (name: string): Promise<string[]> => {
    const response = await apiService.searchByCoctailName(name);
    return response.data as string[];
  }
);

export const fetchIngridientByNameFx = createEffect(
  async (name: string): Promise<string[]> => {
    const response = await apiService.searchByIngridientName(name);
    return response.data as string[];
  }
);

export const fetchCoctailByLetterFx = createEffect(
  async (name: string): Promise<string[]> => {
    const response = await apiService.searchByFirstLetter(name);
    return response.data as string[];
  }
);

export const getCoctailsByIngridientsFx = createEffect(
  async (ingridients: string[]): Promise<string[]> => {
    // this string should be like this 'Dry_Vermouth,Gin,etc...'
    const mapped = ingridients
      .map((item) => item.split(' ').join('_'))
      .join(',');
    const response = await apiService.filterByIngridients(mapped);
    return response.data as string[];
  }
);

export const getCoctailsByIdFx = createEffect(
  async (id: string): Promise<string[]> => {
    const response = await apiService.getCoctailById(id);
    return response.data as string[];
  }
);
