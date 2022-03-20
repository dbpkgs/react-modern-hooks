# React Modern Hooks

A react modern hooks library for customized and reusable hooks.
These hooks in this library depends on react library under the hood.

_`Disclaimer: ` atleast react version 16.8 is required for the hooks_

## Installation

```bash
npm install react-modern-hooks

```

or

```bash
yarn add react-modern-hooks
```

## Usage

### useFetch

Hook for fetching/refetching data from an API endpoint

```jsx
import { useFetch } from 'react-modern-hooks';

const App = () => {
  const { data, loading, refetch, processRequest, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  return <div>Data Fetched</div>;
};
```

### useNetwork

Hook for getting the network status

```jsx
import { useNetwork } from 'react-modern-hooks';

const App = () => {
  const { connection } = useNetwork();

  return <div>Network info: {connection.downlink} </div>;
};
```

### useFullScreen

Hook to toggle a given HTMLElement to fullscreen and exit fullscreen

```jsx
import { useFullScreen } from 'react-modern-hooks';

const App = () => {
  const ref = useRef(null);
  const { fullScreen, open, close, toggle, error } = useFullScreen();

  return (
    <div>
      <div> Other content</div>
      <div ref={ref}>
        <button onClick={() => toggle()}>Toggle fuulscreen</button>
        <h1>Open fullscreen</h1>
      </div>
    </div>
  );
};
```
