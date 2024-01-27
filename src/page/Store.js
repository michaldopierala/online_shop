import React,{ useEffect } from 'react'
import products from '../data/products.json'
import StoreItem from '../components/StoreItem'
import { useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';
ReactGA4.initialize("G-S1TP745FSQ");


export default function Store() {
    const location = useLocation();
    
    useEffect(() => {
        ReactGA4.send({ hitType: "pageview", page: location.pathname });
      }, [location]);

    return (
        <div className='Store'>
                  {products.map((item) => <StoreItem key={item.id} {...item} />)}
        </div>
    )
}
