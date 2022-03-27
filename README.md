# [React Modern Hooks](https://rmh.vercel.app)

React modern hooks is a library for customized and reusable hooks.
These hooks depend on react library under the hood.

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

## Documentation

You can find the complete React Modern Hooks documentation [on the website](https://rmh.vercel.app)

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

# Examples

We have several examples and complete guide [on the website](https://rmh.vercel.app). Here are a few to get you started:

# useFetch

Hook for fetching/refetching data from an API endpoint

#### Usage

```jsx
import { useFetch } from 'react-modern-hooks';

const Demo = () => {
  const { data, loading, refetch, processRequest, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (loading) return <p>Loading...</p>;

  if (error || !data) return <p>{error}</p>;

  const handleRequest = () => {
    processRequest('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
    });
  };

  return (
    <div>
      <p>Data Fetched</p>
      <button onClick={refetch}>Refetch</button>
      <button onClick={handleRequest}>Click to Process New Request</button>
    </div>
  );
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

A React Hook that gets the users network information and which provides information about the connection a device is using to communicate with the network and provides a means for scripts to be notified if the connection type changes

#### Usage

```jsx
import { useNetwork } from 'react-modern-hooks';

const Demo = () => {
  const { connection } = useNetwork();

  connection.onchange = (e) => {
    // Handle change of connection type here.
  };

  return (
    <div>
      <h1>Network Info</h1>
      <p>Downlink: {connection.downlink} </p>
      <p>Downlink Max: {connection.downlinkMax}</p>
      <p>Round trip time: {connection.rtt}</p>
      <p>Has user set a reduced data usage option on the user agent: {connection.saveData}</p>
      <p>Connection Type: {connection.type}</p>
    </div>
  );
};
```

##### References

###### Output Variables

`connection` - The connection response of the network

# useFullScreen

A React hook that enables a HTMLElement or component to toggle into a fullscreen and/or exit fullscreen. This hooks provides the open, close and toggle methods which can be used to switch the screen from open to closed or viceversa.

#### Usage

```jsx
import { useRef } from 'react';
import { useFullScreen } from 'react-modern-hooks';

const Demo = () => {
  const ref = useRef(null);
  const { fullScreen, close, open, toggle, error } = useFullScreen(ref);

  if (error) {
    console.log('Error: ', error);
  }

  return (
    <div>
      <div ref={ref} style={{ background: '#fff' }}>
        <h1> This is the div (one with ref) that will enter fullscreen mode</h1>
        {fullScreen ? <p>Only visible in fullscreen mode</p> : <p>Not in fullscreen mode</p>}

        <button onClick={() => open()}>Open FullScreen</button>
        <button onClick={() => close()}>Exit FullScreen</button>

        <button onClick={() => toggle()}>Toggle Open/Exit FullScreen</button>
      </div>
    </div>
  );
};
```

#### References

##### Input Variables

`ref` - A HTMLElement mutable ref object to toggle to fullscreen
`onExit` - An optional callback function to run when exiting fullscreen

##### Output Variables

`fullScreen` - A boolean value to show if fullscreen or not
`open` - A function to open the referenced component/element to fullscreen window
`close` - A function to close/exit the referenced component/element from fullscreen window
`toggle` - A function to both open and/or close/exit the referenced component/element to and from fullscreen window
`error` - An error message incase something doesn't go right on opening and/or closing fullscreen window

# useGeolocation

A react hook which gets a users/agent's current geographic location. It return both the city, ip, country and other location variables useful in determining a users position on the world map

#### Usage

```jsx
import { useGeolocation } from 'react-modern-hooks';

const Demo = () => {
  const {
    loading,
    error,
    userIP,
    city,
    country,
    latitude,
    longitude,
    region,
    location, //Object that comes with other properties on top
  } = useGeolocation();

  if (error) {
    console.log('Error: ', error);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>User IP Address: {userIP}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <p>Region: {region}</p>
      <p>Longitude: {longitude}</p>
      <p>Latitude: {latitude}</p>
      <p>Location Timezone: {location?.timezone}</p>
    </div>
  );
};
```

#### References

##### Output Variables

`location` - Location object with all other user details
`latitude` - Current latitude of a user/agent's position
`longitude` - Current longitude of a user/agent's position
`userIP` - Current IP address of a user/agent
`city` - City the user/agent is currently located in
`region` - Region the user/agent is currently located in
`country` - Country the user/agent is currently located in
`error` - Any error occurring during geolocating a user/agent
`loading` - A boolean variable indicating if a users location is still being fetched

# useCopyToClipboard

A React Hook that allows copying of text to clipboad. Providing the capability to copy text from one medium to another. The hook provides a copyText method which can be used to copy the text

#### Usage

```jsx
import { useCopyToClipboard } from 'react-modern-hooks';

const Demo = () => {
  const { copiedText, copyText, error, copied } = useCopyToClipboard();

  console.log('is text copied', copied);

  return (
    <div>
      {error ? <p>Error copying text: {error}</p> : null}

      <button onClick={() => copyText('Copy this text to clipboard')}>Copy Text to clipboard</button>
    </div>
  );
};
```

#### References

##### Output Variables

`error` - Error message that occured during copy
`copied` - Boolean state if the text was copied successfully
`copiedText` - The copied text
`copyText` - A function to copy the text
