import { useTheme } from "@mui/material/styles";
import { useSettingsContext } from "../SettingsContext";
import { useState } from "react";
import { defaultSettings } from "../config-setting";
import {
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
  Tooltip,
  IconButton,
  alpha,
  SxProps,
  Theme,
} from "@mui/material";
import Iconify from "../../iconify";
import { NAV } from "../../../config-global";
import { bgBlur } from "../../../utils/cssStyles";
import Scrollbar from "../../scrollbar";
import BadgeDot from "./BadgeDot";
import ToggleButton from "./ToggleButton";
import ModeOptions from "./ModeOptions";
import Block from "./Block";
import ContrastOptions from "./ContrastOptions";
import DirectionOptions from "./DirectionOptions";
import LayoutOptions from "./LayoutOptions";
import StretchOptions from "./StretchOptions";
import ColorPresetsOptions from "./ColorPresetsOptions";
import FullScreenOptions from "./FullScreenOptions";

const SPACING = 2.5;

const SettingsDrawer = () => {
  const {
    themeMode,
    themeLayout,
    themeStretch,
    themeContrast,
    themeDirection,
    themeColorPresets,
    onResetSetting,
  } = useSettingsContext();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notDefault =
    themeMode !== defaultSettings.themeMode ||
    themeLayout !== defaultSettings.themeLayout ||
    themeStretch !== defaultSettings.themeStretch ||
    themeContrast !== defaultSettings.themeContrast ||
    themeDirection !== defaultSettings.themeDirection ||
    themeColorPresets !== defaultSettings.themeColorPresets;

  const blurStyles = bgBlur({
    color: theme.palette.background.default,
    opacity: 0.9,
  }) as SxProps<Theme>;

  return (
    <>
      {!open && (
        <ToggleButton
          open={open}
          notDefault={notDefault}
          onToggle={handleToggle}
        />
      )}

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: NAV.W_BASE,
            boxShadow: `-24px 12px 40px 0 ${alpha(
              theme.palette.mode === "light"
                ? theme.palette.grey[500]
                : theme.palette.common.black,
              0.16
            )}`,
            ...blurStyles,
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 2, pr: 1, pl: SPACING }}
        >
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            Settings
          </Typography>

          <Tooltip title="Reset">
            <Box sx={{ position: "relative" }}>
              {notDefault && <BadgeDot />}
              <IconButton onClick={onResetSetting}>
                <Iconify icon="ic:round-refresh" />
              </IconButton>
            </Box>
          </Tooltip>

          <IconButton onClick={handleClose}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Scrollbar sx={{ p: SPACING, pb: 0 }}>
          <Block title="Mode">
            <ModeOptions />
          </Block>

          <Block title="Contrast">
            <ContrastOptions />
          </Block>

          <Block title="Direction">
            <DirectionOptions />
          </Block>

          <Block title="Layout">
            <LayoutOptions />
          </Block>
          <Block
            title="Stretch"
            tooltip="Only available at large resolutions > 1600px (xl)"
          >
            <StretchOptions />
          </Block>
          <Block title="Presets">
            <ColorPresetsOptions />
          </Block>
        </Scrollbar>
        <Box sx={{ p: SPACING, pt: 0 }}>
          <FullScreenOptions />
        </Box>
      </Drawer>
    </>
  );
};
export default SettingsDrawer;
