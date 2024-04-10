import { Box } from "@mui/material";
import React from "react";
import {
  bannerContainer,
  bannerSectionImage,
  imageContainer,
} from "./homeStyles";
import homeBackground from "../../assets/images/png/banner-circle-image.png";

const HomeContainer: React.FC = () => {
  return (
    <Box sx={bannerContainer}>
      <Box sx={imageContainer}>
        <Box sx={bannerSectionImage} component="img" src={homeBackground}></Box>
      </Box>
    </Box>
  );
};

export default HomeContainer;
