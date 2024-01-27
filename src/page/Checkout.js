import React, { useEffect, useContext, useState } from 'react'
import { Link } from "react-router-dom";
import Address from '../components/checkout/Address'
import { ShoppingCartContext } from '../context/CartContext';
import ProductCheckout from '../components/checkout/ProductCheckout'
import products from '../data/products.json'
import Payment from '../stripe/Payment';
import ShowSummary from '../components/checkout/ShowSummary';




export default function Checkout() {

    const { setCartOpen, CartQuantity, cartItems } = useContext(ShoppingCartContext)
    const [address, setAddress] = useState([]);
    const [clientSecret, setClientSecret] = useState(null);


    const total = cartItems.reduce((total, cartItem) => {
        const item = products.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0)



    const updateAddress = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAddress(values => ({ ...values, [name]: value }))
        localStorage.setItem("adress", JSON.stringify(address));
        // console.log(address)
    }
    useEffect(() => {
        console.log('client secret---')
        console.log(clientSecret)
    }, [clientSecret]);

    useEffect(() => {
        setCartOpen(false)
        console.log('use efect was active')
    }, []);

    return (
        <div className='Checkout'>
            <div className='header'>
                {/* <Link to={`/`}>   <img className='logo' src='../img/logo.png' alt='logo' /> </Link> */}
                <Link to={`/`} className='logo'>   <div >SunsetBay </div> </Link>
            </div>
            <ShowSummary cartItems={cartItems} total={total} CartQuantity={CartQuantity} />
            <div className='columnContainer'>
                <div className='column1'>
                    <div className='form'>
                        <div className='head'> Address </div>
                        <Address updateAddress={updateAddress} address={address} />
                        {/* {/* <div className='head'> Payment </div> */}
                        <div className='head'> Payment </div>
                        <Payment getSecret={(secret)=>{setClientSecret(secret)}} />
                    </div>
                </div>
                <div className='column2'>
                    <div className='innerContainer'>
                        <div className='head'>Your order</div>
                        {CartQuantity > 0
                            ? cartItems.map((item, index) => <ProductCheckout key={index} {...item} />)
                            : <div className='cartEmpty'> Cart is empty </div>
                        }
                        <div className='total'> Tota: ${total}  </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
