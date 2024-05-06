/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import AuthenticationContext from "./authContext";
import { useQuery } from "react-query";
import BLOG_ROUTES from "@root/constants/url";
import axiosClient from "@root/api/client";
import Cookies from "js-cookie";
import { CurrentUserResponse } from "@root/api/user";

type AuthProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    CurrentUserResponse | undefined
  >(undefined);
  const currentToken = Cookies.get("access_token");
  const { data: response, isFetching } = useQuery(
    "currentUser",
    () => {
      return axiosClient.get<CurrentUserResponse>(BLOG_ROUTES.currentUser);
    },
    { enabled: !!currentToken, refetchOnMount: "always" }
  );
  const values = {
    currentUser,
    setCurrentUser,
    isFetching,
  };

  useEffect(() => {
    if (response) setCurrentUser(response.data);
  }, [response]);

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthProvider;
