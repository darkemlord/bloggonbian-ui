import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Auth from "./Containers/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Page</div>,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default router;
