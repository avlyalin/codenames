import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRu from 'src/data/translation-ru.json';

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  lng: 'ru',
  resources: {
    ru: {
      translation: translationRu,
    },
  },
});

export { i18n };
