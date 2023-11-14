import React, { createContext, useState, useCallback } from "react";

export const Weather = createContext();

const WeatherContext = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [loading, setLoading] = useState(false);

  const memoizedSetWeatherData = useCallback((data) => {
    setWeatherData(data);
  }, []);

  const memoizedSetLat = useCallback((newLat) => {
    setLat(newLat);
  }, []);

  const memoizedSetLon = useCallback((newLon) => {
    setLon(newLon);
  }, []);

  const memoizedSetLoading = useCallback((isLoading) => {
    setLoading(isLoading);
  }, []);

  return (
    <Weather.Provider
      value={{
        weatherData,
        setWeatherData: memoizedSetWeatherData,
        lat,
        setLat: memoizedSetLat,
        lon,
        setLon: memoizedSetLon,
        setLoading: memoizedSetLoading,
        loading,
      }}
    >
      {children}
    </Weather.Provider>
  );
};

export default WeatherContext;
