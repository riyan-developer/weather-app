import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { colors } from "../theme/color";

const WeatherItem = ({
  width,
  index,
  icon,
  main,
  description,
  id,
  temperature,
  time,
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: width,
        overflow: "auto",
        borderRadius: "20px",
        marginTop: "10px",
        backgroundColor: colors.backgroundDark,
      }}
      flexDirection={index == 0 ? "row" : "row-reverse"}
    >
      <Grid
        item
        xs={2}
        sm={2}
        md={2}
        lg={2}
        xl={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"15px"}
      >
        {index == 0 && (
          <ArrowBackIosIcon sx={{ color: colors.secondaryText }} />
        )}
        {index == 3 && (
          <ArrowForwardIosIcon sx={{ color: colors.secondaryText }} />
        )}
      </Grid>
      <Grid
        item
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xl={8}
        textAlign={"center"}
        marginBottom={"10px"}
      >
        <Box sx={{ marginTop: "-5px", marginBottom: "20px" }}>
          <Typography
            variant="small"
            component="small"
            color={colors.lightText}
          >
            {time[0]},{" "}
            <span style={{ color: colors.secondaryText }}> {time[2]} </span>
          </Typography>
        </Box>
        <img
          src={`/assets/icons/${icon}.png`}
          alt=""
          style={{ width: "70%" }}
        />
        <br />
        <Typography
          variant="small"
          component="small"
          color={colors.secondaryText}
          lineHeight={2}
        >
          {main}
        </Typography>
        <br />
        <Typography variant="small" component="small" color={colors.lightText}>
          {temperature.toFixed(2)}
          <sup>o</sup>
        </Typography>
      </Grid>
    </Grid>
  );
};

WeatherItem.defaultProps = {
  width: "250px",
};

export default WeatherItem;
