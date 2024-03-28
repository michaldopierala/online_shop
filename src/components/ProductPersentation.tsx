import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductPresentation: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className='ProductPersentation'>
            <div className='image'>
                <img src='/img/toa-heftib.jpg'  alt='Product' />
            </div>
            <div className='description'>
                <div className='title'>{t('frontpageheader2')}</div>
                {t('frontpagetext2')}
            </div>
        </div>
    );
};

export default ProductPresentation;
