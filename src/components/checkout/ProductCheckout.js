import React from 'react'
import products from '../../data/products.json'
import { useProducts } from '../../hooks/useProducts';
import { useCurrency } from '../../hooks/useCurrency';


export default function ProductCheckout({ id, quantity }) {
  const {value, symbol, display} = useCurrency(1); //  1 is inputed because we only want to get currency symbol
  const products = useProducts();
  const product = products.find((item) => item.id === id)

  return (
    <div className='ProductCheckout'>
      <div className='product'>
        <img src={product.imgUrl[0]} />
        <div className='name'>
          {product.name}
          <span className='quantity'> x {quantity}</span>
          <div className='productPrice'>{symbol} {product.price} </div>
        </div>
      </div>
      <div className='productTotal'>{symbol} {quantity * product.price} </div>
    </div>
  )
}