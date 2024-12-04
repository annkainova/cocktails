import {
  EventsType,
  PlacesType,
  PositionStrategy,
  VariantType,
  WrapperType,
} from 'react-tooltip';

export type TooltipAttributesType = {
  'data-tooltip-id'?: string;
  'data-tooltip-place'?: PlacesType;
  'data-tooltip-content'?: string | null;
  'data-tooltip-html'?: string | null;
  'data-tooltip-variant'?: VariantType;
  'data-tooltip-offset'?: number;
  'data-tooltip-wrapper'?: WrapperType;
  'data-tooltip-events'?: EventsType[];
  'data-tooltip-position-strategy'?: PositionStrategy;
  'data-tooltip-delay-show'?: number;
  'data-tooltip-delay-hide'?: number;
  'data-tooltip-float'?: boolean;
  'data-tooltip-hidden'?: boolean;
  'data-tooltip-class-name'?: string;
};
