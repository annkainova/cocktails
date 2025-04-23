import Ingredient from './Ingredient/Ingredient';
import Icons from '../../icons';
import { Cocktail } from './types';

import cl from './Card.module.scss';
import SelectTag from '../SelectTag';
import { ozToMl } from '../../../utils/convertToMl';

function Card(props: Cocktail) {
  const { name, instructions, iba, category, alcoholic, image, ingredients } =
    props;

  return (
    <div className={cl.card}>
      <div className={cl.imageWrapper}>
        <div className={cl.like}>
          <Icons.Like />
        </div>
        <img className={cl.image} src={image} alt={`${name} image`} />
      </div>
      <div className={cl.content}>
        <h4 className={cl.title}>{name}</h4>
        <div className={cl.tags}>
          {[iba, category, alcoholic].map((tag) => (
            <SelectTag key={tag} content={tag} hideDeleteIcon />
          ))}
        </div>
        <div className={cl.ingredients}>
          {ingredients.map((ingredient, index) => {
            return (
              <Ingredient
                key={index}
                name={ingredient.name}
                amount={ozToMl(ingredient.amount)}
              />
            );
          })}
        </div>
        <p className={cl.instructions}>{instructions}</p>
      </div>
    </div>
  );
}

export default Card;
