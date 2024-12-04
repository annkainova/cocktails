import { ReactNode } from 'react';

export type SelectTagProps = {
  content: ReactNode;
  onDelete: () => void;
  isDisabled?: boolean;
  tooltipTitle?: string;
};
