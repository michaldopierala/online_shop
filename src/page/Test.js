// import React, { useState, useEffect } from 'react';

// const currencyMap = {
//   'en-US': 'USD',
//   'en-GB': 'GBP g', // United Kingdom (England)
//   'fr-FR': 'EUR f', // France
//   'es-ES': 'EUR e', // Spain
//   'de-DE': 'EUR d', // Germany
//   'pl-PL': 'PLN p', // Poland
//   'en-GB': 'GBP g', // United Kingdom (England)
//   'en': 'USD',
//   'fr': 'EUR', // France
//   'es': 'EUR', // Spain
//   'de': 'EUR', // Germany
//   'pl': 'PLN', // Poland
// };

// const currencyToSymbol = {
//   'USD': '$',
//   'GBP': '£',
//   'EUR': '€',
//   'PLN': 'zł',
//   // Add more currencies and symbols as needed
// };

// function CurrencyDisplay() {
//   const [currency, setCurrency] = useState('USD');
// const ln = navigator.language;
// const test = currencyMap[ln]
//   useEffect(() => {
//     const userLanguage = navigator.language;
//     const mappedCurrency = currencyMap[userLanguage] || 'USD';
//     setCurrency(mappedCurrency);
//   }, []);

//   return <div>Your currency is {ln}</div>;
// }

// export default CurrencyDisplay;








// import React, {useCurrency} from 'react';


// function CurrencyDisplay() {

//   return <div>Your currency is {ln}</div>;
// }

// export default CurrencyDisplay;






import React, {useState, useEffect } from 'react';
import { useCurrency } from '../hooks/useCurrency'; 




function CurrencyDisplay() {
  // const { code, symbol, rate } = useCurrency(); // Destructure to get code and symbol

  // return <div>Your currency is {code} symbol is {symbol}, rate is {rate} </div>;
  return useCurrency(4);
}

export default CurrencyDisplay;







// import React from 'react';

// const MyComponent = () => {
//   const { code, symbol } = useCurrency(); // Using our custom hook

//   return (
//     <div>
//       Detected Currency: {code} ({symbol})
//     </div>
//   );
// };



