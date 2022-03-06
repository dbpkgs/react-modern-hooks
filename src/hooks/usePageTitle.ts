import { useEffect } from 'react'

const usePageTitle = (title: string): void => {
  useEffect(() => {
    if (document && typeof document !== 'undefined') {
      document.title = title
    }
  }, [title])
}

export default usePageTitle
