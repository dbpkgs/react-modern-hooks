import { useState, useEffect } from 'react';
import { GeoLocationFetchResponse, GeolocationResponse, Location } from '../types';
import useFetch from '../hooks/useFetch';

/**
 * useGeolocation - Hook to get a users current geographic location
 *
 * @returns {GeoLocationFetchResponse | null} location - Location object with all users details
 * @returns {number|null} latitude - Users latitude position
 * @returns {number|null} longitude - Users longitude position
 * @return {string|null} userIP - Users IP address
 * @returns {string|null} city - City the user is currently located
 * @returns {string|null} region - Region the user is currently located
 * @returns {string|null} country - Country the user is currently located
 * @returns {string|null} error - Error occured during geolocating a users
 * @returns {boolean} loading - Loading state when users location is still being fetched
 */
const useGeolocation = (): GeolocationResponse => {
  const [location, setLocation] = useState<Location | null>(null);
  const [userIP, setUserIP] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [longitude, setLongitude] = useState<number | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [country, setCountry] = useState<string>('');

  const { data, error, loading } = useFetch<GeoLocationFetchResponse>('https://ipapi.co/json');

  useEffect(() => {
    if (!loading && data) {
      const {
        ip: dIP,
        city: dCity,
        region: dRegion,
        longitude: dLongitude,
        latitude: dLatitude,
        country: dCountry,
        ...restData
      } = data;
      setLocation(restData ?? null);
      setUserIP(dIP ?? '');
      setCity(dCity ?? '');
      setRegion(dRegion ?? '');
      setLongitude(dLongitude ?? null);
      setLatitude(dLatitude ?? null);
      setCountry(dCountry ?? '');
    }
  }, [data, loading]);

  return {
    longitude,
    latitude,
    location,
    userIP,
    country,
    city,
    region,
    error,
    loading,
  };
};

export default useGeolocation;
