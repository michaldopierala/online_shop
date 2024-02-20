import React, { useContext, useEffect, useRef } from 'react'
import { ShoppingCartContext } from '../context/CartContext';
import { useTranslation } from 'react-i18next';



export default function Modal() {
    const { t } = useTranslation();
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
                <div className='text'>{t('shopping_cart.modal.text')}  </div>
                <button onClick={closeCart} >{t('shopping_cart.modal.go')} </button>
                <button onClick={closeModal}>{t('shopping_cart.modal.close')} </button>
            </div>
        </div>
    )
}
