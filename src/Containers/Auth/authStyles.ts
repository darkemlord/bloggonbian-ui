import { SxProps } from "@mui/material";
import backgroundImage from "@assets/images/png/auth_background.png";
import theme from "@styles/theme";

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
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
};

export const authImage: SxProps = {
  position: "absolute",
  height: "100vh",
  width: "50%",
  zIndex: 1,
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    height: "75%",
  },
};

export const formParentContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  zIndex: 1,
};

export const formLogo: SxProps = {
  fontSize: 50,
  fontFamily: theme.fontStyles.lavishly,
  color: "black",
};

export default authMainContainer;
