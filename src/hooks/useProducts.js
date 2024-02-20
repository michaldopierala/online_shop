import productsEn from '../data/products.json';
import productsDe from '../data/products_de.json';
import productsPl from '../data/products_pl.json';
import { useTranslation } from 'react-i18next';



export const useProducts = () => {
  const { i18n } = useTranslation();

  let products;

  switch (i18n.language) {
    case 'en':
      products = productsEn;
      break;
    case 'de':
      products = productsDe;
      break;
    case 'pl':
      products = productsPl;
      break;
    default:
      products = productsEn; // Default to English if no match
  }

  return products;
  // Potential place for future logic, e.g., fetching data from an API.
  // return products;
};
