import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { defaultSettings } from "./config-setting";
import { useContext } from "react";
import { defaultPreset, presetsOption, getPresets } from "./presets";
import useLocalStorage from "../../hooks/useLocalStorage";
import localStorageAvailable from "../../utils/localStorageAvailable";

const initialState = {
  ...defaultSettings,
  onToggleMode: () => {},
  onChangeMode: () => {},
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: () => {},
  onToggleLayout: () => {},
  onChangeLayout: () => {},
  onToggleContrast: () => {},
  onChangeContrast: () => {},
  onChangeColorPresets: () => {},
  presetsColor: defaultPreset,
  presetsOption: [],
  onToggleStretch: () => {},
  onResetSetting: () => {},
};

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (!context)
    throw new Error("useSettingsContext must be use inside SettingsProvider");
  return context;
};

interface SettinsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: SettinsProviderProps) => {
  const [settings, setSettings] = useLocalStorage({
    key: "settings",
    defaultValue: defaultSettings,
  });
  const storageAvailable = localStorageAvailable();
  const langStorage = storageAvailable
    ? localStorage.getItem("i18nextLng")
    : "";
  const isArabic = langStorage === "ar";
  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang("ar");
    }
  }, [isArabic]);

  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode === "light" ? "dark" : "light";
    setSettings({ ...settings, themeMode });
  }, [setSettings, settings]);

  const onChangeMode = useCallback(
    (event: any) => {
      const themeMode = event.target.value;
      setSettings({ ...settings, themeMode });
    },
    [setSettings, settings]
  );

  const onToggleDirection = useCallback(() => {
    const themeDirection = settings.themeDirection === "rtl" ? "ltr" : "rtl";
    setSettings({ ...settings, themeDirection });
  }, [setSettings, settings]);

  const onChangeDirection = useCallback(
    (event: any) => {
      const themeDirection = event.target.value;
      setSettings({ ...settings, themeDirection });
    },
    [setSettings, settings]
  );

  const onChangeDirectionByLang = useCallback(
    (lang: any) => {
      const themeDirection = lang === "ar" ? "rtl" : "ltr";
      setSettings({ ...settings, themeDirection });
    },
    [setSettings, settings]
  );

  const onToggleLayout = useCallback(() => {
    const themeLayout =
      settings.themeLayout === "vertical" ? "mini" : "vertical";
    setSettings({ ...settings, themeLayout });
  }, [setSettings, settings]);

  const onChangeLayout = useCallback(
    (event: any) => {
      const themeLayout = event.target.value;
      setSettings({ ...settings, themeLayout });
    },
    [setSettings, settings]
  );

  const onToggleContrast = useCallback(() => {
    const themeContrast =
      settings.themeContrast === "default" ? "bold" : "default";
    setSettings({ ...settings, themeContrast });
  }, [setSettings, settings]);

  const onChangeContrast = useCallback(
    (event: any) => {
      const themeContrast = event.target.value;
      setSettings({ ...settings, themeContrast });
    },
    [setSettings, settings]
  );

  const onChangeColorPresets = useCallback(
    (event: any) => {
      const themeColorPresets = event.target.value;
      setSettings({ ...settings, themeColorPresets });
    },
    [setSettings, settings]
  );

  const onToggleStretch = useCallback(() => {
    const themeStretch = !settings.themeStretch;
    setSettings({ ...settings, themeStretch });
  }, [setSettings, settings]);

  const onResetSetting = useCallback(() => {
    setSettings(defaultSettings);
  }, [setSettings]);

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      onToggleMode,
      onChangeMode,
      onToggleDirection,
      onChangeDirection,
      onChangeDirectionByLang,
      onToggleLayout,
      onChangeLayout,
      onChangeContrast,
      onToggleContrast,
      onToggleStretch,
      onChangeColorPresets,
      presetsOption,
      presetsColor: getPresets(settings.themeColorPresets),
      onResetSetting,
    }),
    [
      settings,
      onToggleMode,
      onChangeMode,
      onToggleDirection,
      onChangeDirection,
      onChangeDirectionByLang,
      onToggleLayout,
      onChangeLayout,
      onChangeContrast,
      onToggleContrast,
      onToggleStretch,
      onChangeColorPresets,
      onResetSetting,
    ]
  );
  return (
    <SettingsContext.Provider value={memoizedValue}>
      {children}
    </SettingsContext.Provider>
  );
};
