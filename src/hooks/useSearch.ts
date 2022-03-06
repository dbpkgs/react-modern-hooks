import { useEffect, useRef, useState } from 'react';

/**
 * @param {function} useSearch  - is a function which acts as a delayed search every time a user types,
 * it receives an initial state as first parameter and timeout as second parameter.
 * The timeout is the duration period to search after when a user is typing.
 * Everytime a user is typing the callback to search is cancelled and only when a user stops typing then
 * the callback for search will be made after the duration specified. Default value is @value 500
 * Function is used in same manner as the @param setState in class based functions
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
  /**
   * On load of the function the provided state is set as the initial function state
   * @param {React.MutableRefObject<((updated: T) => void) | undefined>} callbackRef - is a reference
   * variable which we use to trigger the callback function call
   */
  const [state, setState] = useState<T>(initialState);
  const callbackRef = useRef<(updated: T) => void>();

  /**
   * Here @param {function } handleState runs the provided callback function which is optionally passed
   * after the state has been updated
   */
  const handleSetState = (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => {
    callbackRef.current = callback;
    setState(updatedState);
  };

  /**
   *
   * useEffect here is triggered everytime there is a state update, but after the specified duration to perform delayed call to the
   * callback function that can therefore be used to perform search
   *
   */
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
