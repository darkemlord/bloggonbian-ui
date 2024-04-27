import { Box, Typography } from "@mui/material";
import MainButton from "@root/UI/atoms/MainButton";
import React from "react";
import {
  buttonsContainer,
  logo,
  logoContainer,
  mainContainer,
} from "./topSectionStyles";
import { useNavigate } from "react-router-dom";
import BLOG_ROUTES, { AuthType } from "@root/constants/url";

const TopSection: React.FC = () => {
  const navigate = useNavigate();

  const goToAuthPage = (authType: AuthType) => {
    const isSignUp =
      authType === AuthType.SIGN_UP ? BLOG_ROUTES.signUp : BLOG_ROUTES.login;
    navigate(isSignUp);
  };
  return (
    <Box sx={mainContainer}>
      <Box sx={logoContainer}>
        <Typography sx={logo}>Bloggonbian</Typography>
      </Box>
      <Box sx={buttonsContainer}>
        <MainButton
          sx={{ textTransform: "none" }}
          variant="outlined"
          onClick={() => goToAuthPage(AuthType.SIGN_UP)}
        >
          Register
        </MainButton>
        <MainButton
          sx={{ textTransform: "none" }}
          variant="contained"
          onClick={() => goToAuthPage(AuthType.LOGIN)}
        >
          Login
        </MainButton>
      </Box>
    </Box>
  );
};

export default TopSection;
