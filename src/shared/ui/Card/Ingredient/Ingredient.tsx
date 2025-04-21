import cl from './Ingredient.module.scss';

interface IngredientProps {
  name: string;
  amount: string;
}

const Ingredient = (props: IngredientProps) => {
  const { name, amount } = props;
  return (
    <div className={cl.ingredient}>
      <p className={cl.name}>{name}</p>
      <p className={cl.amount}>{amount}</p>
    </div>
  );
};

export default Ingredient;
