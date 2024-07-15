import { useState, useEffect } from 'react';
import { fetchAirQualityData } from '../api/airQuality';

const useAirQuality = (latitude, longitude) => {
  const [airQuality, setAirQuality] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAirQualityData(latitude, longitude);
        setAirQuality(data);
      } catch (error) {
        setError('Failed to fetch air quality data. Please try again later.');
      }
    };

    if (latitude && longitude) {
      getData();
    } else {
      setError('Latitude and longitude are required');
    }
  }, [latitude, longitude]);

  return { airQuality, error };
};

export default useAirQuality;
