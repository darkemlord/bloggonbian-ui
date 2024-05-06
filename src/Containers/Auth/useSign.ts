import axiosClient from "@root/api/client";
import Cookies from "js-cookie";
import { AuthRequest, AuthResponse } from "@root/api/user";
import BLOG_ROUTES, { AuthType } from "@root/constants/url";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export type UseSignType = ReturnType<typeof useSign>;

export const useSign = (authType: AuthType) => {
  const navigate = useNavigate();
  const method = useForm<AuthRequest>();
  const loginRoute =
    authType === AuthType.LOGIN ? BLOG_ROUTES.login : BLOG_ROUTES.signUp;
  const mutation = useMutation((post: AuthRequest) => {
    return axiosClient.post<AuthResponse>(loginRoute, post);
  });

  const { data: result, isSuccess } = mutation;
  const onSubmit = (formValues: AuthRequest) => {
    mutation.mutate(formValues);
  };

  useEffect(() => {
    if (isSuccess) {
      Cookies.set("access_token", result.data.token);
      Cookies.set("uid", result.data.email);
      navigate(BLOG_ROUTES.user);
    }
  }, [isSuccess, result, navigate]);

  return {
    mutation,
    onSubmit,
    method,
  };
};

export default useSign;
