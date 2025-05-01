// shared/ui/Loader/Loader.tsx
import cl from './Loader.module.scss';
import gif from '../../../../public/ui/loader.webp';

function Loader() {
  return (
    <div className={cl.wrapper}>
      <img src={gif} alt="Loading cocktail" className={cl.loader} />
    </div>
  );
}

export default Loader;
