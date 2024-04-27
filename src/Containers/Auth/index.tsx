import { Box } from "@mui/material";
import React from "react";
import { AuthType } from "@root/constants/url";

type Props = {
  authType: AuthType;
};

const AuthContainer: React.FC<Props> = ({ authType }) => {
  return <Box>{authType}</Box>;
};

export default AuthContainer;
