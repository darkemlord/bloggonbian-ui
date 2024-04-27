import { SxProps } from "@mui/material";
import theme from "@styles/theme";

export const mainContainer: SxProps = {
  width: "100%",
  height: 80,
  position: "absolute",
  display: "flex",
  justifyContent: "space-around",
  zIndex: 2,
  alignItems: "center",
};

export const buttonsContainer: SxProps = {
  display: "flex",
  gap: 2,
};

export const logoContainer: SxProps = {
  display: "flex",
  alignItems: "center",
};

export const logo: SxProps = {
  fontSize: 50,
  fontFamily: theme.fontStyles.lavishly,
  [theme.breakpoints.down("sm")]: {
    fontSize: 30,
  },
};
