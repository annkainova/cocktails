// Это тип того что приходит с API. Возможно не тут должно лежать)
export interface CardInterface {
  idDrink?: string;
  strDrink: string;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1?: string | null;
  strIngredient2?: string | null;
  strIngredient3?: string | null;
  strIngredient4?: string | null;
  strIngredient5?: string | null;
  strIngredient6?: string | null;
  strIngredient7?: string | null;
  strIngredient8?: string | null;
  strIngredient9?: string | null;
  strIngredient10?: string | null;
  strIngredient11?: string | null;
  strIngredient12?: string | null;
  strIngredient13?: string | null;
  strIngredient14?: string | null;
  strIngredient15?: string | null;
  strMeasure1?: string | null;
  strMeasure2?: string | null;
  strMeasure3?: string | null;
  strMeasure4?: string | null;
  strMeasure5?: string | null;
  strMeasure6?: string | null;
  strMeasure7?: string | null;
  strMeasure8?: string | null;
  strMeasure9?: string | null;
  strMeasure10?: string | null;
  strMeasure11?: string | null;
  strMeasure12?: string | null;
  strMeasure13?: string | null;
  strMeasure14?: string | null;
  strMeasure15?: string | null;
}

export interface Ingredients {
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
}
export interface Measure {
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
}

// TODO: update this one)
export interface COCKTAIL extends Ingredients, Measure {
  idDrink: '11007';
  strDrink: 'Margarita';
  strDrinkAlternate: null;
  strTags: 'IBA,ContemporaryClassic';
  strVideo: null;
  strCategory: 'Ordinary Drink';
  strIBA: 'Contemporary Classics';
  strAlcoholic: 'Alcoholic';
  strGlass: 'Cocktail glass';
  strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.'; // only  this we need and can also translate it into russian?))

  strInstructionsES: 'Frota el borde del vaso con la rodaja de lima para que la sal se adhiera a \u00e9l. Procure humedecer s\u00f3lo el borde exterior y espolvorear la sal sobre \u00e9l. La sal debe presentarse en los labios del imbibidor y nunca mezclarse en el c\u00f3ctel. Agite los dem\u00e1s ingredientes con hielo y vi\u00e9rtalos con cuidado en el vaso.'; // deprecate
  strInstructionsDE: 'Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der \u00e4u\u00dfere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genie\u00dfers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis sch\u00fctteln und vorsichtig in das Glas geben.'; // deprecate
  strInstructionsFR: "Frotter le bord du verre avec la tranche de citron vert pour faire adh\u00e9rer le sel. Veillez \u00e0 n'humidifier que le bord ext\u00e9rieur et \u00e0 y saupoudrer le sel. Le sel doit se pr\u00e9senter aux l\u00e8vres du buveur et ne jamais se m\u00e9langer au cocktail. Secouez les autres ingr\u00e9dients avec de la glace, puis versez-les d\u00e9licatement dans le verre."; // deprecate
  strInstructionsIT: 'Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.'; // deprecate
  'strInstructionsZH-HANS': null; // deprecate
  'strInstructionsZH-HANT': null; // deprecate
  strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg';
  strImageSource: 'https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg'; // an image of coctail
  strImageAttribution: 'Cocktailmarler'; // ???
  strCreativeCommonsConfirmed: 'Yes'; // ???
  dateModified: '2015-08-18 14:42:59'; // deprecate
}
