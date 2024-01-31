import React, { useContext, useEffect, useRef } from 'react'
import { ShoppingCartContext } from '../context/CartContext';


export default function Modal() {
    const modalRef = useRef();
    const { closeModal, closeCart } = useContext(ShoppingCartContext);

    // Detects clicks outside of the modal
    const handleClickOutside = event => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        // Attach the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up the event listener
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="Modal">
            <div className="modalContainer" ref={modalRef} >
                <div className='text'>New product was added to cart. </div>
                <button onClick={closeCart} >Go to cart</button>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}
