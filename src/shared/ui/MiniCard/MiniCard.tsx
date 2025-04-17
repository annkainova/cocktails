import { MiniatureCard } from './types';

import styles from './MiniCard.module.scss';
import Icons from '../../icons';
import clsx from 'clsx';

export default function MiniCard(props: MiniatureCard) {
  const { description, imageSrc, title, className } = props;
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.image_wrapper}>
        <img className={styles.image} src={imageSrc} alt={`${title} image`} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {/* TODO: update image */}
      <Icons.Chevron />
    </div>
  );
}
