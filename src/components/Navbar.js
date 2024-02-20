import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import ShoppingCartTab from './ShoppingCartTab';
import { ShoppingCartContext } from '../context/CartContext';
import Modal from './Modal';
import MobileMenu from './MobileMenu';
import { useTranslation } from 'react-i18next';


export default function Navbar() {
  const { t } = useTranslation();
  const { closeCart, cartOpen, CartQuantity, newProduct } = useContext(ShoppingCartContext)

  return (
    <div className='Navbar'>
      <nav className="Navigation" >
        <MobileMenu />
        <Link className="btn" to="/">Home </Link>
        <Link className="btn" to="products">{t('menu_products')}</Link>
        {/* <Link className="btn" to="about">About</Link>
         */}
        <Link className="btn" to="contact">{t('menu_contact')}</Link>
        {/* <div className='logo'>SunsetBay</div> */}
        <Link to={`/`} className='logo'>  <img src='/img/sunsetbay.png'/> </Link>
        <button className='shoppingCartIcon' onClick={closeCart}>
          <div className='cartCount'> <span>{CartQuantity}</span>  </div>
          <img src='/img/icons/cart.png' alt='shopping cart' />
        </button>
      </nav>
      <div className={`sideTab ${cartOpen ? '' : 'sideTabHidden'}`}>
          <ShoppingCartTab />
      </div>
      <div>
        {newProduct && <Modal />}
        {/* <Modal /> */}
      </div>
    </div>

  )
}
