import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Auth from "../Containers/Auth";
import Home from "../Containers/Home";
import BLOG_ROUTES, { AuthType } from "@root/constants/url";
import User from "@root/Containers/User";
import useAuth from "@hooks/useAuth";

const Navigation: React.FC = () => {
  const { currentUser, isFetching } = useAuth();
  const redirectToLogin = () => {
    if (!currentUser && !isFetching) {
      return redirect(BLOG_ROUTES.login);
    }
    return null;
  };

  const redirectToUser = () => {
    console.log(currentUser);
    if (currentUser) return redirect(BLOG_ROUTES.user);
    return null;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>Error Page</div>,
    },
    {
      path: BLOG_ROUTES.login,
      loader: redirectToUser,
      element: currentUser ? (
        <p>loading...</p>
      ) : (
        <Auth authType={AuthType.LOGIN} />
      ),
    },
    {
      path: BLOG_ROUTES.signUp,
      loader: redirectToUser,
      element: <Auth authType={AuthType.SIGN_UP} />,
    },
    {
      path: BLOG_ROUTES.user,
      loader: redirectToLogin,
      element: <User />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
