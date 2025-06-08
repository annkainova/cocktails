import MiniCard from '../MiniCard/MiniCard';
import { MiniCardListProps } from './types';
import cl from './MiniCardList.module.scss';

export const MiniCardList = ({ items }: MiniCardListProps) => {
  return (
    <div className={cl.cocktailList}>
      {items.map(({ title, description, imageSrc }, index) => (
        <MiniCard
          key={index}
          title={title}
          description={description}
          imageSrc={imageSrc}
        />
      ))}
    </div>
  );
};
