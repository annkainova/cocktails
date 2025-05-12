import { createStore } from 'effector';
import { fetchAllIngridientsFx } from './actions';

const initialState: string[] = [];

export const $ingridientsData = createStore(initialState).on(
  fetchAllIngridientsFx.doneData,
  (_, payload) => payload
);
