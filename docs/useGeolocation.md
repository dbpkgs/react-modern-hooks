# useGeolocation

Hook to get a users current geographic location

## Usage

```jsx
import { useGeolocation } from 'react-modern-hooks';

const App = () => {
  const ref = useRef(null);
  const { longitude, latitude, location, userIP, country, city, region, error, loading } = useGeolocation();

  return <div>Current city: {city}</div>;
};
```

## References

### Output Variables

`location` - Location object with all users details <br/>
`latitude` - Users latitude position<br/>
`longitude` - Users longitude position<br/>
`userIP` - Users IP address<br/>
`city` - City the user is currently located<br/>
`region` - Region the user is currently located<br/>
`country` - Country the user is currently located<br/>
`error` - Error occured during geolocating a users<br/>
`loading` - Loading state when users location is still being fetched
