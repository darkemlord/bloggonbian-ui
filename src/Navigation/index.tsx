import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "../Containers/Auth";
import Home from "../Containers/Home";
import BLOG_ROUTES, { AuthType } from "@root/constants/url";

const Navigation: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>Error Page</div>,
    },
    {
      path: BLOG_ROUTES.login,
      element: <Auth authType={AuthType.LOGIN} />,
    },
    {
      path: BLOG_ROUTES.signUp,
      element: <Auth authType={AuthType.SIGN_UP} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
