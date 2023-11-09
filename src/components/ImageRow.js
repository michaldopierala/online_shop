import React from 'react';
import { Link } from "react-router-dom";
import products from '../data/products.json'


const ImageRow = () => {

  const productsToShow = [
    1,
    4,
    3,
    4
    // Add more products
  ];

  // Calculate the total number of images to determine each image's width.
  const imageCount = productsToShow.length;
  const imageWidth = 100 / imageCount;

  const imageStyle = {
    width: `${imageWidth}%`,
    objectFit: 'cover',  // Maintains aspect ratio while fitting within the dimension box
  };



  return (
    <div className='ImageRow'>
      <div className='title'>Beach Collection </div>
      <div className='description'>Reimagine your seaside style with our premium collection of sarong beach towels.</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {productsToShow.map((id, index) => (
          <div className='product'
            key={index}
            style={imageStyle}
          >
            <div className='image'>
              <Link to={`/product/${id}`}>
                <img src={products.find(item => id == item.id).imgUrl[0]} alt={index} />
              </Link>
            </div>
            <div className='name'>{products.find(item => id == item.id).name}</div>
            <div className='price'>$ {products.find(item => id == item.id).price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageRow;
