import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ShoppingCartContext } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../hooks/useCurrency'; 



export default function StoreItem({ id, name, price, imgUrl }) {
    const { t } = useTranslation();
    const { increaseCartQuantity, decreaseCartQuantity, remove, cartItems } = useContext(ShoppingCartContext)
    const itemQuantity = cartItems.find((item) => { return item.id == id })?.quantity || 0
    const {value, symbol, display} = useCurrency(price);

    return (
        <div className='StoreItem'>
            <div className='imgConatainer'>
                <Link to={`../product/${id}`}> <img src={imgUrl[0]} /> </Link>
            </div>
            <div className='product_name'>
                <span  className='name'>{name}</span>
                <span className='price'>{display}</span>
            </div>
            <div className='changeQuantity'>
                {itemQuantity === 0
                    ? <div className='addProduct '><button className='add_to_cart_btn' onClick={() => increaseCartQuantity(id)} >{t('add_to_cart')}</button></div>
                    : <div>
                        <div className='showQuantity'>
                            <button onClick={() => decreaseCartQuantity(id)}>&#8722;</button>
                            <span> {itemQuantity}</span>
                            <button onClick={() => increaseCartQuantity(id)}>+</button>
                        </div>
                        <button className='remove' onClick={() => remove(id)}> {t('remove')}</button>
                    </div>
                }
            </div>
        </div>
    )
}
