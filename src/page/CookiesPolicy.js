import React from 'react'
import { useTranslation } from 'react-i18next';
import English from '../locales/pages/cookies_policy/CookiesEn';
import German from '../locales/pages/cookies_policy/CookiesDe';
import Polish from '../locales/pages/cookies_policy/CookiesPl';


export default function CookiesPolicy() {
  const { i18n } = useTranslation();

  let Component;

  switch (i18n.language) {
    case 'en':
      Component = English;
      break;
    case 'de':
      Component = German;
      break;
    case 'pl':
      Component = Polish;
      break;
    default:
      Component = English; // Default to English if no match
  }

  return <Component />;
}
