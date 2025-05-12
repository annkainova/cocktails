import apiLinks from './apiLinks';
import { baseInstance } from './instance';

const apiService = {
  searchByCoctailName: (coctailName: string) => {
    return baseInstance().get(apiLinks.searchCoctailBy, {
      params: {
        s: coctailName,
      },
    });
  },
  getCoctailById: (id: string) => {
    const params = { i: id };
    return baseInstance().get(apiLinks.lookupBy, {
      params,
    });
  },
  getRandomCoctails: () => {
    return baseInstance().get(apiLinks.getRandomCoctails);
  },
  // do we really need  this one(here we search an ingridient or coctail?)
  searchByIngridientName: (ingridient: string) => {
    return baseInstance().get(apiLinks.searchCoctailBy, {
      params: {
        i: ingridient,
      },
    });
  },
  // and this one
  searchByFirstLetter: (letter: string) => {
    return baseInstance().get(apiLinks.searchCoctailBy, {
      params: {
        f: letter,
      },
    });
  },
  allIngridients: () => {
    return baseInstance().get(apiLinks.searchAllIngridients, {
      params: {
        i: 'list', // const list of
      },
    });
  },
  // also cann add filter by categories, glasses or alcoholic
  filterByIngridients: (ingridients: string) => {
    const params = { i: ingridients };
    return baseInstance().get(apiLinks.filterBy, {
      params,
    });
  },
};

export default apiService;
