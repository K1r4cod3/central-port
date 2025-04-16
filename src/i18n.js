import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    ns: ['translation', 'homepage', 'about-us', 'open-letter', 'footer', 'cargo-handling-and-transshipment-services', 'anchorage-and-warehousing-services', 'safety-and-environmental-protection-services', 'crew-support-and-logistics-services', 'transportation-services', 'inspection-services', 'technical-information', 'anchorage-area-no1', 'anchorage-area-no2', 'area-map'],
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 