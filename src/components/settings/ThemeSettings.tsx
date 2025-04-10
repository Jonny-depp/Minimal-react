import { ReactNode } from "react";
import ThemeColorPresets from "./ThemeColorPresets";
import ThemeContrast from "./ThemeContrast";
import ThemeRtlLayout from "./ThemeRtlLayout";
import SettingsDrawer from "./drawer";

interface ThemeSettingsProps {
  children: ReactNode;
}

const ThemeSettings = ({ children }: ThemeSettingsProps) => {
  return (
    <>
      <ThemeColorPresets>
        <ThemeContrast>
          <ThemeRtlLayout>
            {children}
            <SettingsDrawer />
          </ThemeRtlLayout>
        </ThemeContrast>
      </ThemeColorPresets>
    </>
  );
};
export default ThemeSettings;
