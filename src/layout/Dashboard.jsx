import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { colors } from "../theme/color";
import { Weather } from "../context/WeatherContext";

const Dashboard = ({ children }) => {
  const { loading, weatherData } = useContext(Weather);
  return (
    <Grid container spacing={1} style={{ width: "100vw" }}>
      <Grid
        item
        sm={12}
        md={3}
        lg={3}
        xl={3}
        bgcolor={colors.backgroundDark}
        style={{ padding: "50px 30px" }}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        sm={12}
        md={9}
        lg={9}
        xl={9}
        bgcolor={colors.secondaryDarkBg}
        style={{ height: "100vh" }}
      >
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
          <>{children}</>
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
