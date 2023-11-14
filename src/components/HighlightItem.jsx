import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { colors } from "../theme/color";

const HighLightItem = ({ width, title, icon, number, unit }) => {
  return (
    <Box
      sx={{
        width: width,
        paddingY: "20px",
        overflow: "auto",
        borderRadius: "20px",
        marginTop: "10px",
        backgroundColor: colors.backgroundDark,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "13rem",
      }}
    >
      <Box sx={{ marginTop: "-5px", marginBottom: "20px" }}>
        <Typography variant="small" component="small" color={colors.lightText}>
          {title}
        </Typography>
      </Box>
      <img src={`/assets/icons/${icon}.png`} alt="" style={{ width: "7rem" }} />
      <br />
      <Typography
        variant="small"
        component="small"
        color={colors.lightText}
        fontSize={"1.5rem"}
        style={{ marginTop: "10px" }}
      >
        {number} <small style={{ color: colors.secondaryText }}>{unit}</small>
      </Typography>
    </Box>
  );
};

HighLightItem.defaultProps = {
  //   width: "350px",
};

export default HighLightItem;
