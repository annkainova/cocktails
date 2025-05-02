import Button from '../Button/Button';
import cl from './Header.module.scss';

function Header() {
  return (
    <header className={'container ' + cl.header}>
      <p>Тут нужен лайк</p>
      <Button>Login</Button>
    </header>
  );
}

export default Header;
