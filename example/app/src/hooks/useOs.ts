import { useEffect, useState } from 'react';
import { OS, OSResponse } from '../types';

/**
 * useOs - Hook to get the current OS of the userAgent
 *
 * @returns {OSResponse} os - The current os of the userAgent
 */
const useOs = (): OSResponse => {
  const [os, setOs] = useState<OS>(null);
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  useEffect(() => {
    if (macosPlatforms.indexOf(platform) !== -1) {
      setOs('Mac OS');
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      setOs('iOS');
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      setOs('Windows');
    } else if (/Android/.test(userAgent)) {
      setOs('Android');
    } else if (!os && /Linux/.test(platform)) {
      setOs('Linux');
    }
  }, [userAgent, platform, macosPlatforms, windowsPlatforms, iosPlatforms]);

  return {
    os,
  };
};

export default useOs;
