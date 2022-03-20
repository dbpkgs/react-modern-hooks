import React from 'react';
//Testing both default and named imports
import hooks, { useNetwork, useOnline } from 'react-modern-hooks';

const App: React.FC<{}> = (): JSX.Element => {
  const { connection } = useNetwork();
  const { online } = useOnline();
  const { data, error, processRequest } = hooks.useFetch('rrrr', {});

  console.log('data', data);
  console.log('error', error);
  return (
    <div>
      <h1>Testing the hooks</h1>
      <button onClick={() => processRequest('https://jsonplaceholder')}>On Click</button>
      <div>
        <h2>useNetwork hook</h2>
        Network {connection.downlink}
      </div>

      <div>
        <h2>useOnline hook</h2>
        Online - {JSON.stringify(online)}
      </div>
    </div>
  );
};

export default App;
