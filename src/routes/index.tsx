import { useRoutes } from "react-router-dom";
import { Dashboard, HomePage, LoginPage, RegisterPage } from "./elements";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import NewPasswordPage from "../pages/auth/NewPasswordPage";
import VerifyCodePage from "../pages/auth/VerifyCodePage";
import { element } from "prop-types";
import MainLayout from "../layouts/main/MainLayout";
import CompactLayout from "../layouts/compact";

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
          element: <CompactLayout />,
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
      element: <MainLayout />,
      children: [{ element: <HomePage />, index: true }],
    },
    {
      path: "dashboard/app",
      element: <MainLayout />,
      children: [{ element: <Dashboard />, index: true }],
    },
  ]);
};
export default Router;
