import { useLocation } from "react-router-dom";
import useResponsive from "../../../hooks/useResponsive";
import { useEffect } from "react";
import Scrollbar from "../../../components/scrollbar";
import { Box, Drawer, Stack } from "@mui/material";
import Logo from "../../../components/logo";
import NavAccount from "./NavAccount";
import navConfig from "./config-navigation";
import { NavSectionVertical } from "../../../components/nav-section";
import NavDocs from "./NavDocs";
import { NAV } from "../../../config-global";
import NavToggleButton from "./NavToggleButton";
interface NavVerticalProps {
  openNav?: boolean;
  onCloseNav: () => void;
}

const NavVertical = ({ openNav, onCloseNav }: NavVerticalProps) => {
  const { pathname } = useLocation();
  const isDesktop = useResponsive("up", "lg");
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
        }}
      >
        <Logo />

        <NavAccount />
      </Stack>

      <NavSectionVertical data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <NavDocs />
    </Scrollbar>
  );
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      <NavToggleButton />

      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_DASHBOARD,
              bgcolor: "transparent",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};
export default NavVertical;
