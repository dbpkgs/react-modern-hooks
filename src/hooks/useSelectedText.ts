import { useState } from 'react';
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
  const [selectedText, setSelectedText] = useState<Selection | string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  let text: Selection | string | null = '';
  let err: Error | null = null;

  const getSelectedText = () => {
    try {
      if (window.getSelection) {
        text = window.getSelection();
        err = null;
      } else if (window.document.getSelection) {
        text = window.document.getSelection();
        err = null;
      } else {
        err = new Error('Your browser does not support text selection!');
      }

      setError(err);
      setSelectedText(text);
    } catch (err: any) {
      setError(err);
      setSelectedText(null);
    }
  };

  return {
    error,
    selectedText,
    getSelectedText,
  };
};

export default useSelectedText;
