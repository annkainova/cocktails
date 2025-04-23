import { createMockCards } from '../../../shared/lib/helpers/createMockCards';
import MiniCard from '../../../shared/ui/MiniCard/MiniCard';
import styles from './HomePage.module.scss';

export default function HomePage() {
  // generate mock data for render  cards:)
  const data = createMockCards(10);
  return (
    <div className={styles.page}>
      {data.map(({ description, imageSrc, title }) => {
        return (
          <MiniCard
            description={description}
            title={title}
            imageSrc={imageSrc}
          />
        );
      })}
    </div>
  );
}
