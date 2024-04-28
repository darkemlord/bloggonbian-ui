import { Box } from "@mui/material";
import React from "react";
import { AuthType } from "@root/constants/url";
import authMainContainer, { authImage, authImageContainer } from "./authStyles";
import guitarBackground from "@assets/images/png/guitar_background.png";

type Props = {
  authType: AuthType;
};

const AuthContainer: React.FC<Props> = ({ authType }) => {
  return (
    <Box sx={authMainContainer}>
      <Box sx={authImageContainer}>
        <Box sx={authImage} component="img" src={guitarBackground} />
        <Box>{authType}</Box>
      </Box>
    </Box>
  );
};

export default AuthContainer;
