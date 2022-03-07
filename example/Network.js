import React from 'react';
import { useNetwork } from '../src/hooks';

const Network = () => {
  const { connection } = useNetwork();

  return (
    <div>
      <h2>useNetwork hook</h2>
      Network {connection.downlink}
    </div>
  );
};

export default Network;
