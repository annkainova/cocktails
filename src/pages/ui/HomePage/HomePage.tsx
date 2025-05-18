import clsx from 'clsx';
import MiniCard from '../../../shared/ui/MiniCard/MiniCard';
import MultiSelect from '../../../shared/ui/MultiSelect/MultiSelect';
import cl from './HomePage.module.scss';
import Header from '../../../shared/ui/Header/Header';
import { MiniCardList } from '../../../shared/ui/MiniCardList/MiniCardList';

const myCocktailArray = [
  {
    title: 'Margarita',
    description: 'Dive into a world of refreshing drinks',
    imageSrc:
      'https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg',
  },
  {
    title: 'Margarita',
    description: 'Dive into a world of refreshing drinks',
    imageSrc:
      'https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg',
  },
];

export default function HomePage() {
  return (
    <div className={clsx('container', cl.wrapper)}>
      <Header />
      <div className={cl.homeContainer}>
        <div className={cl.left}>
          <div className={cl.section}>
            <h1 className={cl.title}>
              Mix the Perfect Cocktail from What You Have
            </h1>
            <MultiSelect options={[]} onClose={() => {}} clear={() => {}} />
          </div>

          <div className={cl.section}>
            <h3 className={cl.sectionTitle}>Random Cocktail</h3>
            <MiniCard
              title="Margarita"
              description="Dive into a world of refreshing drinks"
              imageSrc="https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg"
            />
          </div>
        </div>

        <div className={cl.right}>
          <h2 className={cl.sectionTitle}>You can already prepare</h2>

          <MiniCardList items={myCocktailArray} />

          <img
            className={cl.image}
            src="https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg"
            alt="cocktail"
          />
        </div>
      </div>
    </div>
  );
}
