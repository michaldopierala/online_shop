import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import products from '../data/products.json'
import { ShoppingCartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { useTranslation } from 'react-i18next';


export default function ShoppingCartTab() {
    const { t } = useTranslation();
    const { closeCart, cartOpen, cartItems, CartQuantity } = useContext(ShoppingCartContext)

    return (
        <div className='ShoppingCart'>
            <div className='ShoppingCartTab'>
                <h2>{t('shopping_cart.cart')}</h2>
                <button className='close' onClick={closeCart}>
                    <img src='/img/close.png' alt='close' />
                </button>
                {CartQuantity > 0
                    ? cartItems.map((item, index) => <CartItem key={index} {...item} />)
                    : <div className='cartEmpty'> {t('shopping_cart.empty')} </div>
                }
                <div className='totalContainer'>
                    {CartQuantity > 0
                        ? <div className='total'>{t('shopping_cart.total')} : $ {cartItems.reduce((total, cartItem) => {
                            const item = products.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)}
                            <div className='checkoutContainer'>
                                <Link to={`/checkout`} className='checkoutBtn'>{t('shopping_cart.checkout')}</Link>
                            </div>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}
