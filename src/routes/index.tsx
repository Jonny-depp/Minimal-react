import { useRoutes } from "react-router-dom";
import { Dashboard, HomePage, LoginPage, RegisterPage } from "./elements";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import NewPasswordPage from "../pages/auth/NewPasswordPage";
import VerifyCodePage from "../pages/auth/VerifyCodePage";

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
        {
          children: [
            { path: "reset-password", element: <ResetPasswordPage /> },
            { path: "new-password", element: <NewPasswordPage /> },
            { path: "verify", element: <VerifyCodePage /> },
          ],
        },
        { path: "login-unprotected", element: <LoginPage /> },
        { path: "register-unprotected", element: <RegisterPage /> },
      ],
    },

    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "dashboard/app",
      element: <Dashboard />,
    },
  ]);
};
export default Router;
