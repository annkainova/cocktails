import c from './CardTag.module.scss';

interface CardTagProps {
  tagLabel: string;
}

function CardTag(props: CardTagProps) {
  return <div className={c.cardTag}>{props.tagLabel}</div>;
}

export default CardTag;
