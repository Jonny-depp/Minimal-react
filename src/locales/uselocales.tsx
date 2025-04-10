import { useTranslation } from "react-i18next";
import { useSettingsContext } from "../components/settings";
import localStorageAvailable from "../utils/localStorageAvailable";
import { allLangs, defaultLang } from "./config-lang";
import { TFunction, i18n as I18nextInstance } from "i18next";
interface UseTranslationReturn {
  i18n: I18nextInstance;
  t: TFunction;
}

const useLocales = () => {
  const { i18n, t: translate } = useTranslation() as UseTranslationReturn;
  const { onChangeDirectionByLang } = useSettingsContext();
  const storageAvailable = localStorageAvailable();
  const langStorage = storageAvailable
    ? localStorage.getItem("i18nextLng")
    : "";
  const currentLang =
    allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang: string) => {
    i18n
      .changeLanguage(newlang)
      .then(() => {
        console.log("Language changed to:", newlang);
        onChangeDirectionByLang();
      })
      .catch((error) => {
        console.error("Failed to change language:", error);
      });
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text: string, options?: any) => translate(text, options),
    currentLang,
    allLangs,
  };
};
export default useLocales;
