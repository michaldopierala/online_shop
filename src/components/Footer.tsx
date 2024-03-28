import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className='FooterComponent'>
            <div className='logo'>
                <img className='image' src='/img/palm_footer_w.png' alt='image of palm' />
                <img className='name' src='/img/logo1.png' alt='image of palm' />
            </div>
            <div className='info'>
                <div><Link className="link" to="terms">{t('footer1')}</Link></div>
                <div><Link className="link" to="privacy">{t('footer2')}</Link></div>
                <div><Link className="link" to="shipping">{t('footer3')}</Link></div>
                <div><Link className="link" to="contact">{t('footer4')}</Link></div>
            </div>
            <div className='copyrights'>
                Copyright © 2023, SunsetBay. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
