import { ButtonProps } from './types';
import cl from './Button.module.scss';

function Button(props: ButtonProps) {
  const { children, onClick } = props;

  return (
    <button onClick={onClick} type="submit" className={cl.button}>
      {children}
    </button>
  );
}

export default Button;
