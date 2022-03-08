import { useEffect, useState } from 'react';
import { DeviceDetectResponse } from '../types';

/**
 * useDeviceDetect - Hook to detect the device a user is using and/or if either mobile or not
 *
 * @return {boolean} isMobile - Boolean resulting stating if the device is a mobile or not
 * @return {string} device - Name of the device being used
 */
const useDeviceDetect = (): DeviceDetectResponse => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [device, setDevice] = useState<string>('');

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
    setDevice(userAgent);
    setIsMobile(mobile);
  }, []);

  return {
    isMobile,
    device,
  };
};

export default useDeviceDetect;
