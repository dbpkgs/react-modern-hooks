import { useState } from 'react';

const useCopyToClipboad = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const copyText = async (text: string): Promise<boolean> => {
    try {
      if (!navigator || !navigator?.clipboard) {
        setCopied(false);
        setCopiedText(null);
        return false;
      }

      await navigator?.clipboard.writeText(text);
      setCopiedText(text);
      setCopied(true);

      return true;
    } catch (err) {
      setCopiedText(null);
      setCopied(false);
      return false;
    }
  };

  return {
    copied,
    copiedText,
    copyText,
  };
};

export default useCopyToClipboad;
