import { useCallback, useEffect } from 'react';
import { StorageProps, StorageResponse } from '../types';

/**
 * useStorage - Hook to allow use of localstorage
 *
 * @param {React.SetStateAction<T>} setStorageItem - The state setter to control item being set in the storage
 * @param {string} storageKey - The key to be used when setting the localStorage value(s)
 *
 * @returns {Function} updateStorageItem - function to update the stored values in the localstorage
 * @returns {Function} getStoredItem - function to get the stored item from localstorage
 * @returns {Function} removeStoredItem - Function to remove stored item from localstorage
 *
 */
const useStorage = ({ setStorageItem, storageKey }: StorageProps): StorageResponse => {
  const updateStorageItem = useCallback(
    <T = never>(storageItem: T) => {
      localStorage.setItem(storageKey, JSON.stringify(storageItem));
      // @ts-expect-error (2345) FIXME: (parameter) storageItem: T = never Argument of type 'T' is not assignable to parameter of type 'never'
      setStorageItem(storageItem);
    },
    [setStorageItem, storageKey],
  );

  const getStoredItem = useCallback(
    <T = never>(): T | null | undefined => JSON.parse(localStorage.getItem(storageKey) as string),
    [storageKey],
  );

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
