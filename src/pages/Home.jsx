import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { colors } from "../theme/color";
import WeatherItem from "../components/WeatherItem";
import { Weather } from "../context/WeatherContext";
import HighLightItem from "../components/HighlightItem";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { weatherData } = useContext(Weather);

  const [highLightData, setHighLightData] = useState([]);

  useEffect(() => {
    if (weatherData) {
      setHighLightData(() => {
        return [
          {
            title: "Humidity",
            icon: "humidity",
            number: weatherData?.main?.humidity,
            unit: "%",
          },
          {
            title: "Wind Speed",
            icon: "wind-night",
            number: weatherData?.wind?.speed,
            unit: "m/s",
          },
          {
            title: "Clouds",
            icon: "clouds",
            number: weatherData?.clouds?.all,
            unit: "%",
          },
          {
            title: "UV Index",
            icon: "uv",
            number: 0,
            unit: "",
          },
          {
            title: "Pressure",
            icon: "pressure",
            number: weatherData?.main?.pressure,
            unit: "hPa",
          },
        ];
      });
    }
  }, [weatherData]);

  return (
    <Box
      sx={{
        paddingY: "50px",
        paddingLeft: "60px",
        height: "100%",
        overflow: "scroll",
      }}
    >
      <Typography variant="h5" color={colors.lightText}>
        Today
      </Typography>

      <Grid container spacing={3}>
        {weatherData?.weather?.map((item, index) => (
          <Grid item xs={2} sm={2} md={3} lg={3} xl={3} key={item}>
            <WeatherItem
              index={index}
              icon={item.icon}
              main={item.main}
              description={item.main}
              id={item.id}
              temperature={weatherData.main.temp - 270}
              time={new Date(
                weatherData?.dt * 1000 + weatherData?.timezone * 1000
              )
                .toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  timeZone: "Asia/Karachi",
                })
                .split(",")}
            />
          </Grid>
        ))}
      </Grid>
      <br />

      <Typography variant="h5" color={colors.lightText}>
        Today Highlights
      </Typography>

      <Grid container spacing={3}>
        {highLightData?.map((item) => {
          return (
            <Grid item sm={2} md={4} lg={4} xl={4}>
              <HighLightItem
                width={"350px"}
                title={item.title}
                number={item.number}
                unit={item.unit}
                icon={item.icon}
              />
            </Grid>
          );
        })}
      </Grid>
      <br />

      <Typography variant="h5" color={colors.lightText}>
        This Week
      </Typography>

      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <Grid item sm={2} md={3} lg={3} xl={3} key={item}>
            {/* <WeatherItem index={-1} /> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
