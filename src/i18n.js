// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Import your local translation files
// import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json'
import translationEN from './locales/en/translation.json'
import translationDE from './locales/de/translation.json'
import translationPL from './locales/pl/translation.json'


// Resources object containing your translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES, // Example for Spanish
  },
  de: {
    translation: translationDE, // Example for Spanish
  },
  pl: {
    translation: translationPL, // Example for Spanish
  },
};

i18n
  // Removed the .use(Backend) since we're not using a backend loader
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources, // Add the resources to i18next configuration
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;








// src/i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// // Import your translation files
// import translationEN from 'en/translation.json';
// import translationDE from 'de/translation.json';

// // the translations
// const resources = {
//   en: {
//     translation: translationEN,
//   },
//   es: {
//     translation: translationDE,
//   },
// };

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     lng: "en", // language to use, can be changed using i18n.changeLanguage()
//     interpolation: {
//       escapeValue: false, // react already safes from xss
//     },
//   });

// export default i18n;









// // i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// // import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
// //   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/translation.json',
//     },
//   });

// export default i18n;
