import React, { useEffect, useContext } from 'react'
import {Link} from "react-router-dom";

// import ShowSummary from '../../../shopping-website/src/component/ShowSummary'
import Address from '../components/checkout/Address'
import { ShoppingCartContext } from '../context/CartContext';


export default function Checkout() {

    const { setCartOpen} = useContext(ShoppingCartContext)

    useEffect(() => {
        setCartOpen(false)
        console.log('use efect was active')
      }, []);

    return (
        <div className='Checkout'>
            <div className='header'>
                <Link to={`/`}>   <img className='logo' src='../img/logo.png' alt='logo' /> </Link>
             
            </div>
            {/* <ShowSummary total={total} /> */}
            <div className='columnContainer'>
                <div className='column1'>
                <div className='head'> Adreas </div>
                {/* <Address updateAddress={updateAddress} address={address} /> */}



                    column 1
                </div>
                <div className='column2'>
                    column 2
                </div>
            </div>

        </div>
    )
}
