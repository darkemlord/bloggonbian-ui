import { AuthRequest } from "@root/api/user";
import BLOG_ROUTES, { AuthType } from "@root/constants/url";
import axios from "axios";
import { useMutation } from "react-query";

export type UseSignType = ReturnType<typeof useSign>;

export const useSign = (authType: AuthType) => {
  const loginRoute =
    authType === AuthType.LOGIN ? BLOG_ROUTES.login : BLOG_ROUTES.signUp;
  const mutation = useMutation((post: AuthRequest) => {
    return axios.post(loginRoute, post);
  });

  const onSubmit = () => {
    return;
  };
  return {
    mutation,
    onSubmit,
  };
};

export default useSign;
