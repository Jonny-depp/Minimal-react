import { ThemeProvider, useTheme } from "@mui/material/styles";
import { useSettingsContext } from "./SettingsContext";
import { ReactNode, useMemo } from "react";
import { merge } from "lodash";
import { createTheme, CssBaseline } from "@mui/material";

interface ThemeContrastProps {
  children: ReactNode;
}

const ThemeContrast = ({ children }: ThemeContrastProps) => {
  const outerTheme = useTheme();
  const { themeContrast, themeMode } = useSettingsContext();
  const isLight = themeMode === "light";
  const isContrastBold = themeContrast === "bold";
  const themeOptions = useMemo(
    () => ({
      palette: {
        background: {
          ...(isContrastBold && {
            default: isLight
              ? outerTheme.palette.grey[100]
              : outerTheme.palette.grey[900],
          }),
        },
      },
      components: {
        MuiCard: {
          styleOverrides: {
            ...(isContrastBold && {
              root: {
                boxShadow: outerTheme.shadows[4],
              },
            }),
          },
        },
      },
    }),
    [isLight, themeContrast]
  );

  const theme = createTheme(merge(outerTheme, themeOptions));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default ThemeContrast;
