import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { formContainer, formInputsContainer } from "./authFormStyles";
import { AuthType } from "@root/constants/url";
import MainButton from "@root/UI/atoms/MainButton";
import { formLogo } from "@root/Containers/Auth/authStyles";

type Props = {
  authType: AuthType;
};

const AuthForm: React.FC<Props> = ({ authType }) => {
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
        {authType === AuthType.LOGIN ? "Login" : "Sign Up"}{" "}
      </MainButton>
    </Box>
  );
};

export default AuthForm;
