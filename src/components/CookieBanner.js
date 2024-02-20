import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';



export default function CookieBanner() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent == 'granted') {
            //here you put functions when cookies are granted.
            window.fbq('track', 'ViewContent')

        } else {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'granted');
        setVisible(false);
        // Initialize Facebook Pixel or any other analytics tool here after consent
        console.log('Cookies accepted');
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setVisible(false);
        console.log('Cookies rejected');
    };

    if (!visible) return null;

    return (
        <div className='CookieBanner'>
            <div  className='text'>
                <div className='title'>{t('cookies.title')}</div>
                <div>{t('cookies.text')}<Link className="cookiesLink" to="cookies">Cookies Policy</Link>.</div>
            </div>
            <div className='buttons'>
                <button onClick={handleAccept}>{t('cookies.accept')}</button>
                <button onClick={handleReject}>{t('cookies.reject')}</button>
            </div>

        </div>
    )
}
