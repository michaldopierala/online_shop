import React from 'react'
import products from '../../data/products.json'


export default function ProductCheckout({ id, quantity }) {
  const product = products.find((item) => item.id === id)

  return (
    <div className='ProductCheckout'>
      <div className='product'>
        <img src={product.imgUrl[0]} />
        <div className='name'>
          {product.name}
          <span className='quantity'> x {quantity}</span>
          <div className='productPrice'>$ {product.price} </div>
        </div>
      </div>
      <div className='productTotal'>$ {quantity * product.price} </div>

    </div>
  )
}