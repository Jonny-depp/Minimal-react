import { type ReactNode, useRef } from "react";
import {
  SnackbarProvider as NotistackProvider,
  type SnackbarKey,
} from "notistack";
import { alpha } from "@mui/material/styles";
import { Box, Collapse, IconButton } from "@mui/material";
import { useSettingsContext } from "../settings";
import Iconify from "../iconify";
import StyledNotistack from "./styles";

interface SnackbarProviderProps {
  children: ReactNode;
}

export default function SnackbarProvider({ children }: SnackbarProviderProps) {
  const { themeDirection } = useSettingsContext();
  const isRTL = themeDirection === "rtl";
  const notistackRef = useRef<NotistackProvider>(null);
  const onClose = (key: SnackbarKey) => () => {
    notistackRef.current?.closeSnackbar(key);
  };

  return (
    <>
      <StyledNotistack />
      <NotistackProvider
        ref={notistackRef}
        dense
        maxSnack={5}
        preventDuplicate
        autoHideDuration={3000}
        TransitionComponent={isRTL ? Collapse : undefined}
        variant="success"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        iconVariant={{
          info: <SnackbarIcon icon="eva:info-fill" color="info" />,
          success: (
            <SnackbarIcon icon="eva:checkmark-circle-2-fill" color="success" />
          ),
          warning: (
            <SnackbarIcon icon="eva:alert-triangle-fill" color="warning" />
          ),
          error: <SnackbarIcon icon="eva:alert-circle-fill" color="error" />,
        }}
        action={(key) => (
          <IconButton size="small" onClick={onClose(key)} sx={{ p: 0.5 }}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        )}
      >
        {children}
      </NotistackProvider>
    </>
  );
}

interface SnackbarIconProps {
  icon: string;
  color: "primary" | "secondary" | "info" | "success" | "warning" | "error";
}

function SnackbarIcon({ icon, color }: SnackbarIconProps) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        justifyContent: "center",
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette[color].main, 0.16),
      }}
    >
      <Iconify icon={icon} width={24} />
    </Box>
  );
}
