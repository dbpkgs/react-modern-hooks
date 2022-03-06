import { useEffect, useState, useRef } from 'react';

/**
 * @param {function} useStateCallback  - Hook that acts as a state callback
 * Functionality borrowed from @param setState in class based functions
 *
 * @param {T} initialState  - is the initial state when setting the state which is of generic type T
 * @param {React.SetStateAction<T>} updatedState - is the updated state
 * @returns {Array} - returns state, handleState in an array where the state is the resolved state while
 * handle state is the result of the callback
 */
const useStateCallback = <T>(
  initialState: T,
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
   * useEffect here is triggered everytime there is a state update which also calls the  callback
   * function if the callback function is provided
   */
  useEffect(() => {
    if (typeof callbackRef.current === 'function') {
      callbackRef.current(state);
      callbackRef.current = undefined;
    }
  }, [state]);

  return [state, handleSetState];
};

export default useStateCallback;
