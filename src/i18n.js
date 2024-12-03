import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import eng from "./language/en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: eng(),
    },
    // pt: {
    //   translations: prt(),
    // },
  },
  lng: "en",
  fallbackLng: "en",
  debug: true,
  ns: ["translations"],
  defaultNS: "translations",
  // keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
