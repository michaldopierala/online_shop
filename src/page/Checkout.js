import React, { useEffect, useContext, useState } from 'react'
import { Link } from "react-router-dom";

// import ShowSummary from '../../../shopping-website/src/component/ShowSummary'
import Address from '../components/checkout/Address'
import { ShoppingCartContext } from '../context/CartContext';
import ProductCheckout from '../components/checkout/ProductCheckout'
import products from '../data/products.json'




export default function Checkout() {

    const { setCartOpen, CartQuantity, cartItems } = useContext(ShoppingCartContext)
    const [address, setAddress] = useState([]);


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
                    <div className='head'> Address </div>
                    <Address updateAddress={updateAddress} address={address} />
                    <div className='head'> Payment </div>



                    here we will have stripe element 
                </div>
                <div className='column2'>
                    <div className='head'>Your order</div>
                    {CartQuantity > 0
                        ? cartItems.map((item, index) => <ProductCheckout key={index} {...item} />)

                        // ? cartItems.map((item, index) =><div>{index}</div>  )
                        : <div className='cartEmpty'> Cart is empty </div>
                    }
                    <div className='total'> Tota: ${total}  </div>
                </div>
            </div>

        </div>
    )
}
