import { ReactNode, useMemo } from "react";
import {
  alpha,
  createTheme,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";
import { useSettingsContext } from "./SettingsContext";
import { merge } from "lodash";

interface ThemeColorPresetsProps {
  children: ReactNode;
}

const ThemeColorPresets = ({ children }: ThemeColorPresetsProps) => {
  const outerTheme = useTheme();
  const { presetsColor } = useSettingsContext();
  const themeOptions = useMemo(
    () => ({
      palette: {
        primary: presetsColor,
      },
      customShadows: {
        primary: `0 8px 16px 0 ${alpha(presetsColor.main, 0.24)}`,
      },
    }),
    [presetsColor]
  );
  const theme = createTheme(merge(outerTheme, themeOptions));
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default ThemeColorPresets;
