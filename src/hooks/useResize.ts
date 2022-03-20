import { useState, useEffect, useCallback } from 'react';
import { ResizeResponse } from 'types';
import { debounce } from 'utils';

/**
 * useResize - Hook to handle page resizing
 *
 * @returns {number} width - The width of the window when screen is resized
 * @returns {number}  height - The height of the window when screen is resized
 */
const useResize = (): ResizeResponse => {
  const [width, setWidth] = useState<number>(1440);
  const [height, setHeight] = useState<number>(960);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setWidth(innerWidth);
      setHeight(innerHeight);
    };

    const handleDebouncedResize = useCallback(() => {
      debounce(handleResize, 1000);
    }, []);

    window.addEventListener('resize', handleDebouncedResize);
    return () => window.removeEventListener('resize', handleDebouncedResize);
  }, []);

  return {
    width,
    height,
  };
};

export default useResize;
