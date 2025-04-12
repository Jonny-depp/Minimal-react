import React from "react";
import { Suspense } from "react";
import LoadingScreen from "../components/loading-screen";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

export const MainLayout = Loadable(
  React.lazy(() => import("../layouts/main/MainLayout"))
);

export const CompactLayout = Loadable(
  React.lazy(() => import("../layouts/compact/CompactLayout"))
);

export const DashboardLayout = Loadable(
  React.lazy(() => import("../layouts/dashboard/DashboardLayout"))
);
export const HomePage = Loadable(React.lazy(() => import("../pages/Homepage")));
export const LoginPage = Loadable(
  React.lazy(() => import("../pages/auth/LoginPage"))
);
export const RegisterPage = Loadable(
  React.lazy(() => import("../pages/auth/RegisterPage"))
);
export const VerifyCodePage = Loadable(
  React.lazy(() => import("../pages/auth/VerifyCodePage"))
);
export const NewPasswordPage = Loadable(
  React.lazy(() => import("../pages/auth/NewPasswordPage"))
);
export const ResetPasswordPage = Loadable(
  React.lazy(() => import("../pages/auth/ResetPasswordPage"))
);

export const GeneralAppPage = Loadable(
  React.lazy(() => import("../pages/dashboard/GeneralAppPage"))
);

export const UserProfilePage = Loadable(
  React.lazy(() => import("../pages/dashboard/UserProfilePage"))
);
export const UserAccountPage = Loadable(
  React.lazy(() => import("../pages/dashboard/UserAccountPage"))
);

export const UserCardsPage = Loadable(
  React.lazy(() => import("../pages/dashboard/UserCardsPage"))
);

export const UserListPage = Loadable(
  React.lazy(() => import("../pages/dashboard/UserListPage"))
);

export const UserCreatePage = Loadable(
  React.lazy(() => import("../pages/dashboard/UserCreatePage"))
);

export const UserEditPage = Loadable(
  React.lazy(() => import("../pages/dashboard/UserEditPage"))
);
export const GeneralEcommercePage = Loadable(
  React.lazy(() => import("../pages/dashboard/GeneralEcommercePage"))
);
export const GeneralAnalyticsPage = Loadable(
  React.lazy(() => import("../pages/dashboard/GeneralAnalyticsPage"))
);
export const GeneralBankingPage = Loadable(
  React.lazy(() => import("../pages/dashboard/GeneralBankingPage"))
);
export const GeneralBookingPage = Loadable(
  React.lazy(() => import("../pages/dashboard/GeneralBookingPage"))
);
export const GeneralFilePage = Loadable(
  React.lazy(() => import("../pages/dashboard/GeneralFilePage"))
);
