import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const User: React.FC = () => {
  return (
    <Box>
      User
      <Link to="/">home</Link>
    </Box>
  );
};

export default User;
