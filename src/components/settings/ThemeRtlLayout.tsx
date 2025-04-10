import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import { ReactNode, useEffect } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

interface ThemeRtlLayoutProps {
  children: ReactNode;
}

const ThemeRtlLayout = ({ children }: ThemeRtlLayoutProps) => {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: theme.direction === "rtl" ? "rtl" : "css",
    stylisPlugins: theme.direction === "rtl" ? [prefixer, rtlPlugin] : [],
  });
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};
export default ThemeRtlLayout;
