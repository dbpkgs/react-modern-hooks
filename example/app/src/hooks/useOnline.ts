import { useState, useEffect } from 'react';
import { OnlineResponse } from '../types';

/**
 * useOnline - Hook to check if user is currently online or offline
 *
 * @return {boolean} online - A boolean value if a use is online or offline
 *
 */
const useOnline = (): OnlineResponse => {
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setOnline(true));
    window.addEventListener('offline', () => setOnline(false));

    return () => {
      window.removeEventListener('online', () => setOnline(true));
      window.removeEventListener('offline', () => setOnline(false));
    };
  }, []);

  return {
    online,
  };
};

export default useOnline;
