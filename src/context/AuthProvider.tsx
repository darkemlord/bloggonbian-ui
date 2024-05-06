/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from "react";
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
  const { data, isFetching } = useQuery<CurrentUserResponse>(
    "currentUser",
    () => {
      return axiosClient.get(BLOG_ROUTES.currentUser);
    },
    { enabled: !!currentToken }
  );
  const values = useMemo(() => {
    if (data) setCurrentUser(data);
    return {
      currentUser,
      setCurrentUser,
      isFetching,
    };
  }, [data, currentUser]);

  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthProvider;
