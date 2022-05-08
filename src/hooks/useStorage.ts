import { useCallback, useEffect } from 'react';
import { StorageItem, StorageProps, StorageResponse } from '../types';

/**
 * useStorage - Hook to allow use of localstorage
 *
 * @param {React.Dispatch<StorageItem<T>>} setStorageItem - The state setter to control item being set in the storage
 * @param {string} storageKey - The key to be used when setting the localStorage value(s)
 *
 * @returns {<T extends StorageItem<U>>(storageItem: T) => void} updateStorageItem - function to update the stored values in the localstorage
 * @returns {<T = never>() => T | null | undefined} getStoredItem - function to get the stored item from localstorage
 * @returns {() => void} removeStoredItem - Function to remove stored item from localstorage
 *
 */
const useStorage = <U = never>({ setStorageItem, storageKey }: StorageProps<U>): StorageResponse<U> => {
  const updateStorageItem = useCallback(
    <T extends StorageItem<U>>(storageItem: T) => {
      localStorage.setItem(storageKey, JSON.stringify(storageItem));
      setStorageItem(storageItem);
    },
    [setStorageItem, storageKey],
  );

  const getStoredItem = useCallback(<T = never>(): T | null | undefined => {
    const storedItem = localStorage.getItem(storageKey);

    if (storedItem) {
      return JSON?.parse(JSON.stringify(storedItem));
    } else {
      return null;
    }
  }, [storageKey]);

  useEffect(() => {
    const storageItem = getStoredItem();
    if (storageItem) {
      setStorageItem(storageItem);
    }
  }, [getStoredItem, setStorageItem, storageKey]);

  const removeStoredItem = useCallback((): void => localStorage.removeItem(storageKey), [storageKey]);

  return {
    updateStorageItem,
    getStoredItem,
    removeStoredItem,
  };
};

export default useStorage;
