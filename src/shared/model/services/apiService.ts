import apiLinks from './apiLinks';
import { baseInstance } from './instance';

const apiService = {
  searchByCocktailName: (cocktailName: string) => {
    return baseInstance().get(apiLinks.searchCocktailBy, {
      params: {
        s: cocktailName,
      },
    });
  },
  getCocktailById: (id: string) => {
    const params = { i: id };
    return baseInstance().get(apiLinks.lookupBy, {
      params,
    });
  },
  getRandomCocktails: () => {
    return baseInstance().get(apiLinks.getRandomCocktails);
  },
  // do we really need  this one(here we search an ingridient or coctail?)
  searchByIngredientName: (ingredient: string) => {
    return baseInstance().get(apiLinks.searchCocktailBy, {
      params: {
        i: ingredient,
      },
    });
  },
  // and this one
  searchByFirstLetter: (letter: string) => {
    return baseInstance().get(apiLinks.searchCocktailBy, {
      params: {
        f: letter,
      },
    });
  },
  allIngredients: () => {
    return baseInstance().get(apiLinks.searchAllIngredients, {
      params: {
        i: 'list', // const list of
      },
    });
  },
  // also cann add filter by categories, glasses or alcoholic
  filterByIngredients: (ingredients: string) => {
    const params = { i: ingredients };
    return baseInstance().get(apiLinks.filterBy, {
      params,
    });
  },
};

export default apiService;
