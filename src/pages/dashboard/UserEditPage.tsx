import { paramCase } from "change-case";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { PATH_DASHBOARD } from "../../routes/paths";
import { _userList } from "../../_mock/arrays";
import { useSettingsContext } from "../../components/settings";
import CustomBreadcrumbs from "../../components/custom-breadcrumbs";
import UserNewEditForm from "../../sections/dashboard/user/UserNewEditForm";

// ----------------------------------------------------------------------

export default function UserEditPage() {
  const { themeStretch } = useSettingsContext();

  const { name } = useParams();

  const currentUser = _userList.find((user) => paramCase(user.name) === name);

  return (
    <>
      <Container maxWidth={themeStretch ? false : "lg"}>
        <CustomBreadcrumbs
          heading="Edit user"
          links={[
            {
              name: "Dashboard",
              href: PATH_DASHBOARD.root,
            },
            {
              name: "User",
              href: PATH_DASHBOARD.user.list,
            },
            { name: currentUser?.name },
          ]}
        />

        <UserNewEditForm isEdit currentUser={currentUser} />
      </Container>
    </>
  );
}
