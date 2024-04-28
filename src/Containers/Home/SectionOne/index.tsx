import { Box, Typography } from "@mui/material";
import React from "react";
import {
  bannerContainer,
  imageContainer,
  bannerSectionImage,
  bannerTextContainer,
  bannerTextBackground,
  BannerText,
} from "./sectionOneStyles";
import homeBackground from "@assets/images/png/banner-circle-image.png";

const SectionOne: React.FC = () => {
  return (
    <Box sx={bannerContainer}>
      <Box sx={imageContainer}>
        <Box sx={bannerSectionImage} component="img" src={homeBackground} />
        <Box sx={bannerTextContainer}>
          <Box sx={bannerTextBackground}>
            <Typography sx={BannerText}>
              Exploring Horizons: Ideas, Innovation,
              <br />
              and Inspiration for the Modern World.
              <br /> Welcome to our space for discovery and <br />
              dialogue!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionOne;
