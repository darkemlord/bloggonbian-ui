import { SxProps } from "@mui/material";

export const bannerContainer: SxProps = {
  width: "100%",
  height: "100vh",
  display: "flex",
  background: "#C4C4C4",
  justifyContent: "center",
  alignItems: "center",
};

export const imageContainer: SxProps = {
  position: "relative",
  height: "100%",
  width: "100%",
  overflow: "hidden",
};

export const bannerSectionImage: SxProps = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  animation: "rotate 180s linear infinite",
};
