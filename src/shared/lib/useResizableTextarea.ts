import { RefObject, useEffect, useRef } from 'react';

/**
 * `useResizableTextarea` is a custom React hook that adjusts the height of a textarea element
 * dynamically based on its content.
 *
 * @param {unknown} value - The value that triggers the effect to resize the textarea. This is
 * typically the current value of the textarea.
 * @param {RefObject<HTMLTextAreaElement | null>} [customRef] - custom ref instead local ref.
 * Use it if you need to use your own ref
 *
 * @returns {RefObject<HTMLTextAreaElement>} textAreaRef - A ref object that can be attached
 * to a textarea element. The textarea's height will be adjusted whenever the `value` changes.
 */
export function useResizableTextarea(
  value: unknown,
  customRef?: RefObject<HTMLTextAreaElement>,
  isStop?: boolean
): RefObject<HTMLTextAreaElement> {
  const localRef = useRef<HTMLTextAreaElement>(null);
  const textAreaRef = customRef || localRef;

  useEffect(() => {
    if (!isStop) {
      const element = textAreaRef.current;

      if (element) {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight + 2}px`;
      }
    }
  }, [value, isStop, textAreaRef]);

  return textAreaRef;
}
