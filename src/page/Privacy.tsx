import React, { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';
import English from '../locales/pages/privacy_policy/PrivacyEn';
import German from '../locales/pages/privacy_policy/PrivacyDe';
import Polish from '../locales/pages/privacy_policy/PrivacyPl';

// Define a type for your component, if they have props, include them in this interface.
interface PrivacyPolicyComponentProps {
  // Define props here. For example: title: string;
}

const Privacy: React.FC<PrivacyPolicyComponentProps> = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  useEffect(() => {
      if (window.location.hostname !== "localhost") {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
      }
    }, [location]);

  let Component: React.ElementType;

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

  // Ensure that Component is used as a JSX element
  return <Component as ReactElement />;
};

export default Privacy;
