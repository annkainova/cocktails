import CardTag from './CardTag/CardTag';
import Ingredient from './Ingredient/Ingredient';
import Icons from '../../icons';
import { CardInterface } from './types';

import c from './Card.module.scss';

function Card(props: CardInterface) {
  const {
    strDrink,
    strInstructions,
    strIBA,
    strCategory,
    strAlcoholic,
    strDrinkThumb,
  } = props;

  const ingredients = Array.from({ length: 15 }).map((_, i) => ({
    name: props[`strIngredient${i + 1}` as keyof CardInterface],
    amount: props[`strMeasure${i + 1}` as keyof CardInterface],
  }));

  function parseFraction(value: string | undefined | null): number {
    if (!value) return 0;
    const parts = value.slice(0, -3).split(' ');

    if (parts.length === 2) {
      const [whole, fraction] = parts;
      const [numerator, denominator] = fraction.split('/');

      return Number(whole) + Number(numerator) / Number(denominator);
    } else if (parts[0].includes('/')) {
      const [numerator, denominator] = parts[0].split('/');
      return Number(numerator) / Number(denominator);
    }
    return Number(parts[0]);
  }

  return (
    <div className={c.card}>
      <div className={c.imageWrapper}>
        <div className={c.like}>
          <Icons.Like />
        </div>
        <img
          className={c.image}
          src={strDrinkThumb}
          alt={`${strDrink} image`}
        />
      </div>
      <div className={c.content}>
        <h4 className={c.title}>{strDrink}</h4>
        <div className={c.tags}>
          <CardTag tagLabel={strIBA} />
          <CardTag tagLabel={strCategory} />
          <CardTag tagLabel={strAlcoholic} />
        </div>
        <div className={c.ingredients}>
          {ingredients
            .filter((ing) => ing.name)
            .map((ing, index) => {
              const ozToMl = 29.573;
              const amount =
                ing.amount &&
                Math.round(parseFraction(ing.amount) * ozToMl).toString() +
                  ' ml';

              return (
                <Ingredient
                  key={index}
                  name={ing.name as string}
                  amount={amount as string}
                />
              );
            })}
        </div>
        <p className={c.instructions}>{strInstructions}</p>
      </div>
    </div>
  );
}

export default Card;
