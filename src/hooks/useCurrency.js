import { useEffect, useState } from 'react';

// IMPORTANT - EVERYTHING HAS CONVERSIONI RATE 1 BECAUSE THERE IS SEPERATE data.json FILE WITH SEPERATE PRICES. 
// THIS IS DONE FOR SIMPLIFICATION OF CLACLULATION OF TOTAL IN THE SHOPPING CART
// This is a simplified mapping. You might want to extend this list or fetch it from an API.
const languageToCurrency = {
    // left:true or left false idicate on which side of the price the currency symbol should be placed
    'en-US': { code: 'USD', symbol: '$', rate: 1, left:true},
    'en-GB': { code: 'GBP', symbol: '£', rate: 1, left:true},
    'fr-FR': { code: 'EUR', symbol: '€', rate: 1, left:true},
    'de-DE': { code: 'EUR', symbol: '€', rate: 1, left:true},
    'es-ES': { code: 'EUR', symbol: '€', rate: 1, left:true},
    'pl-PL': { code: 'EUR', symbol: 'zł', rate: 1, left:false},
    // Add more language-to-currency mappings here
    // 'en-US': { code: 'USD', symbol: '$' },
    'en': { code: 'USD', symbol: '$', rate: 1, left:true},
    'fr': { code: 'EUR', symbol: '€', rate: 1, left:true},
    'es': { code: 'EUR', symbol: '€', rate: 1, left:true},
    'de': { code: 'EUR', symbol: '€', rate: 1, left:true},
    'pl': { code: 'EUR', symbol: 'zł', rate: 1, left:false},
};

export const useCurrency = (inputValue) => {
    const [currency, setCurrency] = useState({ code: 'EUR', symbol: '€', rate: 1, left:true }); // Default to EUR
    let price =10

    useEffect(() => {
        const browserLanguage = navigator.language;
        const currencyDetails = languageToCurrency[browserLanguage] || languageToCurrency['de-DE']; // Fallback to USD if no match found
        setCurrency(currencyDetails);
    }, []);
    
    price= Math.round((inputValue * currency.rate) * 1) / 1
    const symbol = currency.symbol
    const code = currency.code
    const display =  currency.left ? `${symbol} ${price}` : `${price} ${symbol}`  ;
    return {value: price, symbol, code, display };
};
