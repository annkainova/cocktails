import { CardInterface } from '../shared/types/api/response';
import { Cocktail } from '../shared/ui/Card/types';

// Нормализация того что приходит с API в более удобный формат

export function normalizeCocktail(data: CardInterface): Cocktail {
  const ingredients = Array.from({ length: 15 }).flatMap((_, i) => {
    const name = data[`strIngredient${i + 1}` as keyof CardInterface];
    const amount = data[`strMeasure${i + 1}` as keyof CardInterface];
    return name ? [{ name, amount: amount || undefined }] : [];
  });

  return {
    id: data.idDrink,
    name: data.strDrink,
    category: data.strCategory,
    iba: data.strIBA,
    alcoholic: data.strAlcoholic,
    instructions: data.strInstructions,
    image: data.strDrinkThumb,
    ingredients,
  };
}
