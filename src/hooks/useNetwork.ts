import { useEffect, useState } from 'react';
import { NavigatorInformation, NetworkResponse } from '../types';

/**
 * useNetwork - Hook for getting the network status
 *
 * @returns {NetworkResponse} connection - The connection response of the network
 */
const useNetwork = (): NetworkResponse => {
  const navigate: NavigatorInformation = navigator;
  const networkConnection = navigate.connection || navigate.mozConnection || navigate.webkitConnection;
  const [connection, setConnection] = useState<NetworkInformation>(networkConnection);

  const updateConnection = () => {
    setConnection(networkConnection);
  };

  useEffect(() => {
    connection.addEventListener('change', updateConnection);

    return () => connection.removeEventListener('change', updateConnection);
  }, [connection]);

  return {
    connection,
  };
};

export default useNetwork;
