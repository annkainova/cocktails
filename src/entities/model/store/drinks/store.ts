import { createStore } from 'effector';
import { fetchCoctailsByNameFx } from './actions';

const initialState: string[] = [];

export const $coctailData = createStore(initialState).on(
  fetchCoctailsByNameFx.doneData,
  (_, payload) => payload
);
