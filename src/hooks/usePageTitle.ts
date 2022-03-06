import { useEffect } from 'react';

/**
 * usePageTitle - Hook to update the page title of a document url
 *
 * @param {string} title - The title to be set as new document title on the page
 */
const usePageTitle = (title: string): void => {
  useEffect(() => {
    if (document && typeof document !== 'undefined') {
      document.title = title;
    }
  }, [title]);
};

export default usePageTitle;
