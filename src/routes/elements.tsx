import React from "react";
import { Suspense } from "react";
import LoadingScreen from "../components/loading-screen";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

export const HomePage = Loadable(React.lazy(() => import("../pages/Homepage")));
export const LoginPage = Loadable(
  React.lazy(() => import("../pages/auth/LoginPage"))
);
export const RegisterPage = Loadable(
  React.lazy(() => import("../pages/auth/RegisterPage"))
);
