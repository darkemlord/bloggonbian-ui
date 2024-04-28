import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { formContainer, formInputsContainer } from "./authFormStyles";
import BLOG_ROUTES, { AuthType } from "@root/constants/url";
import MainButton from "@root/UI/atoms/MainButton";
import { formLogo } from "@root/Containers/Auth/authStyles";
import { Link } from "react-router-dom";
import theme from "@styles/theme";

type Props = {
  authType: AuthType;
};

const AuthForm: React.FC<Props> = ({ authType }) => {
  const isLoginForm = authType === AuthType.LOGIN;
  return (
    <Box component="form" sx={formContainer}>
      <Typography sx={formLogo}>Bloggonbian</Typography>
      <Box sx={formInputsContainer}>
        <TextField id="filled-basic" label="Email" variant="filled" fullWidth />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          fullWidth
        />
      </Box>
      <MainButton sx={{ textTransform: "none" }} variant="contained">
        {isLoginForm ? "Login" : "Sign Up"}
      </MainButton>
      <Link
        style={{ color: theme.customColors.blueDark }}
        to={isLoginForm ? BLOG_ROUTES.signUp : BLOG_ROUTES.login}
      >
        {isLoginForm
          ? "Don't have an account? Sign Up"
          : "Already registered? Sign In"}
      </Link>
    </Box>
  );
};

export default AuthForm;
