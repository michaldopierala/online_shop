import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// const PIXEL_ID = 'YOUR_PIXEL_ID';

export default function CookieBanner() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent == 'granted') {
            window.fbq('consent', 'grant');
            window.fbq('init', '697183269215011');
            window.fbq('track', 'PageView');
            window.fbq('track', 'ViewContent', {
                content_name: 'Main Page',
            });
            // console.log('count facebook')
        }
         else if (consent == 'rejected') {
            window.fbq('consent', 'revoke');
        //     // window.fbq('init', '697183269215011');
        //     // window.fbq('track', 'PageView');
            // console.log('count facebook 2')
        }
        else {
            setVisible(true);
            window.fbq('consent', 'revoke');
            // window.fbq('init', '697183269215011');
            // window.fbq('track', 'PageView');
            // console.log('count facebook 3')
        }
    }, [visible]);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'granted');
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className='CookieBanner'>
            <div className='text'>
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
