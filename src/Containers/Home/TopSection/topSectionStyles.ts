import { SxProps } from "@mui/material";
import theme from "@styles/theme";

export const mainContainer: SxProps = {
  width: "100%",
  height: 80,
  position: "absolute",
  display: "flex",
  justifyContent: "space-between",
  zIndex: 2,
  alignItems: "center",
};

export const buttonsContainer: SxProps = {
  display: "flex",
  gap: 1,
};

export const logoContainer: SxProps = {
  display: "flex",
  alignItems: "center",
};

export const logo: SxProps = {
  fontSize: 50,
  fontFamily: theme.fontStyles.lavishly,
};
