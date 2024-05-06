import AuthenticationContext from "@root/context/authContext";
import { useContext } from "react";

const useAuth = () => {
  return useContext(AuthenticationContext);
};

export default useAuth;
