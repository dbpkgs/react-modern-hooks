import { useCallback, useEffect, useRef, useState } from 'react';
import { SelectedTextResponse } from '../types';

/**
 * useSelectedText - Hook to get the highlighted text on a page
 *
 * @returns {Error | null} error - Error message that occurred during selection;
 * @returns {string | Selection | null} selectedText - Text selected
 * @returns {()=>void} - getSelectedText - A callback function to get text on request
 *
 */
const useSelectedText = (): SelectedTextResponse => {
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const text = useRef<Selection | string | null>('');
  const err = useRef<Error | null>(null);

  const getSelectedText = useCallback(() => {
    try {
      if (window.getSelection) {
        text.current = window.getSelection();
        err.current = null;
      } else if (window.document.getSelection) {
        text.current = window.document.getSelection();
        err.current = null;
      } else {
        err.current = new Error('Your browser does not support text selection!');
      }

      setError(err.current);
      setSelectedText(text.current?.toString() ?? null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err);
      setSelectedText(null);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mouseup', getSelectedText);
    }
  }, [getSelectedText]);

  return {
    error,
    selectedText,
    getSelectedText,
  };
};

export default useSelectedText;
