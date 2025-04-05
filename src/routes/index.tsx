import { useRoutes } from "react-router-dom";
import { HomePage, LoginPage } from "./elements";

const Router = () => {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        { path: "login-unprotected", element: <LoginPage /> },
      ],
    },

    {
      path: "/",
      element: <HomePage />,
    },
  ]);
};
export default Router;
