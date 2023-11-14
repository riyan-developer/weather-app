import React from "react";
import { Box, Divider, Grid, Typography, styled } from "@mui/material";
import { colors } from "../theme/color";
import WindIcon from "../svgs/WindIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  marginBottom: "40px",
});

const StyledTypographyH2 = styled(Typography)({
  fontSize: "3rem",
  color: colors.lightText,
});

const StyledTypographySmall = styled(Typography)({
  fontSize: "0.8rem",
  color: colors.secondaryText,
});

const StyledDivider = styled(Divider)({
  backgroundColor: colors.secondaryText,
  marginBlock: "22px",
});

const StyledTypographyH5 = styled(Typography)({
  fontSize: "1.5rem",
  color: colors.lightText,
});

const StyledSpan = styled("span")({
  color: colors.secondaryText,
});

const WeatherDetail = ({ weatherData }) => {
  const timestamp = weatherData?.dt;

  const timezoneOffset = weatherData?.timezone;

  const utcDate = new Date(timestamp * 1000);

  const islamabadTime = new Date(utcDate.getTime() + timezoneOffset * 1000);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Karachi",
  };

  const formattedTime = islamabadTime
    .toLocaleString("en-US", options)
    .split(",");

  return (
    <Box marginY={"20px"}>
      <StyledImage
        src={`/assets/icons/${weatherData?.weather[0]?.icon}.png`}
        alt="asd"
      />
      <StyledTypographyH2 variant="h2" component="h2">
        {(weatherData?.main?.temp - 270).toFixed(2)} <sup>°C </sup>
      </StyledTypographyH2>
      <StyledTypographySmall variant="small" component="small">
        Feels like {(weatherData?.main?.feels_like - 270).toFixed(2)} °C
      </StyledTypographySmall>
      <Grid container alignItems="center" spacing={1} marginTop={"12px"}>
        <Grid item>
          <WindIcon />
        </Grid>
        <Grid item>
          <Typography variant="body1" color={colors.lightText}>
            {weatherData?.weather[0]?.description}
          </Typography>
        </Grid>
      </Grid>
      <StyledDivider />
      <StyledTypographyH5 variant="h5" component="h5">
        {formattedTime[0]} <StyledSpan>{formattedTime[2]}</StyledSpan>
      </StyledTypographyH5>
      <Grid container alignItems="center" spacing={1} marginTop={"12px"}>
        <Grid item>
          <LocationOnIcon sx={{ color: colors.lightText }} />
        </Grid>
        <Grid item>
          <Typography variant="body1" color={colors.lightText}>
            {weatherData?.name} ,{weatherData?.sys?.country}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherDetail;
