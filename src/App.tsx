import Card from './shared/ui/Card/Card';
import { CardInterface } from './types/CardInterface';
import { normalizeCocktail } from './utils/normalizeCocktail';

const rawData: CardInterface = {
  strDrink: 'Margarita',
  strInstructions: 'Mix all ingredients...',
  strCategory: 'Cocktail',
  strIBA: 'Contemporary Classics',
  strAlcoholic: 'Alcoholic',
  strDrinkThumb:
    'https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg',
  strIngredient1: 'Tequila',
  strIngredient2: 'Triple sec',
  strIngredient3: 'Lime juice',
  strIngredient4: 'Salt',
  strMeasure1: '1 1/2 oz',
  strMeasure2: '1/2 oz',
  strMeasure3: '1/2 oz',
  strMeasure4: null,
};

const cocktail = normalizeCocktail(rawData);

function App() {
  return <Card {...cocktail} />;
}

export default App;
