import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import English from '../locales/pages/cookies_policy/CookiesEn';
import German from '../locales/pages/cookies_policy/CookiesDe';
import Polish from '../locales/pages/cookies_policy/CookiesPl';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';


export default function CookiesPolicy() {
  const { i18n } = useTranslation();
  const location = useLocation();
  useEffect(() => {
      if (window.location.hostname !== "localhost") {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
      }
    }, [location]);

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
