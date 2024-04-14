import { Box, Typography } from "@mui/material";
import React from "react";
import {
  BannerText,
  BannerTextContainer,
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
        <Box sx={BannerTextContainer}>
          <Typography sx={BannerText}>
            Exploring Horizons: Ideas, Innovation, and Inspiration for the
            Modern World. Welcome to our space for discovery and dialogue!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeContainer;
