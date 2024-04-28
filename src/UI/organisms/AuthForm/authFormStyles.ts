import { SxProps } from "@mui/material";
import theme from "@styles/theme";

export const formContainer: SxProps = {
  width: "400px",
  height: "450px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 4,
  backgroundColor: theme.opacityColors.greyLightOpacity,
  zIndex: 1,
  borderRadius: "10px",
};
export const formInputsContainer: SxProps = {
  width: "80%",
  display: "flex",
  flexDirection: "column",
  gap: 4,
};
