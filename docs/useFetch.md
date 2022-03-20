# `useFetch`

React hook for fetching/refetching data from an API endpoint

## Usage

```jsx
import { useFetch } from 'react-modern-hooks';

const Demo = () => {
  const { data, loading, refetch, processRequest, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  return <div>Data Fetched</div>;
};
```

## Reference

### Input Variables

`url` - The API endpoint to fetch data from
`options` - optional parameters allowed to be passed when fetching data from an endpoint

### Output Variables

`data` - returned data from the api endpoint
`error` - Error response returned incase something goes wrong during data fetching
`loading` - Loading state returned when data is still loading from the API endpoint
`refetch` - Refetch function to refetch data
`processRequest` - A helper function to process requests made via POST or PATCH or DELETE methods
