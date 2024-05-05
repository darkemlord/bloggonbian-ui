import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import {
  formContainer,
  formInputsContainer,
  linksContainer,
} from "./authFormStyles";
import BLOG_ROUTES, { AuthType } from "@root/constants/url";
import MainButton from "@root/UI/atoms/MainButton";
import { formLogo } from "@root/Containers/Auth/authStyles";
import { Link } from "react-router-dom";
import theme from "@styles/theme";
import { UseFormReturn } from "react-hook-form";
import { AuthRequest } from "@root/api/user";

type Props = {
  authType: AuthType;
  onSubmit: (formValues: AuthRequest) => void;
  method: UseFormReturn<AuthRequest>;
};

const AuthForm: React.FC<Props> = ({ authType, method, onSubmit }) => {
  const isLoginForm = authType === AuthType.LOGIN;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = method;
  return (
    <Box component="form" sx={formContainer}>
      <Typography sx={formLogo}>Bloggonbian</Typography>
      <Box sx={formInputsContainer}>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email", { required: "Email is required" })}
        />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          fullWidth
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", { required: "Password is required" })}
        />
      </Box>
      <MainButton
        sx={{ textTransform: "none" }}
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        {isLoginForm ? "Login" : "Sign Up"}
      </MainButton>
      <Box sx={linksContainer}>
        <Link
          style={{ color: theme.customColors.blueDark }}
          to={isLoginForm ? BLOG_ROUTES.signUp : BLOG_ROUTES.login}
        >
          {isLoginForm
            ? "Don't have an account? Sign Up"
            : "Already registered? Sign In"}
        </Link>
        <Link style={{ color: theme.customColors.blueDark }} to="/">
          Back to home
        </Link>
      </Box>
    </Box>
  );
};

export default AuthForm;
