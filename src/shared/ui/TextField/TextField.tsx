import { RefObject, useId } from 'react';

import clsx from 'clsx';

import {
  CommonAttributesType,
  TextFieldPropsType,
  TextFieldVariant,
} from './types.ts';

import styles from './TextField.module.scss';
import { useResizableTextarea } from '../../lib/useResizableTextarea.ts';
import { TooltipAttributesType } from '../../types/tooltip.ts';

const DEFAULT_INPUT_PLACEHOLDER = '';
export const TOOLTIP_ID = 'react-tooltip-id';

/**
 * `Textarea` is a functional component that renders a textarea input field.
 *
 * @param {TextFieldPropsType} props - The properties passed to the component.
 * @param {string} props.value - The current value of the textarea.
 * @param {Function} [props.onChange] - The function to call when the textarea value changes.
 * @param {Function} [props.onFocus] - The function to call when the textarea receives focus.
 * @param {Function} [props.onBlur] - The function to call when the textarea loses focus.
 * @param {boolean} [props.disabled] - If true, the textarea is disabled.
 * @param {string} [props.placeholder] - The placeholder text for the textarea.
 * @param {boolean} [props.isValid] - If false, show validation error message.
 * @param {Array<string>} [props.validationErrors] - The validation error messages.
 * @param {string} [props.className] - The CSS class to apply to the textarea.
 * @param {boolean} [props.isAutoResizable] - If true, the textarea will automatically resize by height.
 * @param {string} [props.id] - custom id for textarea.
 * @param {boolean} [props.withoutBorder] - If true, the textarea will not have a border.
 * @param {React.Ref} [props.customRef] - The ref to be attached to the textarea.
 * @param {boolean} [props.isControlled] - If true, set 'tabindex={-1}' so that work only focus by 'el.focus()'
 *
 * @returns {JSX.Element} The rendered textarea element.
 */
const TextField = (props: TextFieldPropsType) => {
  const {
    onChange,
    onFocus,
    onBlur,
    value,
    disabled,
    placeholder,
    validationErrors,
    className,
    variant,
    id,
    withoutBorder,
    customRef,
    isControlled,
    isValid = true,
    validationErrorsPlace = 'top',
  } = props;

  const localId = useId();
  const uniqueId = id || localId;

  const textAreaRef = useResizableTextarea(
    value,
    customRef as RefObject<HTMLTextAreaElement>,
    variant === TextFieldVariant.Input
  );

  const dataTooltipContent =
    !isValid && validationErrors && validationErrors.length
      ? `
        <div class="${styles.tooltip__content}">
          ${validationErrors.reduce((prev, current) => {
            return `${prev}<div>${current}</div>`;
          }, '')}
        </div>`
      : undefined;

  const tooltipData: TooltipAttributesType = {
    'data-tooltip-id': !isValid ? TOOLTIP_ID : undefined,
    'data-tooltip-variant': 'error',
    'data-tooltip-html': dataTooltipContent,
    'data-tooltip-place': validationErrorsPlace,
  };

  const commonAttributes: CommonAttributesType = {
    id: uniqueId,
    tabIndex: isControlled ? -1 : undefined,
    placeholder: placeholder || DEFAULT_INPUT_PLACEHOLDER,
    disabled,
    value,
    onChange,
    onBlur,
    onFocus,
  };

  const commonStyles = [styles.textarea, className];

  const commonStylesWithCondition = {
    [styles.textarea_invalid]: !isValid,
    [styles.textarea_without_border]: withoutBorder,
  };

  return variant === TextFieldVariant.Input ? (
    <input
      {...tooltipData}
      {...commonAttributes}
      className={clsx(...commonStyles, {
        [styles.textarea_auto_resize]: false,
        ...commonStylesWithCondition,
      })}
      ref={customRef as RefObject<HTMLInputElement>}
    />
  ) : (
    <textarea
      {...tooltipData}
      {...commonAttributes}
      className={clsx(...commonStyles, {
        [styles.textarea_overflowHiden]:
          variant === TextFieldVariant.TextAreaWithAutoSize,
        ...commonStylesWithCondition,
      })}
      ref={
        variant === TextFieldVariant.TextAreaWithAutoSize ||
        variant === TextFieldVariant.TextAreaWithAutoSizeAndScroll
          ? textAreaRef
          : undefined
      }
      rows={1}
    />
  );
};

export default TextField;
