import { createStore } from 'effector';
import { fetchAllIngredientsFx } from './actions';

const initialState: string[] = [];

export const $ingredientsData = createStore(initialState).on(
  fetchAllIngredientsFx.doneData,
  (_, payload) => payload
);
