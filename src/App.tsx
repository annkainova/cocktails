import Card from './shared/ui/Card/Card';

function App() {
  return (
    <Card
      strDrink="string"
      strInstructions="string"
      strCategory="string"
      strIBA="string"
      strAlcoholic="string"
      strDrinkThumb="https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg"
      strIngredient1="Tequila"
      strIngredient2="Triple sec"
      strIngredient3="Lime juice"
      strIngredient4="Salt"
      strMeasure1="1 1/2 oz"
      strMeasure2="1/2 oz"
      strMeasure3="1/2 oz"
      strMeasure4={null}
    />
  );
}

export default App;
