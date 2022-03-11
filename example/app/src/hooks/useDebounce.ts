import { DependencyList, useEffect } from 'react';
/**
 * useDebounce - Hook to for delayed callback functions,
 *
 * useful when you need to finish performing a task before executing a function call
 *
 * @param {Function} callback - The callback function to execute after delayed timeout
 * @param {number} delay - The number of milliseconds to take before executing the callback function
 * @param {DependencyList[]} dependencies - array list of all dependencies related to the callback being executed
 *
 */
const useDebounce = (callback: () => void, delay: number, dependencies?: DependencyList[]) => {
  dependencies = [];

  useEffect(() => {
    const timeoutId = setTimeout(callback, delay);

    return () => clearTimeout(timeoutId);
  }, [...dependencies, delay]);
};

export default useDebounce;
