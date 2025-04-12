import { useState } from "react";
import { useSettingsContext } from "../../components/settings";
import { Box, Container, Tab, Tabs } from "@mui/material";
import { PATH_DASHBOARD } from "../../routes/paths";
import CustomBreadcrumbs from "../../components/custom-breadcrumbs";
import Iconify from "../../components/iconify";
import {
  _userAbout,
  _userAddressBook,
  _userInvoices,
  _userPayment,
} from "../../_mock/arrays";
import {
  AccountBilling,
  AccountGeneral,
} from "../../sections/dashboard/user/account";
import AccountNotifications from "../../sections/dashboard/user/account/AccountNotifications";
import AccountSocialLinks from "../../sections/dashboard/user/account/AccountSocialLinks";
import AccountChangePassword from "../../sections/dashboard/user/account/AccountChangePassword";

const UserAccountPage = () => {
  const { themeStretch } = useSettingsContext();
  const [currentTab, setCurrentTab] = useState("general");
  const TABS = [
    {
      value: "general",
      label: "General",
      icon: <Iconify icon="ic:round-account-box" />,
      component: <AccountGeneral />,
    },
    {
      value: "billing",
      label: "Billing",
      icon: <Iconify icon="ic:round-receipt" />,
      component: (
        <AccountBilling
          cards={_userPayment}
          addressBook={_userAddressBook}
          invoices={_userInvoices}
        />
      ),
    },
    {
      value: "notifications",
      label: "Notifications",
      icon: <Iconify icon="eva:bell-fill" />,
      component: <AccountNotifications />,
    },
    {
      value: "social_links",
      label: "Social links",
      icon: <Iconify icon="eva:share-fill" />,
      component: <AccountSocialLinks socialLinks={_userAbout.socialLinks} />,
    },
    {
      value: "change_password",
      label: "Change password",
      icon: <Iconify icon="ic:round-vpn-key" />,
      component: <AccountChangePassword />,
    },
  ];

  return (
    <>
      <Container maxWidth={themeStretch ? false : "lg"}>
        <CustomBreadcrumbs
          heading="Account"
          links={[
            { name: "Dashboard", href: PATH_DASHBOARD.root },
            { name: "User", href: PATH_DASHBOARD.user.root },
            { name: "Account Settings" },
          ]}
        />

        <Tabs
          value={currentTab}
          onChange={(event, newValue) => setCurrentTab(newValue)}
        >
          {TABS.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              icon={tab.icon}
              value={tab.value}
            />
          ))}
        </Tabs>

        {TABS.map(
          (tab) =>
            tab.value === currentTab && (
              <Box key={tab.value} sx={{ mt: 5 }}>
                {tab.component}
              </Box>
            )
        )}
      </Container>
    </>
  );
};
export default UserAccountPage;
