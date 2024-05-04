import { Box } from "@mui/material";
import React from "react";
import { AuthType } from "@root/constants/url";
import authMainContainer, {
  authImage,
  authImageContainer,
  formParentContainer,
} from "./authStyles";
import guitarBackground from "@assets/images/png/guitar_background.png";
import AuthForm from "@root/UI/organisms/AuthForm";
import useSign from "./useSign";

type Props = {
  authType: AuthType;
};

const AuthContainer: React.FC<Props> = ({ authType }) => {
  const { onSubmit } = useSign(authType);
  return (
    <Box sx={authMainContainer}>
      <Box sx={authImageContainer}>
        <Box sx={authImage} component="img" src={guitarBackground} />
        <Box sx={formParentContainer}>
          <AuthForm authType={authType} onSubmit={onSubmit} />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthContainer;
