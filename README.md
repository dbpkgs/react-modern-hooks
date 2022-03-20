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

## Complete List of Available Hooks

- [`useFetch`](./docs/useFetch.md) - Hook for fetching/refetching data from an API endpoint
- [`useNetwork`](./docs/useNetwork.md) - Hook for getting the network status
- [`useFullScreen`](./docs/useFullScreen.md) - Hook to toggle a given HTMLElement to fullscreen and exit fullscreen
- `useGeolocation` - Hook to get a users current geographic location
- `useSelectedText` - Hook to get the highlighted text on a page
- `useCopyToClipboad` - Hook to copy text to clipboad
- `useStateCallback` - Hook that acts as a state callback i.e. functionality same as react class-based setState that provides a fallback with your current set state
- `useResize` - Hook to handle page resizing
- `useSearch` - Hook to allow delayed search and only search after a user releases all keys for set timeout
- `useImageDownload` - Hook that allows download of images from a given url
- `useFocus` - Hook to autofocus input and/or textarea components
- `useDebounce` - Hook to for delayed callback functions
- `useStorage` - Hook to allow use of localstorage
- `useOs` - Hook to get the current OS of the userAgent
- `usePageTitle` - Hook to update the page title of a document url
- `useOnline` - Hook to check if user is currently online or offline
- `useDeviceDetect` - Hook to detect the device a user is using and/or if either mobile or not

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
