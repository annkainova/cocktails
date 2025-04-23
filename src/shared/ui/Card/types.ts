export interface IngredientItem {
  name: string;
  amount?: string;
}

export interface Cocktail {
  id?: string;
  name: string;
  category: string;
  iba: string;
  alcoholic: string;
  instructions: string;
  image: string;
  ingredients: IngredientItem[];
}
