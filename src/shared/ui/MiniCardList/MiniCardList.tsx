import MiniCard from '../MiniCard/MiniCard';
import { MiniCardListProps } from './types';
import cl from './MiniCardList.module.scss';

export const MiniCardList = ({ items }: MiniCardListProps) => {
  return (
    <div className={cl.cocktailList}>
      {items.map((item, index) => (
        <MiniCard
          key={index}
          title={item.title}
          description={item.description}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
  );
};
