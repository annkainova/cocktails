import { RefObject, useEffect, useRef, useState } from 'react';

interface UsePopoverOpenerReturnType {
  isShowModal: boolean;
  switchIsShowModal: () => void;
  elementRef: RefObject<HTMLDivElement>;
}

/**
 * `usePopoverOpener` is a custom React hook that manages the state of a modal
 * or popover and provides a reference to the element that triggers the modal.
 *
 * @returns {UsePopoverOpenerReturnType} An object containing the following properties:
 * - switchIsShowModal - A function that toggles the state of the modal (show/hide).
 *
 * - isShowModal - A boolean indicating whether the modal is currently shown or not.
 *
 * - elementRef - A React ref object that can be attached to the element that triggers the modal.
 * The modal will be hidden if a click event occurs outside of this element.
 */
const usePopoverOpener = (): UsePopoverOpenerReturnType => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const switchIsShowModal = () => setIsShowModal(!isShowModal);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const element = elementRef.current;

      if (element) {
        const withinBoundaries = e.composedPath().includes(element);

        if (!withinBoundaries) {
          setIsShowModal(false);
        }
      }
    };

    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);

  return {
    switchIsShowModal,
    isShowModal,
    elementRef,
  };
};

export default usePopoverOpener;
