import React from 'react'
import { useTranslation } from 'react-i18next';
import ReactGA4 from 'react-ga4';
import English from '../locales/pages/privacy_policy/PrivacyEn';
import German from '../locales/pages/privacy_policy/PrivacyDe';
import Polish from '../locales/pages/privacy_policy/PrivacyPl';


export default function Privacy() {
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