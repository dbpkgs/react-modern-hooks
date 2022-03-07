import { useEffect, useRef, useState } from 'react';

/**
 * @param {function} useSearch  - Hook to allow delayed search
 *
 * @param {T} initialState  - is the initial state when setting the state which is of generic type T
 * @param {number} timeout - is the duration to perform search after, default @value 500
 * @param {React.SetStateAction<T>} updatedState - is the updated state
 * @returns {Array} - returns state, handleState in an array where the state is the resolved state while
 * handle state is the result of the callback
 */
const useSearch = <T>(
  initialState: T,
  timeout?: number,
): [state: T, setState: (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => void] => {
  const [state, setState] = useState<T>(initialState);
  const callbackRef = useRef<(updated: T) => void>();

  const handleSetState = (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => {
    callbackRef.current = callback;
    setState(updatedState);
  };

  useEffect(() => {
    if (typeof callbackRef.current === 'function') {
      const timeOutId = setTimeout(() => {
        callbackRef.current?.(state);
        callbackRef.current = undefined;
      }, timeout || 500); // If no timeout period is provided, use 500 as the default value

      return () => clearTimeout(timeOutId);
    }
  }, [state]);

  return [state, handleSetState];
};

export default useSearch;
