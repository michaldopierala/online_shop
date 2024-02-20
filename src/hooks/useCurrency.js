import { useEffect, useState } from 'react';

// This is a simplified mapping. You might want to extend this list or fetch it from an API.
const languageToCurrency = {
    'en-US': { code: 'USD', symbol: '$', rate: 1 },
    'en-GB': { code: 'GBP', symbol: '£' },
    'fr-FR': { code: 'EUR', symbol: '€', rate: 1},
    'de-DE': { code: 'EUR', symbol: '€', rate: 1 },
    // Add more language-to-currency mappings here
    // 'en-US': { code: 'USD', symbol: '$' },
    'en-GB': { code: 'USD', symbol: '$' }, // United Kingdom (England)
    'fr-FR': 'EUR f', // France
    'es-ES': 'EUR e', // Spain
    'de-DE': 'EUR d', // Germany
    'pl-PL': 'PLN p', // Poland
    'en-GB': 'GBP g', // United Kingdom (England)
    'en': { code: 'USD', symbol: '$' },
    'fr': 'EUR', // France
    'es': 'EUR', // Spain
    'de': 'EUR', // Germany
    'pl': 'PLN', // Poland
};

export const useCurrency = (inputValue) => {
    const [currency, setCurrency] = useState({ code: 'USD', symbol: '$', rate: 1 }); // Default to USD

    useEffect(() => {
        const browserLanguage = navigator.language;
        const currencyDetails = languageToCurrency[browserLanguage] || languageToCurrency['en-US']; // Fallback to USD if no match found
        setCurrency(currencyDetails);
    }, []);

    inputValue = inputValue *2

    const [message, setMessage] = useState('');
    const [doubledValue, setDoubledValue] = useState(0);

    return  { message, value: doubledValue };
};
