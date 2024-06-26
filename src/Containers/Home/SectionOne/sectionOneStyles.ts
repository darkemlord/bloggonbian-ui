import { SxProps } from "@mui/material";
import bannerBackground from "@assets/images/png/home_banner_background_2.png";
import theme from "../../../styles/theme";

export const bannerContainer: SxProps = {
  width: "100%",
  height: "100vh",
  display: "flex",
  background: `url(${bannerBackground})`,
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
  zIndex: 0,
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  animation: "rotate 360s linear infinite",
  [theme.breakpoints.down("sm")]: {
    scale: "2",
    objectFit: "contain",
  },
};

export const bannerTextContainer: SxProps = {
  position: "absolute",
  zIndex: 1,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const bannerTextBackground: SxProps = {
  padding: theme.spacing(2, 8),
  borderRadius: "10px",
  background: theme.opacityColors.greyOpacity,
};

export const BannerText: SxProps = {
  fontFamily: theme.fontStyles.marcellusSC,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: 35,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.up("xs")]: {
    fontSize: 15,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 50,
  },
};
