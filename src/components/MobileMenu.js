import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function MobileMenu() {
    const [mobileOpen, setMobileOpen] = useState(false)

    function openMenu() {
        mobileOpen ? setMobileOpen(false) : setMobileOpen(true)
    }

    if (!mobileOpen) return <button className='mobileMenu' onClick={openMenu}> <img src='/img/menu.png' alt='menu btn' /> </button>


    return (
        <div className='MobileMenu'>
            <button className='close_menu' onClick={openMenu}><img src='/img/close_white.png' alt='close btn' /></button>
            <div className='tab'>
                <Link className="link" onClick={openMenu} to="/">Home </Link>
                <Link className="link" onClick={openMenu} to="store">Store</Link>
                <Link className="link" onClick={openMenu} to="about">Aboute</Link>
                <Link className="link" onClick={openMenu} to="contact">Contact</Link>
            </div>
        </div>
    )
}
