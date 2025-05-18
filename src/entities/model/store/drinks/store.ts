import { createStore } from 'effector';
import { fetchCocktailsByNameFx } from './actions';
import { CardInterface } from '../../../../shared/types/api/response';
import { getRandomCocktailsFx } from '../ingridients/actions';

const initialState: string[] = [];

export const $cocktailData = createStore(initialState).on(
  fetchCocktailsByNameFx.doneData,
  (_, payload) => payload
);

export const $randomCocktail = createStore<CardInterface | null>(null).on(
  getRandomCocktailsFx.doneData,
  (_, payload) => payload[0] || null
);
