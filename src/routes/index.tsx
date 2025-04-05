import { useRoutes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./elements";

const Router = () => {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        { path: "login-unprotected", element: <LoginPage /> },
        { path: "register-unprotected", element: <RegisterPage /> },
      ],
    },

    {
      path: "/",
      element: <HomePage />,
    },
  ]);
};
export default Router;
