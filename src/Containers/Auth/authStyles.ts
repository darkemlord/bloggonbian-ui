import { SxProps } from "@mui/material";
import backgroundImage from "@assets/images/png/auth_background.png";

export const authMainContainer: SxProps = {
  width: "100%",
  height: "100vh",
  background: `url(${backgroundImage})`,
  backgroundSize: "contain",
};

export const authImageContainer: SxProps = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

export const authImage: SxProps = {
  position: "absolute",
  height: "100vh",
  zIndex: 1,
};

export default authMainContainer;
