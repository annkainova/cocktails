import { ReactNode } from 'react';

export type SearchSelectProps = {
  options: {
    label: ReactNode;
    tagLabel: ReactNode;
    searchValue: string;
    checked: boolean;
    onDelete: () => void;
    onSelect: () => void;
    tooltipTitle?: string;
    disabled?: boolean;
  }[];
  onClose: () => void;
  clear: () => void;
  placeholder?: string;
};
