import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../theme/color";
import WeatherDetail from "../components/WeatherDetail";
import _debounce from "lodash/debounce";
import {
  getTheLatAndLon,
  getTheWeatherData,
} from "../services/weatherServices";
import { Weather } from "../context/WeatherContext";

const Sidebar = () => {
  const [placeName, setPlaceName] = useState("");

  const { setWeatherData, setLoading, loading, weatherData } =
    useContext(Weather);

  const inputFieldStyle = {
    backgroundColor: "#232B39",
    borderRadius: "10px",
    "& input": { color: colors.secondaryText, paddingY: "10px" },
    width: "100%",
  };

  const fetchWeatherData = async () => {
    setLoading(true);
    const resp = await getTheLatAndLon(placeName);
    if (resp.status === 200 && resp.data.length > 0) {
      const data = resp.data;
      const lat = data[0].lat;
      const lon = data[0].lon;

      const { data: weatherData } = await getTheWeatherData(lat, lon);
      setLoading(false);
      setWeatherData(weatherData);
    } else {
      setLoading(false);
      setWeatherData(null);
    }
  };

  const debouncedFetchWeatherData = _debounce(fetchWeatherData, 500);

  useEffect(() => {
    if (placeName) {
      debouncedFetchWeatherData();
    } else {
      setWeatherData(null);
    }
    return () => debouncedFetchWeatherData.cancel();
  }, [placeName]);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          id="input-with-sx"
          placeholder="Search pages"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: colors.secondaryText }} />
              </InputAdornment>
            ),
          }}
          sx={inputFieldStyle}
          onChange={(e) => setPlaceName(e.target.value)}
        />
      </Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : weatherData !== null ? (
        <WeatherDetail weatherData={weatherData} />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Sidebar;
