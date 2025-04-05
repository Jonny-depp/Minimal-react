import React from "react";

export const HomePage = React.lazy(() => import("../pages/Homepage"));
export const LoginPage = React.lazy(() => import("../pages/auth/LoginPage"));
export const RegisterPage = React.lazy(
  () => import("../pages/auth/RegisterPage")
);
