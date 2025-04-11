import { useRoutes } from "react-router-dom";
import { Dashboard, HomePage, LoginPage, RegisterPage } from "./elements";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import NewPasswordPage from "../pages/auth/NewPasswordPage";
import VerifyCodePage from "../pages/auth/VerifyCodePage";
import MainLayout from "../layouts/main/MainLayout";
import CompactLayout from "../layouts/compact";
import DashboardLayout from "../layouts/dashboard";

import GeneralAppPage from "../pages/dashboard/GeneralAppPage";
import { useAuthContext } from "../auth/useAuthContext";

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
      path: "dashboard",
      element: <DashboardLayout />,
      children: [{ path: "app", element: <GeneralAppPage /> }],
    },
  ]);
};
export default Router;
