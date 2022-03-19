import { useState, useEffect, useCallback } from 'react';
import { FetchResponse, FetchOptions } from '../types';
import { regexURL } from '../utils';

/**
 * useFetch - Hook for prefetching data from a API endpoint
 *
 * @param {string} url - The API endpoint to fetch data from
 * @param {FetchOptions} options - optional parameters allowed to be passed when fetching data from an endpoint
 *
 * @returns {T|null}  data - returned data from the api endpoint
 * @returns {unknown} error - Error response returned incase something goes wrong during data fetching
 * @returns {boolean} loading - Loading state returned when data is still loading from the API endpoint
 * @returns {Function} refetch - Refetch function to refetch data
 * @returns {Function} processRequest - A helper function to process requests made via POST or PATCH or DELETE methods
 *
 */
const useFetch = <T = unknown>(url: string, options?: FetchOptions): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const updateState = useCallback((_data: T | null, _error: unknown, _loading: boolean) => {
    setError(_error);
    setData(_data);
    setLoading(_loading);
  }, []);

  const handleFetch = useCallback(
    async (_url: string, _options?: FetchOptions): Promise<void> => {
      try {
        setLoading(true);

        const validURL = regexURL.test(_url);
        if (_url.length <= 0 || !validURL) {
          throw Error('Invalid url endpoint');
        }

        const response = await fetch(_url, _options);
        if (!response.ok) {
          throw Error(response.statusText);
        }

        const responseData: T = await response.json();
        updateState(responseData, null, false);
      } catch (err) {
        updateState(null, err, false);
      }
    },
    [updateState],
  );

  const refetch = () => {
    if (!options || options.method?.toUpperCase() === 'GET') {
      handleFetch(url, options);
    } else {
      updateState(null, 'Only GET methods allowed in with refetch', false);
    }
  };

  /**
   * @param {Function} processRequest - A function to process other network request
   */
  const processRequest = (_url: string, _options?: FetchOptions): void => {
    handleFetch(_url, _options);
  };

  useEffect(() => {
    if (!options || options.method?.toUpperCase() === 'GET') {
      handleFetch(url, options);
    }
  }, [url, options, handleFetch]);

  return {
    data,
    loading,
    error,
    refetch,
    processRequest,
  };
};

export default useFetch;
