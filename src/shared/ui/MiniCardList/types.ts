interface MiniCardData {
  title: string;
  description: string;
  imageSrc: string;
}

export interface MiniCardListProps {
  items: MiniCardData[];
}
