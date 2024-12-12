import c from './Ingredient.module.scss';

interface IngredientProps {
  name: string;
  amount: string;
}

const Ingredient = (props: IngredientProps) => {
  const { name, amount } = props;
  return (
    <div className={c.ingredient}>
      <p className={c.name}>{name}</p>
      <p className={c.amount}>{amount}</p>
    </div>
  );
};

export default Ingredient;
