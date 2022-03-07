import { DependencyList, useEffect } from 'react';

const useDebounce = (callback: () => void, delay: number, dependencies?: DependencyList[]) => {
  dependencies = [];

  useEffect(() => {
    const timeoutId = setTimeout(callback, delay);

    return () => clearTimeout(timeoutId);
  }, [...dependencies, delay]);
};

export default useDebounce;
