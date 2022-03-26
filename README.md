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

## Issues

Having issues setting up or using this hooks library, file a bug report [here](https://rmh.vercel.app/github/issues/new)

## Complete List of Available Hooks

- [`useFetch`](https://rmh.vercel.app/docs/usefetch) - Hook for fetching/refetching data from an API endpoint
- [`useNetwork`](https://rmh.vercel.app/docs/usenetwork) - Hook for getting the network status
- [`useFullScreen`](https://rmh.vercel.app/docs/usefullscreen) - Hook to toggle a given HTMLElement to fullscreen and exit fullscreen
- [`useGeolocation`](https://rmh.vercel.app/docs/usegeolocation) - Hook to get a users current geographic location
- [`useSelectedText`](https://rmh.vercel.app/docs/useselectedtext) - Hook to get the highlighted text on a page
- [`useCopyToClipboad`](https://rmh.vercel.app/docs/usecopytoclipboard) - Hook to copy text to clipboad
- [`useStateCallback`](https://rmh.vercel.app/docs/usestatecallback) - Hook that acts as a state callback i.e. functionality same as react class-based setState that provides a fallback with your current set state
- [`useResize`](https://rmh.vercel.app/docs/useresize) - Hook to handle page resizing
- [`useSearch`](https://rmh.vercel.app/docs/usesearch) - Hook to allow delayed search and only search after a user releases all keys for set timeout
- [`useImageDownload`](https://rmh.vercel.app/docs/useimagedownload) - Hook that allows download of images from a given url
- [`useFocus`](https://rmh.vercel.app/docs/usefocus) - Hook to autofocus input and/or textarea components
- [`useDebounce`](https://rmh.vercel.app/docs/usedebounce) - Hook to for delayed callback functions
- [`useStorage`](https://rmh.vercel.app/docs/usestorage) - Hook to allow use of localstorage
- [`useOs`](https://rmh.vercel.app/docs/useos) - Hook to get the current OS of the userAgent
- [`usePageTitle`](https://rmh.vercel.app/docs/usepagetitle) - Hook to update the page title of a document url
- [`useOnline`](https://rmh.vercel.app/docs/useonline) - Hook to check if user is currently online or offline
- [`useDeviceDetect`](https://rmh.vercel.app/docs/usedevicedetect) - Hook to detect the device a user is using and/or if either mobile or not

# useFetch

Hook for fetching/refetching data from an API endpoint

#### Usage

```jsx
import { useFetch } from 'react-modern-hooks';

const App = () => {
  const { data, loading, refetch, processRequest, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  return <div>Data Fetched</div>;
};
```

#### Reference

##### Input Variables

`url` - The API endpoint to fetch data from <br/>
`options` - optional parameters allowed to be passed when fetching data from an endpoint

##### Output Variables

`data` - returned data from the api endpoint<br/>
`error` - Error response returned incase something goes wrong during data fetching<br/>
`loading` - Loading state returned when data is still loading from the API endpoint<br/>
`refetch` - Refetch function to refetch data<br/>
`processRequest` - A helper function to process requests made via POST or PATCH or DELETE methods

# useNetwork

Hook for getting the network status

```jsx
import { useNetwork } from 'react-modern-hooks';

const App = () => {
  const { connection } = useNetwork();

  return <div>Network info: {connection.downlink} </div>;
};
```

# useFullScreen

Hook to toggle a given HTMLElement to fullscreen and exit fullscreen

```jsx
import { useFullScreen } from 'react-modern-hooks';

const App = () => {
  const ref = useRef(null);
  const { fullScreen, open, close, toggle, error } = useFullScreen(ref);

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

# useGeolocation

Hook to get a users current geographic location

```jsx
import { useGeolocation } from 'react-modern-hooks';

const App = () => {
  const ref = useRef(null);
  const { longitude, latitude, location, userIP, country, city, region, error, loading } = useGeolocation();

  return <div>Current city: {city}</div>;
};
```
