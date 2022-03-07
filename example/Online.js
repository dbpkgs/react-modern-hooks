import React from 'react';
import { useOnline } from '../src/hooks';

const Online = () => {
  const { online } = useOnline();

  return (
    <div>
      <h2>useOnline hook</h2>
      Online - {JSON.stringify(online)}
    </div>
  );
};

export default Online;
