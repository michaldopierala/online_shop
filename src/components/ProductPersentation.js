import React from 'react'
import { useTranslation } from 'react-i18next';

export default function ProductPersentation() {
    const { t } = useTranslation();
    return (
        <div className='ProductPersentation'>
                <div className='image'>
                    <img src='/img/toa-heftib.jpg' />
                </div>
                <div className='description'>
                <div className='title'>{t('frontpageheader2')}</div>
                {t('frontpagetext2')}
                </div>
        </div>
    )
}
