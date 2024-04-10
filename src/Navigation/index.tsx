import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "../Containers/Auth";
import Home from "../Containers/Home";

const Navigation: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>Error Page</div>,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
