import { ButtonProps } from './types';
import cl from './Button.module.scss';

function Button(props: ButtonProps) {
  const { buttonText, onClick } = props;

  return (
    <button onClick={onClick} type="submit" className={cl.button}>
      {buttonText}
    </button>
  );
}

export default Button;
