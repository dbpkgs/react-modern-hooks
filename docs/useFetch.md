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

`url` - The API endpoint to fetch data from <br/>
`options` - optional parameters allowed to be passed when fetching data from an endpoint

### Output Variables

`data` - returned data from the api endpoint<br/>
`error` - Error response returned incase something goes wrong during data fetching<br/>
`loading` - Loading state returned when data is still loading from the API endpoint<br/>
`refetch` - Refetch function to refetch data<br/>
`processRequest` - A helper function to process requests made via POST or PATCH or DELETE methods
