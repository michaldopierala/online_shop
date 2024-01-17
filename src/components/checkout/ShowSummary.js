import React, { useState } from 'react'
import products from '../../data/products.json'
import ProductMobileSummary from './ProductMobileSummary';


export default function ShowSummary({ cartItems, total, CartQuantity }) {
  const orderDetails = {
    id: '123456',
    totalPrice: 100
    // ... other order details
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className='ShowSummary' onClick={toggleExpanded}>
      <div className='summaryHeader' >
        <div className='left'>
          <img src='/img/icons/cart.png' alt='shopping cart' />
          Show order summary 
          {isExpanded ? <img className='arrow' src='/img/icons/up.png' alt='up' /> : <img className='arrow' src='/img/icons/down.png' alt='down' />}
        </div>
        <div className='right'>
          Total: ${total}
        </div>
      </div>
      {isExpanded && (
        <div className="order-details">
          {CartQuantity > 0
            ? cartItems.map((item, index) => <ProductMobileSummary key={index} {...item} />)
            : <div className='cartEmpty'> Cart is empty </div>
          }
        </div>
      )}
    </div>
  )
}
