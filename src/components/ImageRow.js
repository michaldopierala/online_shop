import React from 'react';
import { Link } from "react-router-dom";
import products from '../data/products.json';
import { useTranslation } from 'react-i18next';




// const ImageRow = () => {
  export default function ImageRow() {
    const { t } = useTranslation();


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
  
    const imageStyle = {
      // width: `${imageWidth}%`,
      // objectFit: 'cover',  // Maintains aspect ratio while fitting within the dimension box
    };



    return (
      <div className='ImageRow'>
      <div className='title'>{t('frontpageheader1')}</div>
      <div className='description'>{t('frontpagetext1')}</div>
      {/* <div className='images' style={{ display: 'flex', flexDirection: 'row' }}> */}
      <div className='images'>
  
        {productsToShow.map((id, index) => (
          <div className='product'
            key={index}
            style={imageStyle}
          >
            <div >
              <Link className='image' to={`/product/${id}`}>
                {/* <img src='/img/close.png' alt='image' /> */}
                <img src={products.find(item => id == item.id).imgUrl[0]} alt={index} />
              </Link>
            </div>
            <div className='name'>{products.find(item => id == item.id).name}</div>
            <div className='price'>$ {products.find(item => id == item.id).price}</div>
          </div>
        ))}
      </div>
    </div>
    )
};

// export default ImageRow;
