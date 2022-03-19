import { useEffect } from 'react';
import { Handler, MutableHTMLObjectRef } from 'types';

/**
 *
 * useOnClickOutside - Hook to run a given callback when a user clicks outside a given HTMLElement
 *
 * @param {MutableHTMLObjectRef} ref: Ref to the html element to check for outside click
 * @param {Handler} handler - The callback to run when user clicks outside a given HTMLElement
 *
 */
const useOnClickOutside = (ref: MutableHTMLObjectRef, handler: Handler): void => {
  useEffect(() => {
    const listener = (event: Event): void => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref?.current || ref?.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
