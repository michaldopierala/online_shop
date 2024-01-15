import React from 'react'
import TouchSlider from '../components/TouchSlider';
import products from '../data/products.json'
import Payment from '../stripe/Payment';

export default function About() {
  const id = 1;
  const product = products.find(item => id == item.id);

  const teast = {
    "htmlContent": "<div><h1>Hello, World!</h1><p>This is a paragraph in my React component.</p></div>"
  }
  

  return (
    <div className='About'>
      {/* <TouchSlider images={product.imgUrl} /> */}
      {/* <TouchSlider images={product.imgUrl} /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: product.description }} /> */}
    <Payment/>
    </div>
  )
}
