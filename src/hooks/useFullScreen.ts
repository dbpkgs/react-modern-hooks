import { useState, useEffect } from 'react';
import { Exit, FullscreenResponse, MutableHTMLObjectRef } from '../types';
import { isFullScreenElement } from '../utils';

/**
 *
 * useFullScreen - Hook to toggle a given HTMLElement to fullscreen and exit fullscreen
 *
 * @param {MutableHTMLObjectRef} ref - A HTMLElement ref object to toggle to fullscreen
 * @param {Exit} onExit - A callback function to run when exiting fullscreen
 *
 * @returns {boolean} fullScreen - A boolean value to show if fullscreen or not
 * @returns {Function} open - A function to open fullscreen window
 * @returns {Function} close - A function to close/exit fullscreen window
 * @returns {Function} toggle - A function to toggle from open fullscreen and close/exit fullscreen
 * @returns {string|null} error - An error message incase something doesn't go right on opening/closing fullscreen
 *
 */
const useFullScreen = (ref: MutableHTMLObjectRef, onExit?: Exit): FullscreenResponse => {
  const initialState: boolean = ref.current ? isFullScreenElement(ref.current) : false;
  const [fullScreen, setFullScreen] = useState<boolean>(initialState);
  const [error, setError] = useState<string | null>(null);

  // access various open fullscreen methods
  const openFullScreen = () => {
    if (ref.current) {
      setError(null);
      const el = ref.current || document.documentElement;

      if (el.requestFullscreen) return el.requestFullscreen();
      if (el.mozRequestFullScreen) return el.mozRequestFullScreen();
      if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
      if (el.msRequestFullscreen) return el.msRequestFullscreen();
    } else {
      setError("HTML Ref element cannot be 'null'");
    }
  };

  // access various exit fullscreen methods
  const closeFullScreen = () => {
    onExit?.();
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
  };

  useEffect(() => {
    if (!ref.current) {
      setError('Full screen no supported');
    } else {
      setError(null);
    }

    const handleChange = () => {
      setFullScreen(ref.current ? isFullScreenElement(ref.current) : false);
    };

    document.addEventListener('webkitfullscreenchange', handleChange, false);
    document.addEventListener('mozfullscreenchange', handleChange, false);
    document.addEventListener('msfullscreenchange', handleChange, false);
    document.addEventListener('MSFullscreenChange', handleChange, false); // IE11
    document.addEventListener('fullscreenchange', handleChange, false);

    return () => {
      document.removeEventListener('webkitfullscreenchange', handleChange);
      document.removeEventListener('mozfullscreenchange', handleChange);
      document.removeEventListener('msfullscreenchange', handleChange);
      document.removeEventListener('MSFullscreenChange', handleChange);
      document.removeEventListener('fullscreenchange', handleChange);
    };
  }, [ref]);

  return {
    fullScreen,
    open: openFullScreen,
    close: closeFullScreen,
    toggle: fullScreen ? closeFullScreen : openFullScreen,
    error,
  };
};

export default useFullScreen;
