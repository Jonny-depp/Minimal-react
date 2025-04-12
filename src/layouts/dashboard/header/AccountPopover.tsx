import { useNavigate } from "react-router";
import { useAuthContext } from "../../../auth/useAuthContext";
import { PATH_AUTH, PATH_DASHBOARD } from "../../../routes/paths";
import { useSnackbar } from "../../../components/snackbar";
import { useState } from "react";
import { IconButtonAnimate } from "../../../components/animate";
import { CustomAvatar } from "../../../components/custom-avatar";
import { alpha } from "@mui/material/styles";
import MenuPopover from "../../../components/menu-popover";
import { Box, Divider, MenuItem, Stack, Typography } from "@mui/material";

interface AppUser {
  photoURL?: string;
  displayName?: string;
  email?: string;
}

const OPTIONS = [
  {
    label: "Home",
    linkTo: "/",
  },
  {
    label: "Profile",
    linkTo: PATH_DASHBOARD.user.profile,
  },
  {
    label: "Settings",
    linkTo: PATH_DASHBOARD.user.account,
  },
];

const AccountPopover = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const [openPopover, setOpenPopover] = useState<null | HTMLElement>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleLogout = async () => {
    try {
      logout();
      navigate(PATH_AUTH.login, { replace: true });
      handleClosePopover();
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Unable to logout!", { variant: "error" });
    }
  };

  const handleClickItem = (path: string) => {
    handleClosePopover();
    navigate(path);
  };

  const typedUser = user as AppUser;

  return (
    <>
      <IconButtonAnimate
        onClick={handleOpenPopover}
        sx={{
          p: 0,
          ...(openPopover && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <CustomAvatar
          src={typedUser?.photoURL}
          alt={typedUser?.displayName}
          name={typedUser?.displayName}
        />
      </IconButtonAnimate>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        sx={{ width: 200, p: 0 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {typedUser?.displayName}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {typedUser?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={() => handleClickItem(option.linkTo)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
};

export default AccountPopover;
