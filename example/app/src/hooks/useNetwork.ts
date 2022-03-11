import { useEffect, useState } from 'react';
import { INetworkInformation, NavigatorInformation, NetworkResponse } from '../types';

/**
 * useNetwork - Hook for getting the network status
 *
 * @returns {NetworkResponse} connection - The connection response of the network
 */
const useNetwork = (): NetworkResponse => {
  const navigate: NavigatorInformation = navigator;
  //   @ts-expect-error ts-migrate(2739): FIXME: Type 'NetworkInformation' is missing the following properties from type 'INetworkInformation': downlink, effectiveType, onchange, rtt, saveData
  const networkConnection: INetworkInformation =
    navigate.connection || navigate.mozConnection || navigate.webkitConnection;
  const [connection, setConnection] = useState<INetworkInformation>(networkConnection);

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
