import { Box } from "@mui/material";
import React from "react";
import SectionOne from "./SectionOne";
import TopSection from "./TopSection";

const HomeContainer: React.FC = () => {
  return (
    <Box>
      <TopSection />
      <SectionOne />
    </Box>
  );
};

export default HomeContainer;
