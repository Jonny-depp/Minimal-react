import { Navigate, useRoutes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  UserProfilePage,
  ResetPasswordPage,
  NewPasswordPage,
  VerifyCodePage,
  MainLayout,
  CompactLayout,
  DashboardLayout,
  GeneralAppPage,
  UserAccountPage,
  UserCardsPage,
  UserListPage,
  UserCreatePage,
  UserEditPage,
  GeneralEcommercePage,
  GeneralAnalyticsPage,
  GeneralBankingPage,
  GeneralBookingPage,
  GeneralFilePage,
} from "./elements";
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

      children: [
        { path: "app", element: <GeneralAppPage /> },
        { path: "ecommerce", element: <GeneralEcommercePage /> },
        { path: "analytics", element: <GeneralAnalyticsPage /> },
        { path: "banking", element: <GeneralBankingPage /> },
        { path: "booking", element: <GeneralBookingPage /> },
        { path: "file", element: <GeneralFilePage /> },

        {
          path: "user",
          children: [
            {
              element: <Navigate to="/dashboard/user/profile" replace />,
              index: true,
            },
            { path: "profile", element: <UserProfilePage /> },
            { path: "account", element: <UserAccountPage /> },
            { path: "cards", element: <UserCardsPage /> },
            { path: "list", element: <UserListPage /> },
            { path: "new", element: <UserCreatePage /> },
            { path: ":name/edit", element: <UserEditPage /> },
          ],
        },
      ],
    },
  ]);
};
export default Router;
