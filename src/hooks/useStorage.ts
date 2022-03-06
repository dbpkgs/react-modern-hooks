import { useCallback, useEffect } from 'react'

type UseStorageProps<T = any> = {
  setStorageItem: React.SetStateAction<T>
  storageKey: string
}

const useStorage = ({ setStorageItem, storageKey }: UseStorageProps) => {
  const updateStorageItem = useCallback(
    <T = any>(storageItem: T) => {
      localStorage.setItem(storageKey, JSON.stringify(storageItem))
      setStorageItem(storageItem)
    },
    [setStorageItem, storageKey]
  )

  const getStoredItem = useCallback(
    <T = any>(): T | null | undefined =>
      JSON.parse(localStorage.getItem(storageKey) as string),
    [storageKey]
  )

  useEffect(() => {
    const storageItem = getStoredItem()
    if (storageItem) {
      setStorageItem(storageItem)
    }
  }, [setStorageItem, storageKey])

  const removeStoredItem = useCallback(
    (): void => localStorage.removeItem(storageKey),
    []
  )

  return {
    updateStorageItem,
    getStoredItem,
    removeStoredItem
  }
}

export default useStorage
