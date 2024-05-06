import axiosClient from "@root/api/client";
import Cookies from "js-cookie";
import { AuthRequest, AuthResponse } from "@root/api/user";
import BLOG_ROUTES, { AuthType } from "@root/constants/url";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ErrorType } from "@root/utils/error-utils";
import useAuth from "@hooks/useAuth";

export type UseSignType = ReturnType<typeof useSign>;

export const useSign = (authType: AuthType) => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();
  const method = useForm<AuthRequest>();
  const loginRoute =
    authType === AuthType.LOGIN ? BLOG_ROUTES.login : BLOG_ROUTES.signUp;
  const mutation = useMutation((post: AuthRequest) => {
    return axiosClient.post<AuthResponse>(loginRoute, post);
  });
  const {
    data: result,
    isSuccess,
    isError,
    error,
    isLoading,
    reset,
  } = mutation;
  const onSubmit = (formValues: AuthRequest) => {
    mutation.mutate(formValues);
  };

  useEffect(() => {
    if (isSuccess) {
      Cookies.set("access_token", result.data.token);
      Cookies.set("uid", result.data.email);
      setCurrentUser({ email: result.data.email });
      navigate(BLOG_ROUTES.user);
    }
    if (isError) {
      const errorWithMessage = error as ErrorType;
      toast.error(errorWithMessage?.response?.data?.error as string);
      reset();
    }
  }, [isSuccess, isError]);

  return {
    onSubmit,
    method,
    isLoading,
  };
};

export default useSign;
