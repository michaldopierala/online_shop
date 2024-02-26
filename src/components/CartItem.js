import React, { useContext } from 'react'
import { Link } from "react-router-dom";
// import products from '../data/products.json'
import { useProducts } from '../hooks/useProducts'; 
import { ShoppingCartContext } from '../context/CartContext';
import { useCurrency } from '../hooks/useCurrency'; 



export default function CartItem({ id, quantity }) {
    const products = useProducts(); // Use the custom hook
    const product = products.find((item) => item.id === id)
    const { remove, closeCart } = useContext(ShoppingCartContext)
    const {value, symbol, display} = useCurrency(product.price);



    return (
        <div className='CartItem'>
            <div className='left'>
                <img src={product.imgUrl[0]} alt='product image' />
                <div className='name'>
                    <Link to={`product/${product.id}`} onClick={closeCart} > {product.name}  </Link>
                    <span>x {quantity} </span>
                    <div className='itemPrice'> {display}</div>
                </div>
            </div>
            <div className='right'>
                <span> {symbol} {value * quantity}</span>
                <button onClick={() => remove(id)}>&#x2715;</button>
            </div>
        </div>
    )
}
