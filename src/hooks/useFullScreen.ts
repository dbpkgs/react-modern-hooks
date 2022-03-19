import { useState, useEffect } from 'react';
import { Exit, MutableHTMLObjectRef } from 'types';
import { isFullScreenElement } from 'utils';

const useFullScreen = (ref: MutableHTMLObjectRef, onExit?: Exit) => {
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
