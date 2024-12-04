import { ReactNode } from 'react';

export type SelectOptionProps = {
  onClick?: (() => void) | ((event: React.MouseEvent) => void);
  content?: ReactNode;
  tooltipTitle?: string;
  disabled?: boolean;
};
