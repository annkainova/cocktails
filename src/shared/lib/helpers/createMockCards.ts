// TODO: deprecate when we don`t need this one
import { drinkDescriptions, titles } from '../../model/mockData';
import { MiniatureCard } from '../../ui/MiniCard/types';

const generateRandomIndex = (maxIndex: number) =>
  Math.floor(Math.random() * maxIndex);

export const createMockCards = (numsOfCards: number): MiniatureCard[] => {
  return Array.from({ length: numsOfCards }, () => {
    const index = generateRandomIndex(drinkDescriptions.length);
    return {
      description: drinkDescriptions[index],
      imageSrc: `${titles[index]} image path`,
      title: titles[index],
    };
  });
};
