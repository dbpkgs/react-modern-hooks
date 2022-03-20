# useNetwork

Hook for getting the network status

## Usage

```jsx
import { useNetwork } from 'react-modern-hooks';

const App = () => {
  const { connection } = useNetwork();

  return <div>Network info: {connection.downlink} </div>;
};
```

## References

### Output Variables

`connection` - The connection response of the network
