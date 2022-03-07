import { useEffect, useState } from 'react';
import { MutableObjectRef } from '../types';

/**
 * useFocus - Hook to autofocus input and/or textarea components
 *
 * @param {MutableObjectRef} ref - An input or textarea field reference/ref object
 * @param {boolean} autoFocus - Automatically focus the input or textarea field
 *
 * @return {boolean} focused - State if the referenced field was focused or not
 * @return {Function} setFocus - Callback function to be used to refocus a referenced field
 */
const useFocus = (ref: MutableObjectRef, autoFocus: boolean) => {
  const [inputRef] = useState<MutableObjectRef>(ref);
  const [state, setState] = useState<boolean>(autoFocus);

  const setFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setState(true);
    }
  };

  useEffect(() => {
    if (state) {
      setFocus();
    }
  }, [state]);

  return {
    focused: state,
    setFocus,
  };
};

export default useFocus;
