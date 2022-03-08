import React from 'react';
import Network from './Network';
import Online from './Online';
import hooks from '../src/hooks';

const App = () => {
  const { data, error, processRequest } = hooks.useFetch('rrrr', {
    method: 'DELETE',
  });

  console.log('data', data);
  console.log('error', error);
  return (
    <div>
      <h1>Testing the hooks</h1>
      <button onClick={() => processRequest('https://jsonplaceholder')}>On Click</button>
      <Network />
      <Online />
    </div>
  );
};

export default App;
