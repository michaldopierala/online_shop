import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import ShoppingCartTab from './ShoppingCartTab';
import { ShoppingCartContext } from '../context/CartContext';
import Modal from './Modal';
import MobileMenu from './MobileMenu';



export default function Navbar() {

  const { closeCart, cartOpen, CartQuantity, newProduct } = useContext(ShoppingCartContext)


  return (
    <div className='Navbar'>
      <nav className="Navigation" >
        <MobileMenu />
        <Link className="btn" to="/">Home </Link>
        <Link className="btn" to="store">Store</Link>
        <Link className="btn" to="about">About</Link>
        <Link className="btn" to="contact">Contact</Link>

        <div className='logo'>SunsetBay</div>
        <button className='shoppingCartIcon' onClick={closeCart}>
          <div className='cartCount'> <span>{CartQuantity}</span>  </div>
          <img src='/img/cart.png' alt='shopping cart' />
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
