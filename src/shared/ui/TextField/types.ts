import { ChangeEventHandler, FocusEventHandler, RefObject } from 'react';
import { PlacesType } from 'react-tooltip';

export enum TextFieldVariant {
  TextArea = 'textArea',
  TextAreaWithAutoSize = 'textAreaWithAutoSize',
  TextAreaWithAutoSizeAndScroll = 'textAreaWithAutoSizeAndScroll',
  Input = 'input',
}

export interface TextFieldPropsType {
  value: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  variant: TextFieldVariant;
  isValid?: boolean;
  validationErrors?: string[];
  validationErrorsPlace?: PlacesType;
  className?: string;
  id?: string;
  withoutBorder?: boolean;
  customRef?: RefObject<HTMLTextAreaElement | HTMLInputElement>;
  isControlled?: boolean;
}

export type CommonAttributesType = {
  id?: string;
  tabIndex?: number;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
};
