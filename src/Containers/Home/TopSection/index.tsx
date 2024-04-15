import { Box } from "@mui/material";
import MainButton from "@root/UI/atoms/MainButton";
import React from "react";
import { mainContainer } from "./topSectionStyles";

const TopSection: React.FC = () => {
  return (
    <Box sx={mainContainer}>
      <MainButton sx={{ textTransform: "none" }} variant="contained">
        Login
      </MainButton>
    </Box>
  );
};

export default TopSection;
