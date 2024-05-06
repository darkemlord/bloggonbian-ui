import useAuth from "@hooks/useAuth";
import { Box } from "@mui/material";
import MainButton from "@root/UI/atoms/MainButton";
import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const User: React.FC = () => {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box>User</Box>
      <Link to="/">home</Link>
      <MainButton
        variant="contained"
        onClick={() => {
          Cookies.remove("access_token");
          setCurrentUser(undefined);
          navigate("/");
        }}
      >
        Logout
      </MainButton>
    </Box>
  );
};

export default User;
