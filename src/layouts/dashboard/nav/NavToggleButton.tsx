import { IconButton } from "@mui/material";
import { SxProps } from "@mui/system";
import { NAV } from "../../../config-global";
import Iconify from "../../../components/iconify";
import { useSettingsContext } from "../../../components/settings";
import useResponsive from "../../../hooks/useResponsive";

interface NavToggleButtonProps {
  sx?: SxProps;
}
const NavToggleButton = ({ sx, ...other }: NavToggleButtonProps) => {
  const { themeLayout, onToggleLayout } = useSettingsContext();

  const isDesktop = useResponsive("up", "lg");

  if (!isDesktop) {
    return null;
  }

  return (
    <IconButton
      size="small"
      onClick={onToggleLayout}
      sx={{
        p: 0.5,
        top: 32,
        position: "fixed",
        left: NAV.W_DASHBOARD - 12,
        bgcolor: "background.default",
        zIndex: (theme) => theme.zIndex.appBar + 1,
        border: (theme) => `dashed 1px ${theme.palette.divider}`,
        "&:hover": {
          bgcolor: "background.default",
        },
        ...sx,
      }}
      {...other}
    >
      <Iconify
        width={16}
        icon={
          themeLayout === "vertical"
            ? "eva:arrow-ios-back-fill"
            : "eva:arrow-ios-forward-fill"
        }
      />
    </IconButton>
  );
};
export default NavToggleButton;
