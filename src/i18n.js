import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translation_ar from './locales/translation_ar.json'
import translation_en from './locales/translation_en.json'

const resources = {
  en: {
    translation: translation_en
  },
  ar: {
    translation: translation_ar
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    debug: true,
    fallbackLng: 'en',
  });

export default i18n;