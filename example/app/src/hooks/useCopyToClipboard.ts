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
      if (!navigator || !navigator?.clipboard) {
        setCopied(false);
        setCopiedText(null);
        setError(new Error('Unable to copy as clipboard was not found'));
        return false;
      }

      if (text.length) {
        setCopied(false);
        setCopiedText(null);
        setError(new Error('Unable to copy text of "undefined" to clipboard'));
        return false;
      }

      await navigator?.clipboard.writeText(text);
      setCopiedText(text);
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
