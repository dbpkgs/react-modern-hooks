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
  const [state, setState] = useState<T>(initialState);
  const callbackRef = useRef<(updated: T) => void>();

  const handleSetState = (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => {
    callbackRef.current = callback;
    setState(updatedState);
  };

  useEffect(() => {
    if (typeof callbackRef.current === 'function') {
      callbackRef.current(state);
      callbackRef.current = undefined;
    }
  }, [state]);

  return [state, handleSetState];
};

export default useStateCallback;
