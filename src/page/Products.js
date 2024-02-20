import React,{ useEffect } from 'react'
import { useProducts } from '../hooks/useProducts'; 
import StoreItem from '../components/StoreItem'
import { useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';



export default function Products() {
  const products = useProducts(); // Use the custom hook

    const location = useLocation();
    useEffect(() => {
        if (window.location.hostname !== "localhost") {
          ReactGA4.send({ hitType: "pageview", page: location.pathname });
        }
      }, [location]);

    return (
        <div className='Store'>
                  {products.map((item) => <StoreItem key={item.id} {...item} />)}
        </div>
    )
}
