import React, { useState } from 'react'
import TouchSlider from '../components/TouchSlider';
import products from '../data/products.json'
import Payment from '../stripe/Payment';

export default function About() {
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
    <div className='About'>
        <div className="order-summary-container">
            <div className="summary-header" onClick={toggleExpanded}>
                <h3>Order Summary {isExpanded ? "↓" : "↑"}</h3>
            </div>
            {isExpanded && (
                <div className="order-details">
                    {/* Render your order details here */}
                    <p>Order ID: {orderDetails.id}</p>
                    <p>Total Price: ${orderDetails.totalPrice}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    </div>
  )
}







// };


