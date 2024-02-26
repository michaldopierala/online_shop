import React from 'react';
import { Link } from "react-router-dom";
import { useProducts } from '../hooks/useProducts'; 
import { useCurrency } from '../hooks/useCurrency'; 
import { useTranslation } from 'react-i18next';




// const ImageRow = () => {
  export default function ImageRow() {
    const { t } = useTranslation();
    const products = useProducts(); 
    const {value, symbol, display} = useCurrency(1); //  1 is inputed because we only want to get currency symbol

    const productsToShow = [
      4,
      5,
      6,
      7
      // Add more products
    ];
  
    // Calculate the total number of images to determine each image's width.
    const imageCount = productsToShow.length;
    const imageWidth = 100 / imageCount;

    return (
      <div className='ImageRow'>
      <div className='title'>{t('frontpageheader1')}</div>
      <div className='description'>{t('frontpagetext1')}</div>
      {/* <div className='images' style={{ display: 'flex', flexDirection: 'row' }}> */}
      <div className='images'>
        {productsToShow.map((id, index) => (
          <div className='product'
            key={index}
          >
            <div >
              <Link className='image' to={`/product/${id}`}>
                <img src={products.find(item => id == item.id).imgUrl[0]} alt={index} />
              </Link>
            </div>
            <div className='name'>{products.find(item => id == item.id).name}</div>
            <div className='price'>{symbol} {products.find(item => id == item.id).price}</div>
          </div>
        ))}
      </div>
    </div>
    )
};

// export default ImageRow;
