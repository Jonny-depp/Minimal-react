import { createTheme, ThemeProvider, useTheme } from "@mui/material";
import { ReactNode } from "react";
import useLocales from "./uselocales";

interface ThemeLocalizationProps {
  children: ReactNode;
}

const ThemeLocalization = ({ children }: ThemeLocalizationProps) => {
  const outerTheme = useTheme();
  const { currentLang } = useLocales();
  const theme = createTheme(outerTheme, currentLang.systemValue);
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};

export default ThemeLocalization;
