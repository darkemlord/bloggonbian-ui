import { CurrentUserResponse } from "@root/api/user";
import { createContext } from "react";

type AuthenticationContextValues = {
  currentUser?: CurrentUserResponse;
  isFetching: boolean;
  setCurrentUser: React.Dispatch<
    React.SetStateAction<CurrentUserResponse | undefined>
  >;
};

const AuthenticationContext = createContext<AuthenticationContextValues>({
  isFetching: false,
  setCurrentUser: () => undefined,
});

export default AuthenticationContext;
