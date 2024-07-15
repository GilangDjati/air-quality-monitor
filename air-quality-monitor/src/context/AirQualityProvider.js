import React, { createContext, useState, useEffect } from 'react';
import { fetchAirQualityData } from '../api/airQuality';

export const AirQualityContext = createContext();

export const AirQualityProvider = ({ children }) => {
  const [data, setData] = useState({ airQuality: null, location: null });

  useEffect(() => {
    const getData = async (latitude, longitude) => {
      const fetchedData = await fetchAirQualityData(latitude, longitude);
      setData(fetchedData);
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            getData(latitude, longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  return (
    <AirQualityContext.Provider value={data}>
      {children}
    </AirQualityContext.Provider>
  );
};
