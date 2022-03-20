import { useState } from 'react';

/**
 * useCopyToClipboard - Hook to copy text to clipboad
 */
const useCopyToClipboad = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | Error | null>(null);

  const copyText = async (text: string): Promise<boolean> => {
    try {
      const div = document.createElement('div');
      div.innerHTML = text;
      const textContent = div.textContent || div.innerHTML || div.innerText || '';

      if (!navigator || !navigator?.clipboard) {
        setCopied(false);
        setCopiedText(null);
        setError(new Error('Unable to copy as clipboard was not found'));
        return false;
      }

      if (textContent.length) {
        setCopied(false);
        setCopiedText(null);
        setError(new Error('Unable to copy text of "undefined" to clipboard'));
        return false;
      }

      await navigator?.clipboard.writeText(textContent);
      setCopiedText(textContent);
      setCopied(true);
      setError(null);

      return true;
    } catch (err: any) {
      setCopiedText(null);
      setCopied(false);
      setError(err);
      return false;
    }
  };

  return {
    error,
    copied,
    copiedText,
    copyText,
  };
};

export default useCopyToClipboad;
