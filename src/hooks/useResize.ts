import { useState, useEffect } from 'react';

/**
 * useResize - Hook to handle page resizing
 *
 * @returns {number} width - The width of the window when screen is resized
 * @returns {number}  height - The height of the window when screen is resized
 */
const useResize = () => {
  const [width, setWidth] = useState<number>(1440);
  const [height, setHeight] = useState<number>(960);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setWidth(innerWidth);
      setHeight(innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    height,
  };
};

export default useResize;
