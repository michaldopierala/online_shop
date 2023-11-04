import React from 'react';
import { Link } from "react-router-dom";
import products from '../data/products.json'


const ImageRow = () => {

  // const images = [
  //   'img/img1.jpg',
  //   'img/img2.jpg',
  //   'img/img3.jpg',
  //   'img/img4.jpg'
  //   // Add more image URLs as needed
  // ];

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
          // {let product = products.find(item => id == item.id)}
          <div className='image'
            key={index}
            style={imageStyle}
          >
            <Link
              to={`/product/${id}`}>
              <img src={products.find(item => id == item.id).imgUrl[0]} alt={index} />
            </Link>
            <div>{products.find(item => id == item.id).name}</div>
            <div>{products.find(item => id == item.id).price}</div>
          </div>
        ))}
      </div>
    </div>



  );
};

export default ImageRow;
