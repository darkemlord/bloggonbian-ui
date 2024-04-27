import { Box, Typography } from "@mui/material";
import MainButton from "@root/UI/atoms/MainButton";
import React from "react";
import {
  buttonsContainer,
  logo,
  logoContainer,
  mainContainer,
} from "./topSectionStyles";

const TopSection: React.FC = () => {
  return (
    <Box sx={mainContainer}>
      <Box sx={logoContainer}>
        <Typography sx={logo}>Bloggonbian</Typography>
      </Box>
      <Box sx={buttonsContainer}>
        <MainButton sx={{ textTransform: "none" }} variant="outlined">
          Register
        </MainButton>
        <MainButton sx={{ textTransform: "none" }} variant="contained">
          Login
        </MainButton>
      </Box>
    </Box>
  );
};

export default TopSection;
